(() => {
	$(".first-section > div:eq(1)").after('<div id="simulation"></div>');
	$("#simulation").append('<input type="button" value="aaaaa">');

	var s = `
  
	.circle {
		padding-left: 100px;
		padding-right: 100px;
		height: 100px;
		background: rgb(246, 156, 85);
		border-radius: 10px;
	 }
  `;
})();
