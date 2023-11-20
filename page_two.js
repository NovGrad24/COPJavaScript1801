var headingtext= "<h2>Enter The Safe Space For Couch Potatoes!</h2>";
var myintro= "What is your favorite number?";
var linktag= "<a href=\"http://sotd.us/qrentellaadams1/pagetwo.html">Online Form</a>";

//The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.

var red text= "<span style=\"color: #8B0000\">Thank you for being here</span>";
var begineffect="<strong>";
var endeffect= "</strong>";
var beginpara= "<p>";

let Area, FavNum;
var FavNum= prompt ("enter favorite number");

function calculate(Radius) {
  CalArea(Radius);
  CalFavNum(Radius);
}
function CalFavNum(Radius) {
  FavNum= Radius * 3.1415926 * 2;
  console.log("myFavNum is :" + FavNum);
}
function CalArea(Radius) {
  Area=Radius * Radius * 3.1415926;
  console.log("Area is:"+ Area);
}
calculate(Radius);

document.write(myheading);
document.write(begineffect + sometext + endeffect);
document.write(beginpara + redtext + endpara);
