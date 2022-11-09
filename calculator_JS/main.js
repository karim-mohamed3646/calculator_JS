function OpenNav() {
    document.getElementById("MySidebar").style.width="250px";
}

function closedNav() {
    document.getElementById("MySidebar").style.width="0";
}

let output = document.getElementById("calc") 

function Display(num) {
    output.value += num; 
}
function Clear() {
    output.value = "" ;
}
function Delete() {
    output.value = output.value.slice(0, -1);
}
function Calc() {
    try {
        output.value = eval(output.value);
    }
    catch(err) {
        output.value = "Error";
    }
}
function ColorToggle() {
    var BODY = document.body;
    BODY.classList.toggle("light_mood");
}
