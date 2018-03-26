
function setup() {
  createCanvas(600, 600);
  background(240);
  var numCircles = 90;
  var numDiscs = 30;
  var maxWidth = 500;

  push();
  translate(width/2, height/2);

  //Oh, HSL is made with this idea in mind LOL:
  for (var i=0; i < numCircles; i++) {
    // rotate(0.1);
    for (var j=0; j < numDiscs; j++) {
      var angle = 2 * PI * i / numCircles + Math.random(); // adding Math.random() here: nice
      var radius = j * maxWidth/numDiscs;
      // console.log(radius);
      var brightness = parseInt(radius * 100 / maxWidth);
      // console.log(brightness);

      var hue = 360 * i / numCircles;
      noStroke();
      var c = color('hsb(' + hue + ', 100%, ' + brightness + '%)');
      fill(c);
      var randomRadius = 25 * Math.random();
      ellipse(radius*cos(angle), radius*sin(angle), randomRadius, randomRadius);
    }

  }


  pop();
}

function mousePressed() {
  // console.log(mouseX, mouseY);
  getPolar(mouseX, mouseY);

}

function getPolar(x, y) {
  var newX = x - 300;
  // reverses the y-is-down thing, we'll see if it breaks anything. shouldn't matter, it's just something we're going to translate into proper angle with ugly switch:
  var newY = 300 - y;
  // console.log(new);
  var radius = dist(0, 0, newX, newY);

  var slope = newY / newX;
  var angle = atan(slope);
  // console.log('angle' , angle);

  var realAngle;

  if (newX < 0 && newY < 0) {
    console.log('LL');
    realAngle = PI + angle;
  } else if (newX < 0 && newY > 0) {
    console.log('LG');
    realAngle = PI + angle;
  } else if (newX > 0 && newY < 0) {
    console.log('GL');
    realAngle = 2*PI + angle;
  } else if (newX > 0 && newY > 0) {
      console.log("GG");
    realAngle = angle;
  }

  console.log(realAngle);
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
