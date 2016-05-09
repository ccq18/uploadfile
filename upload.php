<?php
/**
 * Created by PhpStorm.
 * User: liurongdong
 * Date: 2016/1/19
 * Time: 11:00
 */
//测试代码，正式上传请自行修改
$maxFileSize = 2000000;
$allTypes = [ "image/gif", "image/jpeg","image/pjpeg"];
function response($data){
    exit('<script >parent.'.$_POST['callback'].'('.json_encode($data).');</script>');
}
if (isset($_FILES["file"]) && in_array($_FILES["file"]["type"],$allTypes)  && ($_FILES["file"]["size"] < $maxFileSize))
{
    if ($_FILES["file"]["error"] > 0)
    {
        response(['status'=>403,'data'=>'','message'=>'上传出错:'.$_FILES["file"]["error"]]);
    }
    else
    {
        $pathinfo = pathinfo($_FILES["file"]["name"]);
        $fileTypeName = uniqid().".{$pathinfo['extension']}";
        $filePath = "/upload/" . $fileTypeName;
        move_uploaded_file($_FILES["file"]["tmp_name"], __DIR__.$filePath);
        response(['status'=>200,'data'=>['name' =>$_FILES["file"]["name"],'url'=>$filePath],'message'=>'上传成功']);
    }
}
else
{
    response(['status'=>403,'post'=>$_POST,'data'=>'','message'=>'上传出错:文件过大或格式不正确']);
}