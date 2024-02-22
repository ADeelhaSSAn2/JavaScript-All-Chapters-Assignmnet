// Question #01
var num1 = +prompt("Enter first num for Addition" , "3");
var num2 = +prompt("Enter second num for Addition" , "5");
document.write("Sum of "  + num1  + " and "  + num2 + " is " + (num1 + num2)+"<br />");

// Question #02
// Subtraction
var num1 = +prompt("Enter first num for Subtraction" , "3");
var num2 = +prompt("Enter second num for Subtraction" , "5");
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 - num2)+"<br />");

// Multiplication
var num1 = +prompt("Enter fisrt num for Multiplication" , "3");
var num2 = +prompt("Enter second num for Multiplication" , "5");
document.write("Sum of "  + num1  + " and " + num2 + " is " + (num1 * num2)+"<br />");

// Modulus
var num1 = +prompt("Enter fisrt num for Modulus" , "3");
var num2 = +prompt("Enter second num for Modulus" , "5");
document.write("Sum of "  + num1  + " and " + num2 + " is " + (num1 * num2)+"<br />");

// Question #03
var num = +prompt("Enter a number");
var num2 = +prompt("Enter a num to add in previous num");
var res = num + num2;
document.write("Value after variable declaration is: " + num + "<br />");
document.write("initail value : " + num + "<br />");
num++;
document.write("Value after increment is: " + num + "<br />");
document.write("Value after Addition is: " + res + "<br />");
--res;
document.write("Value after decrement is: " + res + "<br />");
document.write("Value after Addition is: " + res/2 + "<br />");

// Question #04
var ticketPrize = "600";
var ticketQuantity = +prompt("How much ticket you want" , "5");
document.write("Total cost to buy " + ticketQuantity + " tickets to a movie is " + (ticketPrize * ticketQuantity) +"PKR" + "</br>");

// Question #05
var table = +prompt("Enter a number you want its table" , "4");
document.write("Table of" + "" + table + "</br>");
for( var i = 1 ; i<=10 ; i++ ){
    document.write(table + "x" + i + "=" + (i * table) + "</br>");
}

// Question #06
var tempInC = prompt(" convert temperature from C to F");
var tempInC2 = prompt(" convert temperature from F to C");
var tempInF2 = (tempInC2 - 32) * 5 / 9;
var tempInF = (tempInC * 9 / 5) + 32;
document.write(tempInC + "<sup>o</sup>C is " + tempInF + "<sup>o</sup>F" + "<br />");
document.write(tempInC2 + "<sup>o</sup>F is " + tempInF2 + "<sup>o</sup>C");

// Question #07
var priceItem01 = "650";
var priceItem02 = "100";
var shippingCharges = "100";
var item01Quantity = +prompt("enter item 01 quantity" , "3");
var item02Quantity = +prompt("enter item 02 Quantity" , "7");

document.write("<h2>Shopping Cart</h2>" + "<br />");
document.write("Price of item 1 is " + priceItem01 + "Rs" + "<br />");
document.write("Quantity of item 1 is " + item01Quantity + "<br />");
document.write("Price of item 2 is " + priceItem02 + "Rs" + "<br />");
document.write("Quantity of item 2 is " + item02Quantity + "<br />");
document.write("Shipping Charges is " + shippingCharges + "<br />" + "</br>");
document.write("<br />" + "Total Cost of your order is " + (priceItem01 * item01Quantity) + (priceItem02 * item02Quantity) + shippingCharges+ "<br />");

// Question #08
var totalMarks = +prompt("Enter your total marks" , "850");
var obtainedMarks = +prompt("Enter your obtained marks", "686");
document.write("<h2>Marks Sheet</h2>" +"<br />");
document.write("Total marks: " + totalMarks +"</br>");
document.write("Obtained marks: " + obtainedMarks +"</br>");
document.write("Percentage: " +(obtainedMarks / totalMarks)* 100 + "%" +"</br>");

// Question #09
var dollar = +prompt("Enter Dollars you have to convert in PKR") * 104.80;
var riyal = +prompt("Enter riyals you have to convert in PKR") * 28;

document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR : " + (dollar + riyal) + "Rs" + "<br />");

// Question #10
document.write((((+prompt("Enter a num to perform arithmetic operations") + 5) * 10) / 2));

// Question #11
var currentYear = "2024";
var birthYear =+prompt("Enter your dirthday date","2002");
document.write("<h1> Age Calculator</h1>" + "</br>");
document.write("Current Year: " + currentYear + "</br>")
document.write("Birth Year: " + birthYear + "</br>");
document.write("Your Age: " + (currentYear - birthYear) + "</br>");

// Question #12
var radius = prompt("Enter the Radius of a Circle.");
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a Circle : " + radius + "<br />");
document.write("The Circumference is : " + circumference + "<br />");
document.write("The Area is : " + area + "<br />");

// Question #13
var CurrentAge = +prompt("Enter your current Age");
var lastAge = +prompt("Enter your Max-Age you want to live");
var snacksPerDay = 5;
var favSnacks = prompt("Enter your Favourite Snacks");

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favourite Snacks : " + favSnacks + "<br />")
document.write("Your Current Age : " + CurrentAge + "<br />");
document.write("Estimated Maximum Age : " + lastAge + "<br />");
document.write("Amount of snacks per day for survive : " + snacksPerDay + "<br />");
document.write("You will need " + (lastAge - CurrentAge) * snacksPerDay + favSnacks + " snacks to last you until the ripe old age of " + lastAge + "<br />");
