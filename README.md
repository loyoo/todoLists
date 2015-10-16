# todoList
测试git的项目流程

## 项目目标 m1
* 实现待办事项添加
* 实现事项完成与未完成切换

## m2
* 事项删除
* 显示所有完成/未完成/所有

# 结构
javascript: todoList.js(z), cj.js(h) , md.js(s) ,front.js(s)
html: todoList.html

* todoList(domId);->obj
* todoList.json = {};
* todoList.showList([{txt:'item1',state:0/1}]) : 显示li列表  --x
  * todoList.listData(json) : [{txt:'item1',state:0/1}] --s
    * todoList.getData(domId) : json  --h
* todoList.showAdd();  --x
* todoList.addItem(itemTxt); : 显示新的li  --z
  * todoList.add(itemTxt) : true/false --s
    * todoList.saveData(domId) : json保存到cookie
* todoList.toggleState(id) : 切换完成状态 --z
  * todoList.toggle(id)  : save
    * todoList.saveData



cj.js样例:

        todoList.saveData(domId) = function(){
          //把todoList.json保存到cookie,使用key为todoList-domId
        };
        todoList.getData(domId) = function(){
          //从cookie获取'todoList-domId'节点,再返回文本
          return json;
        };

dom:

ul>(li>div.item>input.check[type=checkbox]+span.txt{item})*3

json:

        {
          ver:1,
          createTime:1111,
          data:[
            {txt:'item1',state:0},{txt:'itemTxt',state:0}
          ]
        }
