
function setup() {
  createCanvas(600, 600);
  background(240);
  var numCircles = 900;

  push();
  translate(width/2, height/2);
  // for (var i=0; i < numCircles; i++) {
  //   var angle = 2*PI*i/numCircles;
  //
  //   // all right let's take a stab at continuous color transition:
  //   // maybe should just use HSL because we'll want to change brightness..... could use a i guess (transparency).
  //
  //   // console.log(i * PI / numCircles);
  //   // cos wave from 0 to 2*PI:
  //   var r = 255/2 + 255/2 * cos(i * 2 * PI / numCircles);
  //   // sin wave from 0 to PI:
  //   var g = 255 * sin(i * PI / numCircles);
  //   console.log(r);
  //
  //   var b;
  //   if (i < numCircles/2) {
  //     b = 0;
  //   } else if (i > 9 * numCircles/10) {
  //     b = 100 * (numCircles - i) / numCircles;
  //   } else if (i > 3 * numCircles/5) {
  //     b = 255;
  //   } else {
  //     b = 100;
  //   }
  //   var c = color(r, g, b);
  //   fill(c);
  //   noStroke();
  //   ellipse(200 * cos(angle), 200 * sin(angle), 3, 3);
  // }


  var numDiscs = 100;
  var maxWidth = 300;
  //Oh, HSL is made with this idea in mind LOL:
  for (var i=0; i < numCircles; i++) {
    // rotate(0.1);
    for (var j=0; j < numDiscs; j++) {
      var angle = 2 * PI * i / numCircles; // adding Math.random() here: nice
      var radius = j * maxWidth/numDiscs;
      // console.log(radius);
      var brightness = parseInt(radius * 100 / maxWidth);
      // console.log(brightness);

      var hue = 360 * i / numCircles;
      noStroke();
      var c = color('hsb(' + hue + ', 100%, ' + brightness + '%)');
      fill(c);
      ellipse(radius*cos(angle), radius*sin(angle), 5, 5);
    }

  }


  pop();
}

function draw() {
  // background(240);
  // var numCircles = 600;
  //
  // push();
  // translate(width/2, height/2);
  //
  // var numDiscs = 100;
  // var maxWidth = 300;
  // //Oh, HSL is made with this idea in mind LOL:
  // for (var i=0; i < numCircles; i++) {
  //   // rotate(0.1);
  //   for (var j=0; j < numDiscs; j++) {
  //     var angle = 2 * PI * i / numCircles; // can add on Math.random(0 here for an interesting effect):
  //     var radius = j * maxWidth/numDiscs;
  //     // console.log(radius);
  //     var brightness = parseInt(radius * 100 / maxWidth);
  //     // console.log(brightness);
  //
  //     var hue = 360 * i / numCircles;
  //     noStroke();
  //     var c = color('hsb(' + hue + ', 100%, ' + brightness + '%)');
  //     fill(c);
  //     ellipse(radius*cos(angle), radius*sin(angle), 5, 5);
  //   }
  //
  // }
  //
  // pop();
}
