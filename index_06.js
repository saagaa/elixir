var todos = [];
var i= 0;
var jsonstring=JSON.stringify (todos)

print_all=function () {
    i=0;
    todos    =JSON.parse(localStorage.getItem('todo'))
    if(todos!=null)
    {
        todos=todos.slice(',');
        for (todo of todos) {
            document.getElementById("todo").innerHTML += "<li onclick='strike(this)' id=" + i + ">" + todo.query + "</li>";
            if(todo.available==false)
            {
                strike(document.getElementById(i));
            }
            i++;
        }
    }
    else{
        todos=[];
    }
}
window.onload = function () {
    print_all();
}
strike = function (e) {
    e.setAttribute('style', 'text-decoration: line-through');
    todos[e.getAttribute("id")].available=false;
    localStorage.setItem("todo",JSON.stringify(todos));
}
add_todo = function () {
    var data=document.getElementById("todo_box").value;
    todos.push({query : data , available: true});
    document.getElementById("todo").innerHTML += "<li onclick='strike(this)' id="+i+" >" + data + "</li>";
    i++;
    localStorage.setItem("todo",JSON.stringify(todos));}

delete_all =function(){

    var j=0;
    while(j<todos.length){
        var todo=todos[j];
        console.log("hmm");
        if(todo.available==false)
        {
            todos.splice(todos.indexOf(todo),1);
            console.log("erasing "+ todo);
        }
        else{
            j++;
        }
    }
    document.getElementById("todo").innerHTML="";
    localStorage.setItem("todo",JSON.stringify(todos));
    print_all();
}
