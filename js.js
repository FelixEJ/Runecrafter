var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var gradient = "black";

var letterTable = 
[
  'Q','W','E','R','T','Y',
  '_','_','U','I','O','P',
  'A','S','D','F','G','H',
  '_','_','_','J','K','L',
  'Z','X','C','V','B','N',
  ' ','_','_','_','_','M'
];

var listOfCoordinates = [];

function test(){
  document.getElementById('log').innerHTML = "test";
}

function setCoords(name){
  listOfCoordinates = [];
  for (var i = 0; i < name.length; i++) {
    for (var j = 0; j < letterTable.length; j++) {
      if(name[i] == letterTable[j]) {
        var num = letterTable.indexOf(letterTable[j]);
        var X = num % 6 + 2;
        X = Number(X + "50");
        var Y = Math.floor(num / 6) + 2;
        Y = Number(Y + "50");

        listOfCoordinates.push({X,Y});
      }
    }
  }
}

function genSharp(){
  var name = document.getElementById("spell").value;
  name = name.toUpperCase();
  name = name.split(""); 
  
  //document.getElementById('log').innerHTML = "test";
  //document.getElementById('log').innerHTML += "<br>" + JSON.stringify(listOfCoordinates[i]["X"]);
  
  ctx.clearRect(0,0, canvas.width, canvas.height);
  setLetters();
  setColour();
  setCoords(name);
  
  var X1 = 0;
  var Y1 = 0;

  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(listOfCoordinates[0]["X"], listOfCoordinates[0]["Y"]);
  for (var i = 1; i<listOfCoordinates.length; i++){
    X1 = listOfCoordinates[i]["X"];
    Y1 = listOfCoordinates[i]["Y"];
    ctx.lineTo(X1, Y1);
  }
  ctx.stroke();
}
  

function genCurvy(){
  var name = document.getElementById("spell").value;
  name = name.toUpperCase();
  name = name.split("");
  
  ctx.clearRect(0,0, canvas.width, canvas.height);
  setLetters();
  setColour();
  setCoords(name);
  
  var X1;
  var X2;
  var Y1;
  var Y2;
  var refx;
  var refy;
  
  for (var i = 0; i<listOfCoordinates.length; i++){
    X1 = listOfCoordinates[i]["X"];
    Y1 = listOfCoordinates[i]["Y"];
    X2 = listOfCoordinates[i+1]["X"];
    Y2 = listOfCoordinates[i+1]["Y"];
    
    refx = canvas.width / 2;
    refy = canvas.height / 2;  

    var lineLength = Math.sqrt((Math.pow((X2-X1),2) + Math.pow((Y2-Y1),2)));
    lineLength = Math.floor(lineLength);
    rad = lineLength / 2;
    
    if (Y2 > Y1){ //going down
      refx = X1 + rad;
    }
    else if (Y1 > Y2){ //going up
      refx = X1 - rad;
    }

    if (X2 > X1){ //going right
      refy = Y1 - rad;
    }
    else if (X1 > X2){ //going left
      refy = Y1 + rad;
    }
    
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(X1, Y1);
    ctx.arcTo(refx, refy, X2, Y2, rad);
    ctx.stroke();

    ctx.clearRect(0,0, 1000, 100); // top
    ctx.clearRect(0,0, 100, 1000); // left
    ctx.clearRect(900, 0, 1000, 1000); // right
    ctx.clearRect(100,900, 1000, 1000); // bottom
  }
}

function genSwirley(){
  var name = document.getElementById("spell").value;
  name = name.toUpperCase();
  name = name.split("");
  
  ctx.clearRect(0,0, canvas.width, canvas.height);
  setLetters();
  setColour();
  setCoords(name);
  
  var X1;
  var X2;
  var Y1;
  var Y2;
  var refx;
  var refy;
  
  for (var i = 0; i<listOfCoordinates.length; i++){
    X1 = listOfCoordinates[i]["X"];
    Y1 = listOfCoordinates[i]["Y"];
    X2 = listOfCoordinates[i+1]["X"];
    Y2 = listOfCoordinates[i+1]["Y"];
    
    refx = canvas.width / 2;
    refy = canvas.height / 2;  

    var lineLength = Math.sqrt((Math.pow((X2-X1),2) + Math.pow((Y2-Y1),2)));
    lineLength = Math.floor(lineLength);
    rad = lineLength / 2;
    
    if (Y2 > Y1){ //going down
      refx = X1 - rad;
    }
    else if (Y1 > Y2){ //going up
      refx = X1 + rad;
    }

    if (X2 > X1){ //going right
      refy = Y1 + rad;
    }
    else if (X1 > X2){ //going left
      refy = Y1 - rad;
    }
    
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(X1, Y1);
    ctx.arcTo(refx, refy, X2, Y2, rad);
    ctx.stroke();

    ctx.clearRect(0,0, 1000, 100); // top
    ctx.clearRect(0,0, 100, 1000); // left
    ctx.clearRect(900, 0, 1000, 1000); // right
    ctx.clearRect(100,900, 1000, 1000); // bottom
  }
}

function genWavey(){
  var name = document.getElementById("spell").value;
  name = name.toUpperCase();
  name = name.split("");
  
  ctx.clearRect(0,0, canvas.width, canvas.height);
  setLetters();
  setColour();
  setCoords(name);
  
  var X1;
  var X2;
  var Y1;
  var Y2;
  var refx;
  var refy;
  
  for (var i = 0; i<listOfCoordinates.length; i++){
    X1 = listOfCoordinates[i]["X"];
    Y1 = listOfCoordinates[i]["Y"];
    X2 = listOfCoordinates[i+1]["X"];
    Y2 = listOfCoordinates[i+1]["Y"];
    
    refx = canvas.width / 2;
    refy = canvas.height / 2;  

    var lineLength = Math.sqrt((Math.pow((X2-X1),2) + Math.pow((Y2-Y1),2)));
    lineLength = Math.floor(lineLength);
    rad = lineLength / 2;
    
    if (Y2 > Y1){ //going down
      refx = X1 + rad;
    }
    else if (Y1 > Y2){ //going up
      refx = X1 - rad;
    }

    if (X2 > X1){ //going right
      refy = Y1 - rad;
    }
    else if (X1 > X2){ //going left
      refy = Y1 + rad;
    }
    
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(X1, Y1);
    ctx.quadraticCurveTo(refx, refy, X2, Y2);
    ctx.stroke();

    ctx.clearRect(0,0, 1000, 100); // top
    ctx.clearRect(0,0, 100, 1000); // left
    ctx.clearRect(900, 0, 1000, 1000); // right
    ctx.clearRect(100,900, 1000, 1000); // bottom
  }  
}

function setColour(){
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("2d");
  
  //document.getElementById('log').innerHTML = "test";

  if(document.getElementById("c1").checked){
    var colour1 = document.getElementById("colour1").value;

    gradient = colour1;
    //document.getElementById('log3').innerHTML = "c1";
  }
  else if(document.getElementById("black").checked){
    gradient = "black";    
  }
  else if(document.getElementById("c2").checked){
    var colour1 = document.getElementById("colour1").value;
    var colour2 = document.getElementById("colour2").value;

    gradient = ctx.createLinearGradient(200, 200, 700, 700);
    gradient.addColorStop("0", colour1);
    gradient.addColorStop("1.0", colour2);

    //document.getElementById('log3').innerHTML = "mix";
  }
  else if(document.getElementById("rainbow").checked){
    gradient = ctx.createRadialGradient(500, 500, 50, 500, 500, 500);
    gradient.addColorStop("0", "red");
    gradient.addColorStop("0.1", "orange");
    gradient.addColorStop("0.2" ,"yellow");
    gradient.addColorStop("0.3", "green");
    gradient.addColorStop("0.4", "blue");
    gradient.addColorStop("0.5", "purple");

    //document.getElementById('log3').innerHTML = "rainbow";
  }

  //document.getElementById('log').innerHTML = "testy";

  ctx.strokeStyle = gradient;
  ctx.lineWidth = 10;

  /* 
  ctx.beginPath();          // Create a starting point
  ctx.moveTo(100, 20);          // Create a horizontal line
  ctx.arcTo(200, 200, 150, 70, 50); // Create an arc
  //ctx.lineTo(150, 120);         // Continue with vertical line
  ctx.stroke();   

  // Gradient test line
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(1000, 1000);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 1000);
  ctx.lineTo(1000, 0);
  ctx.stroke(); */
}

function setLetters(){
  //document.getElementById('log').innerHTML = "test";
  if(document.getElementById("Gith").checked){
    letterTable = 
    [
      'T','P','E','L','G','R',
      'C','V','Q','_','K','U',
      'A','X','_','_','_','D',
      'M','B','Z','_','J','S',
      '_','_','F','W','Y','O',
      ' ','_','I','N','U','H',
    ];
    //document.getElementById('log3').innerHTML = "Gith";
  }
  else if(document.getElementById("Gnome").checked){
    letterTable = 
    [
      'J','F','_','Y','_','W',
      'B','N','S','L','C','_',
      '_','T','E','A','U','K',
      'G','O','I','R','D','_',
      '_','_','H','M','P','V',
      ' ','_','Z','_','X','Q'
    ];
    //document.getElementById('log3').innerHTML = "Gnome";
  }
  else if(document.getElementById("Dwarf").checked){
    letterTable = 
    [
      'C','_','P','_','Y','H',
      '_','D','_','S','M','_',
      'L','O','K','R','_','V',
      '_','T','A','G','I','_',
      'J','U','E','N','B','X',
      ' ','Q','_','W','Z','F'
    ];
    //document.getElementById('log3').innerHTML = "Gnome";
  }
  else if(document.getElementById("Common").checked){
    letterTable = 
    [
      'Q','W','E','R','T','Y',
      '_','_','U','I','O','P',
      'A','S','D','F','G','H',
      '_','_','_','J','K','L',
      'Z','X','C','V','B','N',
      ' ','_','_','_','_','M'
    ];
    //document.getElementById('log3').innerHTML = "Gnome";
  }
  else if(document.getElementById("Dragon").checked){
    letterTable = 
    [
      'E','O','_','_','O','N',
      'R','B','C','Q','P','S',
      '_','Z','V','H','F','_',
      '_','Y','M','K','I','_',
      'I','U','J','X','W','L',
      ' ','T','_','_','G','A'
    ];
    //document.getElementById('log3').innerHTML = "Gnome";
  }
  else if(document.getElementById("Elf").checked){
    letterTable = 
    [
      '_','_','N','S','_','_',
      '_','L','G','C','O','_',
      'E','P','J','Y','M','R',
      'U','V','Q','X','W','I',
      'H','Z','K','F','B','_',
      ' ','D','T','A','_','_'
    ];
    //document.getElementById('log3').innerHTML = "Gnome";
  }
  else if(document.getElementById("").checked){
    letterTable = 
    [
      '_','_','_','_','_','_',
      '_','_','_','_','_','_',
      '_','_','_','_','_','_',
      '_','_','_','_','_','_',
      '_','_','_','_','_','_',
      ' ','_','_','_','_','_'
    ];
    //document.getElementById('log3').innerHTML = "Gnome";
  }
}