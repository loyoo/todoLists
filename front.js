	var showList = function(arr){
            var re = "";			
			re = '<ul class="todoListUl">';
			for(i=0;i<arr.length;i++){
				if(arr.state === 1){
				re +='<li><div class="item"><input type="checkbox" value="checkbox" checked="checked"><span class="txt">'+arr.txt+'</span></div></li>';
			  }
            }
			re +='</ul>';
			return re;
		}
	//$("#aaaa").append(showList(testArr));