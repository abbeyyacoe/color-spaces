// Code By Webdevtrick ( https://webdevtrick.com )
var body = document.body,
    rhexVal_out = document.querySelector('#final_hexVal_r');
    ghexVal_out = document.querySelector('#final_hexVal_g');
    bhexVal_out = document.querySelector('#final_hexVal_b');
    reverse_value = document.querySelector('.reverse_value');
    body.style.color = "#ffffff";

function setColor(){
  var r_hexVal = pad(parseInt(r.value, 10).toString(16)),
      g_hexVal = pad(parseInt(g.value, 10).toString(16)),
      b_hexVal = pad(parseInt(b.value, 10).toString(16))
      // reverse values
      reverse_r = pad(parseInt(255 - r.value, 10).toString(16)),
      reverse_g = pad(parseInt(255 - g.value, 10).toString(16)),
      reverse_b = pad(parseInt(255 - b.value, 10).toString(16)),

      body.style.backgroundColor = "#" + r_hexVal + g_hexVal + b_hexVal;
      reverse_value.style.color = "#" + reverse_r + reverse_g + reverse_b;

      rhexVal_out.value = r_hexVal;
      ghexVal_out.value = g_hexVal;
      bhexVal_out.value = b_hexVal;
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