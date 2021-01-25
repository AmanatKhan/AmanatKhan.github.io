function addChar(x){
    document.getElementById('display').value += " " + x;
}

function CLR(){
    document.getElementById('display').value = " ";
}

function addNum(x){
    document.getElementById('display').value += x;
}

function calculate(){
    let a = document.getElementById('display').value;
    let b = eval(a);
    document.getElementById('display').value = b;
}
