<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initialscale=1.0">
<title>Document</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
<div align="center" id='reverseTheArray'></div>
<button id="reverse" onclick="reverseTheArray()">Click The Button To get
the Reverse Value</button>
<script>
   var listOfNames = [
      'John',
      'David',
      'Bob'
   ];
   count=listOfNames.length-1;
   function reverseTheArray(){
      document.getElementById('reverseTheArray').innerHTML =
      listOfNames[count];
      count--;
      if (count<0)
         count=listOfNames.length-1;
   }
</script>
</body>
</html>