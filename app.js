// (function() {
  var btn1 = document.getElementById('previous');
  var btn2 = document.getElementById('pause');
  var btn3 = document.getElementById('next');
  var in1 = document.getElementById('inBox1');
  var in2 = document.getElementById('inBox2');

  btn1.addEventListener('click', main);
  btn2.addEventListener('click', main);
  btn3.addEventListener('click', main);


  var checkPre;
  var checkNext;

function main() {

  function lr() {
    if(in1.value) {
      in2.value += in1.value.substr(0, 1);
      in1.value = in1.value.substr(1, in1.value.length - 1);
    } else {
      clearInterval(checkNext);
    }
  }

  function rl() {
    if(in2.value) {
      in1.value = in2.value.substr(in2.value.length - 1, 1) + in1.value;
      in2.value = in2.value.substr(0, in2.value.length - 1);
    } else {
      clearInterval(checkPre);
    }
  }
    // previous button function
  if(this.id == "previous") {
    checkPre = setInterval(rl, 1000);
  }                                                     // pause button function
  else if(this.id == "pause") {
    clearInterval(checkPre);
    clearInterval(checkNext);
  }                                                     // next button function
  else if(this.id == "next") {
    if(in1.checkValidity()) {
      checkNext = setInterval(lr, 1000);
    }
  }

}

// })();
