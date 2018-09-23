# 使用  
## 1 引入postFile.js 及jquery  
## 2 开始文件上传  
$('#testBtn').click(function(){
        $.postFile(function(rs){
});

## 测试说明  
windows 环境下且装了php后可以直接使用sever.php开启测试
## demo
1.安装了php环境
2.根目录创建upload文件夹
3.运行以下命令
 ```
 php -S localhost:8000
 ```
 4.访问http://localhost:8000/
