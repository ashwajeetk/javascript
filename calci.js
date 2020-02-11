function addition(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var n1=parseInt(num1);
	var n2=parseInt(num2);
	var addition=n1+n2;
	document.getElementById("demo").innerHTML = addition;
}
function substraction(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var n1=parseInt(num1);
	var n2=parseInt(num2);
	var substract=n1-n2;
	document.getElementById("demo").innerHTML = substract;
}
function multiplication(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var n1=parseInt(num1);
	var n2=parseInt(num2);
	var mul=n1*n2;
	document.getElementById("demo").innerHTML = mul;
}
function division(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var n1=parseInt(num1);
	var n2=parseInt(num2);
	var div=n1/n2;
	document.getElementById("demo").innerHTML = div;
}