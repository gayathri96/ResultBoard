   (function() {
    var getMarks = [
    {
        name:"rajiv",
        marks:{
            "Maths":"44",
            "English":"12",
            "Science":"45"
        },
        rollNumber:"KV2017-5A2"
    },
    {
        name:"abhishek",
        marks:{
            "Maths":"50",
            "English":"18",
            "Science":"37"
        },
        rollNumber:"KV2017-5A1"
    },
    {
        name:"dany",
        marks:{
            "Maths":"42",
            "English":"34",
            "Science":"50"
        },
        rollNumber:"KV2017-5A3"
    },
     {
        name:"zoya",
        marks:{
            "Maths":"49",
            "English":"41",
            "Science":"35"
        },
        rollNumber:"KV2017-5A4"
    }
];
   var marks = getMarks.sort(function (a, b) {
  var textA = a.name.toUpperCase();
  var textB = b.name.toUpperCase();

  return textA.localeCompare(textB);
});
var studentStatus = "";
var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
for(let i = 0; i < marks.length ; i++){

   Object.values(marks[i].marks).map((val)=>{
   if(val < 20){
      studentStatus = "Fail";
   }
   else if (val == 50) {
    if(studentStatus  == "Fail"){
         studentStatus = "Fail";
    }
    else{

      studentStatus = "Topper";
    }
   }
   else{
      if(studentStatus  == "Fail"){
         studentStatus = "Fail";
       }
       
       else if(studentStatus  == "Topper"){
         studentStatus = "Topper";
       }
       else{
         studentStatus = "Pass";
      }
   }
});

var totalMarks = Object.values(marks[i].marks).reduce((acc,sum)=>{
   return (acc * 1) + (sum * 1)
});
var newRow   = tableRef.insertRow();
var newCelOne  = newRow.insertCell(0);
var newCelTwo  = newRow.insertCell(1);
var newCelThree  = newRow.insertCell(2);
var newCelFour  = newRow.insertCell(3);
newCelOne.innerHTML = marks[i].name;
newCelOne.className  = "studentname" +" " +studentStatus;
newCelTwo.innerHTML = marks[i].rollNumber;
newCelTwo.className  = studentStatus;
newCelThree.innerHTML = totalMarks;
newCelThree.className  = studentStatus;
newCelFour.innerHTML = studentStatus;
newCelFour.className  = studentStatus;
studentStatus= "";
}
})();
