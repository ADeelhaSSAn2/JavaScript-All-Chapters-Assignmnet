//  Question no #1

function power(a, b){
    return Math.pow(5 ,2)
}
var result = power(5 ,2)
document.write(result + "<br/>") 


// Question no # 3
 function calculateTriangleArea(a , b , c){
    var S = (a + b + c)/ 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
 }
var a = 5;
var b = 5;
var c = 6
var area = calculateTriangleArea(a , b , c);
document.write(area + "</br>");

// Question #4
function calculateAverage(sub1 , sub2 , sub3){
    return(sub1 , sub2 , sub3) /3;
}

function calculatePercentage(sub1, sub2, sub3) {
    var totalMarks = sub1 + sub2 + sub3;
    var totalSubjects = 3;
    return (totalMarks / (totalSubjects * 100)) * 100;
}

function mainFunction(sub1, sub2, sub3) {
    var average = calculateAverage(sub1, sub2, sub3);
    var percentage = calculatePercentage(sub1, sub2, sub3);
    document.write("Average marks:", average + "<br/>");
    document.write("Percentage:", percentage + "%");
}
mainFunction(85, 90, 95);

