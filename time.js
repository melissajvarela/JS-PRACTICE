<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Practice Time Greeting</title>

</head>
<body>
        <script type="text/javascript">
          var d = new Date();
          var time = d.getHours();
          
          if (time<12) {
            document.write("<h1>Good Morning, Welcome to my page!!</h1>");
          }
          else if (time>12 && time<18)
          
          document.write("<h1>Good Afternoon, Welcome to my page!!</h1>");
          
          
          else {
            document.write("<h1>Good Evening, Welcome to my page!!</h1>");
          }
        </script>
</body>
</html>