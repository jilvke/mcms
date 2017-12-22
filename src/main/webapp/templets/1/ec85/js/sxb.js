function show_erweima(id,linkurl)
{
	var macontain = $("#ma_"+id);
	if(macontain.html()=="")
	{
		macontain.qrcode({
			render: "canvas", //table方式
			width: 128, //宽度
			height:128, //高度
			text: linkurl //任意内容
		});
	}
}