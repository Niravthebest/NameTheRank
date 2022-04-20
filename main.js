
names = [];
numbers = [];


function add(){

    var namevar = document.getElementById("nameinput").value; 
    var numvar = document.getElementById("numinput").value;

    names.push(namevar);
    numbers.push(numvar);

    document.getElementById("display").innerHTML =  namevar;

    document.getElementById("display2").innerHTML = numvar;

    document.getElementById("nameinput").innerHTML = "";
    document.getElementById("numinput").innerhtml = "";
    
}






var winner = math.max

