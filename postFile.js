;
$.postFile = function(_callback,option){
	option = $.extend({},$.postFile.option,option);
	iframeName = '_iframe'+Math.random();
	var iframe = $('<iframe name="'+iframeName+'" style="display:none;"></iframe>');
	var file=$('<input  type="file" id="_file'+Math.random()+'" name="file" >');
	var callbackName =  'callback'+parseInt(10000000*Math.random());
	var form = $('<form target="'+iframeName+'" method="post" enctype="multipart/form-data"  action="'+option.url+'"  > <input value="'+callbackName+'" type="text" name="callback"></form>')
	form.append(file);
	file.change(function(){option.onEnd();form.submit();});
	window[callbackName] = function(data){
		option.onBegin();
		_callback(data);
		//移除资源
		file.remove();
		iframe.remove();
		form.remove();
		window[callbackName] =undefined;
	}
	$('body').append(iframe);
	$('body').append(form);

	file.click();
}
$.postFile.option = {
	url: '/upload.php',//上传地址
	formName:'file',//表单域名称
	onBegin:function(){
	},
	onEnd:function(){

	}
};
/*demo
 $('#testBtn').click(function(){
 $.postFile(function(data,isSuccess,fileForm){
 console.log(fileForm);
 })
 })*/