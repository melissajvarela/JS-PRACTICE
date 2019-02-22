var d = new Date();
var time = d.getHours();

if (time<12) {
  document.write("<h1>Good Morning, Welcome to my fake page!!</h1>");
}
else if (time>12 && time<18)

document.write("<h1>Good Afternoon, Welcome to my fake page!!</h1>");


else {
  document.write("<h1>Good Evening, Welcome to my fake page!!</h1>");
}