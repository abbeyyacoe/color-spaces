// Code By Webdevtrick ( https://webdevtrick.com )
var body = document.body,
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    outputR = document.querySelector('#outputR'),
    outputG = document.querySelector('#outputG'),
    b_out = document.querySelector('#b_out'),
    rhexVal_out = document.querySelector('#final_hexVal_r');
    ghexVal_out = document.querySelector('#final_hexVal_g');
    bhexVal_out = document.querySelector('#final_hexVal_b');

function setColor(){
  var r_hexVal = parseInt(r.value, 10).toString(16),
      g_hexVal = parseInt(g.value, 10).toString(16),
      b_hexVal = parseInt(b.value, 10).toString(16),
      // reverse values
      reverse_r = parseInt(255 - r.value, 10).toString(16),
      reverse_g = parseInt(255 - g.value, 10).toString(16),
      reverse_b = parseInt(255 - b.value, 10).toString(16),

      final_hexVal_r =  pad(r_hexVal);
      final_hexVal_g =  pad(g_hexVal);
      final_hexVal_b = pad(b_hexVal);

      reverse_hexVal_r =  pad(reverse_r);
      reverse_hexVal_g =  pad(reverse_g);
      reverse_hexVal_b = pad(reverse_b);

      body.style.backgroundColor = "#" + final_hexVal_r + final_hexVal_g + final_hexVal_b;
      rhexVal_out.value = final_hexVal_r;
      ghexVal_out.value = final_hexVal_g;
      bhexVal_out.value = final_hexVal_b;
      rhexVal_out.style.color = "#" + reverse_hexVal_r + reverse_hexVal_g + reverse_hexVal_b;
      ghexVal_out.style.color = "#" + reverse_hexVal_r + reverse_hexVal_g + reverse_hexVal_b;
      bhexVal_out.style.color = "#" + reverse_hexVal_r + reverse_hexVal_g + reverse_hexVal_b;
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
  outputR.value = r.value;
}, false);

r.addEventListener('input', function() {
  setColor();
  outputR.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  outputG.value = g.value;
}, false);

g.addEventListener('input', function() {
  setColor();
  outputG.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);