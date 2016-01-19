;
$.postFile = function(callback){
	/*生成file*/
	var fileForm=$('<input  type="file" id="_file'+Math.random()+'" style="display: none">');
	$('body').append(fileForm);
	/*模拟点击*/
	fileForm.click();
	/*监听文件更改事件然后上传。*/
	fileForm.change(function(){
		var formData = new FormData();
		$.postFile.option.data = formData;
		formData.append($.postFile.option.formName, fileForm[0].files[0]);
		$.ajax($.postFile.option).done(function(res) {
			callback(res,true,fileForm);
			fileForm.remove();
		}).fail(function(res) {
			callback(res,false,fileForm);
			fileForm.remove();
		});
	});
}
$.postFile.option = {
	url: '/upload.php',//上传地址
	formName:'file',//表单域名称
	type: 'POST',
	cache: false,
	processData: false,
	contentType: false
};
/*demo
 $('#testBtn').click(function(){
 $.postFile(function(data,isSuccess,fileForm){
 console.log(fileForm);
 })
 })*/