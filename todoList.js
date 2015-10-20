/**
 * @author zhoubj
 * @date 2015-10-19
 */

/**
 * 将输入框的内容添加到显示列表 修改刷新cookies
 * @param {[type]} itemTxt [页面输入的日志信息]
 */
todoList.addItem = function(itemTxt){
	var lrTxt = '';
	if(itemTxt == '' || itemTxt == undefined){
		lrTxt = $("#lr").val();
	}
	if(lrTxt == '' || lrTxt == undefined){
		itemTxt = lrTxt;
		var htm = '<li><div class="item"><input type="checkbox" class="check"><span class="txt">'+itemTxt+'</span></div></li>';
		$("#aaaa>.todoListUl").append(htm);
		//保存到cookie
		todoList.saveData(domId);
	}
	
}

/**
 * 切换完成状态 </br> 修改刷新cookies
 * 增加删除线样式
 * @return {[type]} domId
 */
todoList.toggleState = function(domId){
	var json = todoList.getData(domId);
	//修改样式
	if(json.state === 0){
		$("#"+domId+">span").css({'text-decoration':'line-through'});
	}else{
		$("#"+domId+">span").css({'text-decoration':''});
	}
	//刷新cookes
	todoList.saveData(domId);
}
