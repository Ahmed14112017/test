var say = document.getElementById("sayhi");



function calac(){
    var select = document.getElementById("o");
    var selectoption = select.value;
    console.log(selectoption);
    var x = +(document.getElementById("x").value);
    var y = +(document.getElementById("y").value);
    if(selectoption =="+"){
        document.getElementById("show").innerText = +(x+y);
    }
    else if(selectoption =="-"){
        document.getElementById("show").innerText = (x-y);
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

    
function nettaxes(){
    let salary =document.getElementById("salary").value;
    let show = document.getElementById("show").value;
    if(salary<=1000){   
        document.getElementById("tax").value=.1;
        document.getElementById("show").value= salary -(salary*.1);
        console.log(salary*.1);
        console.log(show);
    }
    else if(salary>1000 && salary<10000){
        document.getElementById("tax").value=.2;
        document.getElementById("show").value = salary -(salary*.2);
        console.log(salary*.2);
        console.log(show);
    }
    else if(salary>10000){
        document.getElementById("tax").value=.3;
        document.getElementById("show").value = salary -(salary*.3);
        console.log(salary*.3);
        console.log(show);
    }
};
function result(){
    var degree = document.getElementById("degree").value;
    if(degree<65){
        document.getElementById("result").value = "weak";
    }
    else if(degree>=65&&degree<80){
        document.getElementById("result").value = "good";
    }
    else if(degree>=80){
        document.getElementById("result").value = "very good";
    }
}
