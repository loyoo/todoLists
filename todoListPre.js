var todoList = {};
todoList.json = {};


todoList.show = function (domId) {
  todoList.showList(domId);
  todoList.showAdd(domId);
};