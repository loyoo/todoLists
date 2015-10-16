todoList.listData(json) = function(){
		var obj = JSON.parse(json);
		return obj;
	}

todoList.add(str)  = function(){
		JSON.stringify(str);
		json+= str;
}
