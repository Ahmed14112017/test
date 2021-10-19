var say = document.getElementById("sayhi");



say.onclick=function(){
    var select = document.getElementById("o");
    var selectoption = select.value;
    console.log(selectoption);
    var x =document.getElementById("x").value;
    var y = document.getElementById("y").value;
    if(selectoption =="+"){
        document.getElementById("show").innerText =[parseInt(x)] + [parseInt(y)];
    }
    else if(selectoption =="-"){
        document.getElementById("show").innerText = x - y;
    }
    else if(selectoption =="*"){
        document.getElementById("show").innerText = x*y;
        
    }
    else{
        document.getElementById("show").innerText = x/y;
    }
    // console.log(select.value);
    // console.log(x+y);
    // console.log(x*y);
}
// function changeFunc() {
// var selectBox = document.getElementById("selectBox");
// var selectedValue = selectBox.options[selectBox.selectedIndex].innerHTML;
// alert(selectedValue);
// }

var users =[];

document.getElementById("add").onclick=function(){
    item = document.getElementById("input").value;
    users.push(item);
    console.log(users);
    console.log(users.length);
    document.getElementById("input").value="";
}
