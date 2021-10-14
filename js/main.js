var say = document.getElementById("sayhi");
var select = document.getElementById("h");
var selectoption = select.options[select.selectedIndex].value;
say.onclick=function(){
    var x =document.getElementById(x);
    var y = document.getElementById(y);
    if(selectoption =="+"){
        document.getElementById("show").innerHTML = x + y;
    }
    else if(selectoption =="-"){
        document.getElementById("show").innerHTML = x-y;
    }
    else if(selectoption =="*"){
        document.getElementById("show").innerHTML = x*y;
    }
    else{
        document.getElementById("show").innerHTML = x/y;
    }
    console.log(select.value);
    console.log(x+y);
}
