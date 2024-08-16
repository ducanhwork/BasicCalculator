var monitorInput = document.querySelector(".monitor-input");
var monitorResult = document.querySelector(".monitor-result");
var numberBtns = document.querySelectorAll(".number");
var spermBtns = document.querySelectorAll(".sperm");
var str = "";
var result = 0;
var crrNum = 0;
var prevNum = 0;
var crrN = "";
var checkSperm = false;
const regex = /.*([+\-X/]=)$/gm;
var checkEqualsBtn = false;
numberBtns.forEach((b) => {
  b.onclick = function (e) {
    var num = e.target.innerText;
    str += num;
    monitorInput.innerText = str;
  };
});
spermBtns.forEach((b) => {
  b.onclick = function (e) {
    var sperm = e.target.innerText;
    if (sperm === "=") {
      result = eval(str);
      monitorResult.innerText = result;
    }
    str += sperm;
    monitorInput.innerText = str;
  };
});
document.querySelector(".reset").onclick = function () {
  if (confirm("Sure ?")) {
    str = "";
    monitorInput.innerText = "";
    monitorResult.innerText = "";
  }
};

//set animation
setInterval(()=>{
  document.querySelector('span').classList.toggle('hidden');
},300)

setInterval(()=>{
  document.querySelector('p.trademark').classList.toggle('red');
},500);
setInterval(()=>{
  document.querySelector('a.trademark').classList.toggle('red');
},500);
Object.assign(monitorInput.style, {
  heigth: "50%",
  color: "black",
  fontSize: "40px",
});
Object.assign(monitorResult.style, {
  height: "50%",
  color: "black",
  fontSize: "40px",
  textAlign: "end",
});
