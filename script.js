console.log("Scruot is connected!");

const toggleBtn1 = document.querySelector('#mathBtn');
const contentBox1 = document.querySelector('#math');

toggleBtn1.addEventListener('click', function() {
  contentBox1.classList.toggle('isVisible');
});

const toggleBtn2 = document.querySelector('#javascriptbutton');
const contentBox2 = document.querySelector('#javascript');

toggleBtn2.addEventListener('click', function() {
  contentBox2.classList.toggle('isVisible');
});

let silenceCreation = {"matcher" : {"environment": "production", "isEqual": true}}
console.log(silenceCreation["matcher"]["isEqual"]);