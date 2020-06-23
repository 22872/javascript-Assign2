QUESTION1:
//var first=prompt("enter your first name");
//var last=prompt("enter your last name");
//var fullname=alert("your full name is : " +first +last);

QUESTION:2
//var input=prompt("what is your favroutie mobile model");
//var sln = input.length;
//document.write("my favroutie mobile model is:" +input +"<br/>" +sln);

QUESTION:3
//var text="pakistani";
//var segindex = text.indexOf("n");
//document.write("index of n is : " +segindex);

QUESTION:4
//var text="hello world";
//var segindex=text.lastindexof ("l");
//document.write( "last index of l is : " +segindex);

QUESTION:5
//var user="pakistani";
//var strindex= user.charAt(3);
//document.write("character at 3 is :" +strindex);

QUESTION:6
//var firstname="izba";
//var lastname = "Tazeem";
//fullname="your fullname is:";
//document.write(fullname + " "+ firstname + " "+lastname);

QUESTION:7
//var city="Hydrebad";
//document.write("city:" +city +"<br/>");
//var city2=city.replace("Hydrebad", "Islamabad");
//document.write("after replacement:" +city2);

QUESTION:8
//var message = "Ali and Sami are best friends. They play cricket and football together."; 
//document.write(message +"<br/>");
//var message2= message.replace("Ali and Sami are best friends. They play cricket and football together.", "Ali & Sami are best friends. They play cricket & football together.");
//document.write(message2);

QUESTION:9
//var num ="472"; 
//var str=parseInt(num);
//document.write("value:" +str +"<br/>");
//document.write("type:" +typeof(str));


QUESTION:10
//var user=prompt("enter some thing");
//user=user.toUpperCase()
//document.write("upper case:" +user);

QUESTION:11
//var user=prompt("user input");
//var firstchar=user.slice(0,1);
//firstchar=firstchar.toUpperCase()
//var otherchar=user.slice(1)
//otherchar=otherchar.toLowerCase()
//var user=firstchar+otherchar;
//document.write("title case:" +user);

QUESTION:12
//var num=35.56;
//var string=num.toString();
//document.write(string);

QUESTION:13
//var userName=prompt("enter your name");
//var texlength=userName.length;
//for(i=0;i<userName.length;i++)
//{
  //  if(userName.slice(i,i+1)=="!" || userName.slice(i,i+1)=="@"|| userName.slice(i,i+1)=="."||  userName.slice(i,i+1)==".")
//{alert("invalid statements");}

//}

QUESTION:14
//var array=["cake", "apple pie", "cookie", "chips", "patties" ];
//var bakry= prompt("Enter your bakery item");
//bakry=bakry.toLowerCase();
//var bakryItems=array.indexOf(bakry);
//if (array.indexOf(bakry)!= -1)
//{
  //  alert(bakry+ "is available at index" +bakeryItems +"in our bakry");
//}
//else
//{
  //  alert(bakry +"is not available in our bakry");
//}

QUESTION:17
//var user ="pakistan";
//var index=user.charAt(7);
//document.write("last character of:" +index)


QUESTION:15
//var userinput =prompt("enter password");
//function CheckPassword(userinput) 
//{ 

//var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
//if(userinput.value.match(decimal)) 
//{ 
//alert("Correct" );
//return true;
//}
//else
//{ 
//alert("Wrong...!");
//return false;
//}

QUESTION:16
//var universty="universty of karachi";
//var res= universty.split(" ");
//for( var i=0; i<res.length; i++)
//{
//document.write(res[i],"<br/>");
//} 


QUESTION:18
//function count(main_str, sub_str) 
  //  {
    //main_str += '';
    //sub_str += '';

    //if (sub_str.length <= 0) 
    //{
      //  return main_str.length + 1;
    //}

      // subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       //return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    //}
 
//console.log(count("The quick brown fox jumps over the lazy dog", 'the'));




//chapter ******  26 to 30

QUESTION:1
//var userInput=prompt("Enter a positive number");
//document.write("Number is:" +userInput +"<br/>");
//var round=Math.round(userInput)
//document.write("round of value:" +round +"<br/>");
//var cel=Math.ceil(userInput)
//document.write("ceil value is: " +cel +"<br/>");
//var flor=Math.floor(userInput)
//document.write("floor value is :" +flor);

QUESTION:2
//var userInput=prompt("Enter a negative number");
//document.write("Number is:" +userInput +"<br/>");
//var round=Math.round(userInput)
//document.write("round of value:" +round +"<br/>");
//var cel=Math.ceil(userInput)
//document.write("ceil value is: " +cel +"<br/>");
//var flor=Math.floor(userInput)
//document.write("floor value is :" +flor);

QUESTION:3
//document.write(Math.abs(2)+"<br/>");  
   // document.write(Math.abs(2.56));
   
QUESTION:4
//var headuser=prompt("enter heads name");
//var tailuser=prompt("enter tails name");
//var toss=Math.random()*2
//var floor=Math.floor(toss)
//if(floor===0)
//{
 //   alert("heads:"   + headuser      +   "win the toss");
//}
//else{
  //  alert("tails: "    +tailuser              +        "win the toss"); 
//}

QUESTION:5
//var headuser=prompt("enter heads name");
//var tailuser=prompt("enter tails name");
//var dice=Math.random()*4
//var floor=Math.floor(dice)
//if(floor===0)
//{
 // document.write("random dice value:"         +   floor);
//}
//else{
 //   document.write("random dice value: "                 +        floor); 
//}

QUESTION:6
//var user=prompt("enter number between 1 to 100");
//var random=Math.floor(Math.random() * 101)+1; 
//document.write(random);

QUESTION:7
//var userweight=prompt("enter your weight in kilograms");
//var res=parseFloat("userweight");
//document.write(res +"kilograms");

QUESTION:8
//const num = Math.ceil(Math.random() * 10);
//alert(num);
 //const gnum = prompt('Guess the number between 1 and 10 inclusive');
 //if (gnum == num)
  // alert('Matched congrats');
  //else
  // alert('try again, the number was '+gnum);

  

// **********  chapter     

QUESTION:1
//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' <br/>'+time;
//document.write( "The data and time is :" +dateTime);

QUESTION:2
//var month = new Array();
  //month[0] = "January";
  //month[1] = "February";
  //month[2] = "March";
  //month[3] = "April";
  //month[4] = "May";
  //month[5] = "June";
  //month[6] = "July";
  //month[7] = "August";
  //month[8] = "September";
  //month[9] = "October";
  //month[10] = "November";
  //month[11] = "December";
  //var d = new Date();
  //var n = month[d.getMonth()];
  //document.write("Current month is:"+n);

  QUESTION:3
 // var d = new Date();
  //var weekday = new Array(7);
  //weekday[0] = "Sun";
  //weekday[1] = "Mon";
  //weekday[2] = "Tue";
  //weekday[3] = "Wed";
  //weekday[4] = "Thu";
  //weekday[5] = "Fri";
  //weekday[6] = "Sat";
  //var n = weekday[d.getDay()];
  //document.write("today is:"+n)

  QUESTION:4
 //var dayName=["sunday", "Monday","Tuesday", "wednesday", "thursday","friday","saturday"];
 //var date=new Date.getDay();
 //if(dayName[date]==="sunday" ||dayName[date]==="saturday")
// {
  // document.write("today is funday");
  
 //}
 //else {
  // document.write("today is working day");
 //}

 QUESTION:5
  //var x=new Date();
  //var y=x.getDate();
  //if(y<16)
 // {
   // document.write("first fifteen days of month");
  
  //}
//else{
  //document.write("other days of month");
//}

QUESTION:6
// var mintues=new Date();
 //var minMili=mintues.getTime();
 //var mintuesconvert=minMili/(1000*60*60)
 //document.write("current date:" +mintues +"<br/>");
 //document.write("elapsed milisecondsince january 1 1970:"+minMili +"<br/>");
 //document.write("elapsed mintues january 1 1970:"+mintuesconvert+"<br/>");

 QUESTION:7
  //var hours = new Date(). getHours(); 
  //var hours = (hours+24)%24; 
  //var mid='am'; 
  //if(hours==0)
  //{ alert("At 00 hours we need to show 12 am hours=24;") } 
  //else if(hours>12)
   //{ hours=hours%12; mid='pm';} 
  //{ alert ('its a:'  + hours + mid); }

  QUESTION:8
  //var d = new Date("may , 2020 01:15:00");
  //d.setDate(30);
  //var laterDate=d;
  //document.write("later date is:" +laterDate);

  QUESTION:9
  //function days_passed(dt) {
    //var current = new Date(dt.getTime());
    //var previous = new Date(dt.getFullYear(), 0, 1);
  
    //return Math.ceil((current - previous + 1) / 86400000);
  //}
  //console.log(days_passed(new Date(2015, 6, 18)));
  //console.log(days_passed(new Date(2015, 11, 14)));

  QUESTION:11
  //var current=new Date();
  //var miliSeconds=current.getTime();
  //var min;
  //document.write("current:" +current +"<br/> elapsed milisecond since january 1, 1970" +miliSeconds+"<br/>elapsed milisecond since january 1, 1970"+min)

QUESTION:10

//var y12 =new DAte("dec 31 2014 00:00:00");
//var L45 = new Date ("Dec 5 2015" );
//var io1 = L45.setTime();
//var Pkj = y12.setTime();
//var we2 = io1 - Pkj;
//var d67 = we2/(1000*60);
//var I9x = d67;
//alert("seconds"+I9x);

QUESTION:13
//var age=prompt("enter your age")
//var birthYear=2020-age;
//alert("your birthyear is:" +birthYear);
 



// ************** chapter 35 to 38

QUESTION:1
//var a=new Date();
//alert(a);

QUESTION:2

 //var firstName=prompt("enter first name");
  //var lastName=prompt("enter last name");
  //fullName =function ()
  //{
    //  this.fullName = this.firstName 
      //+  ' ' + this.lastName;
  //}

//fullName();
//alert(fullName);

QUESTION:3
//var input1 = prompt("Enter a number: ", 0);
//var input2 = prompt("Enter another number: ", 0);
//var input3 = window.prompt("Enter another number: ", 0);
//var value1 = parseFloat(input1) + parseFloat(input2);
//var value3 = parseFloat(input3);
//var sum = sum1(value1 , value3);
//document.writeln("<h1> First number: " + value1 + "</h1>");
//document.writeln("<h1> Second number: " + value3 + "</h1>");
// document.writeln("<h1> Sum: " + sum + "</h1>");

//function sum1 (x,y)
//{ 
//   return (x+y);
//}

QUESTION:4
//var globalResult;

//var addNumbers = function(num1, num2, num3) 
//{
  //globalResult = num1 + num2+ num3;
  //document.write("The global result is: " + globalResult);
//};
//addNumbers(5, 7,33);
//document.write(globalResult);

QUESTION:5
//var sumOfSquares = function (num) {
  //var i,
    //sum = 0;
//for (i = 1; i <= num; i += 1) {
  //  sum = i * i;
  //}
  //return sum;
//}

//var num = parseInt(prompt("Enter a number:"), 10); 
//alert("The sum of squares for numbers up to and including " + num  +" is " +
  //sumOfSquares(num)) 

QUESTION:6
//function factorial(n){
  //let answer = 1;
  //if (n == 0 || n == 1){
    //return answer;
  //}else{
    //for(var i = n; i >= 1; i--){
      //answer = answer * i;
    //}
    //return answer;
  //}  
//}
//let n = 5;
//answer = factorial(n)
//alert("The factorial of " + n + " is " + answer);

QUESTION:7

QUESTION:8
//function pythagorean(sideA, sideB){
  //return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//}

//alert(pythagorean(2, 3));

QUESTION:9
//var length = prompt("Enter a whole number for the length of your rectangle.");
  //      var width = prompt("Enter a whole number for the width of your rectangle.");
    //    function area(length, width) {
      //      return length * width;
        //}
        //function perimeter(length, width) {
          //  return 2*( length + width);
        //}
        //document.write('The area of your rectangle is ' + area(length, width)+"<br/>");         
        //document.write('The perimeter of your rectangle is ' + perimeter(length, width));


QUESTION:10
//function check_Palindrome(str_entry){
//var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
 //   var ccount = 0;
 // if(cstr==="") {
 //     console.log("Nothing found!");
   //   return false;
    //}
  //   if ((cstr.length) % 2 === 0) {
      //ccount = (cstr.length) / 2;
    //} else {
 //  if (cstr.length === 1) {
  //      console.log("Entry is a palindrome.");
    //    return true;
      //} else {
  //ccount = (cstr.length - 1) / 2;
    //  }
    //}
  //for (var x = 0; x < ccount; x++) {
 //  if (cstr[x] != cstr.slice(-1-x)[0]) {
   //     console.log("Entry is not a palindrome.");
     //   return false;
      //}
    //}
    //console.log("The entry is a palindrome.");
    //return true;
  //}
  //heck_Palindrome('madam');
  //heck_Palindrome('nurses run');
  //check_Palindrome('fox');
  

QUESTION:11
//function uppercase(str)
//{
  //var array1 = str.split(' ');
  //var newarray1 = [];
    
  //for(var x = 0; x < array1.length; x++){
    //  newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  //}
  //return newarray1.join(' ');
//}
//document.write(uppercase("the quick brown fox"));

QUESTION:12
//function find_longest_word(str)
//{
 // var array1 = str.match(/\w[a-z]{0,}/gi);
  //var result = array1[0];

  //for(var x = 1 ; x < array1.length ; x++)
  //{
    //if(result.length < array1[x].length)
    //{
    //result = array1[x];
    //} 
  //}
  //return result;
//}
//document.write(find_longest_word('Web Development Tutorial'));

QUESTION:13
//function char_count(str, letter) 
//{
 //var letter_Count = 0;
 //for (var position = 0; position < str.length; position++) 
 //{
   // if (str.charAt(position) == letter) 
     // {
      //letter_Count += 1;
      //}
  //}
  //return letter_Count;
//}
//alert(char_count('w3resource.com', 'o'));

QUESTION:14
//function calcCircumference(radius) {
 // var circumference = (Math.PI * 2) * radius;
 // var area = (Math.pow(radius, 2)) * Math.PI;
 
 // console.log ("The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + ".")
//}
 //calcCircumference(37);
 //calcCircumference(10);
// calcCircumference(5);
// calcCircumference(8);

