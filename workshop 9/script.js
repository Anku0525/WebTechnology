//console.log("Hello world I am learning JavaScript!!!")
/*let a = 6;
let b = 7;
let sum = a+b;
console.log(sum);*/

/*var a = 6;
var b = 7;
var multiple = a*b;
console.log("The multiple of two numbers is " + multiple);*/

/*const PI = 3.14;
let radius = window.prompt("Enter radius: ");
let circumference = 2*PI*radius
console.log("The circumference of circle: " + circumference);*/


/*let age = window.prompt("Enter the age of dog")
function bark()
{
    if (age >= 10){
        console.log("The dog is very old. " + age)
    }
    else{

        console.log("The dog is young")
    }
}

function sleep()
{
    if (age >= 10){
        console.log("The dog is sleepy.")
        }
        else{
            console.log("The dog is active.")
}
}
bark();
sleep();*/

document.getElementById("myBtn").onclick = function(){
    let radius = document.getElementById("MyNumber").value;
    console.log(radius);
    const PI = 3.14;
    let circumference = 2 * PI * radius;
    document.getElementById("circumference").innerHTML = "Circumference: " + circumference;
    //document.getElementById("circumference").append(circumference);
    alert("Hello CG4 and CG10")
}





