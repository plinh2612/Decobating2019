// toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    } 


var dropBt = document.getElementById('dropBt');
dropBt.addEventListener('click', function() {
  var select = document.getElementById('select');
  // select.classList += "showhaha";
  select.style.display = 'block';
})

var text = document.getElementById('text');
var matchupOp = document.getElementById('matchup-op');
var matchup = document.getElementById('matchup');
var chatboxOp = document.getElementById('chatbox-op');
var chatbox = document.getElementById('chatbox');

matchupOp.addEventListener("click",function(){
  matchup.style.display = 'flex';
  chatbox.style.display = 'none';
  select.style.display = 'none';
  text.textContent = "Matchup information";
})

chatboxOp.addEventListener('click', function(){
  chatbox.style.display = 'flex';
  matchup.style.display = 'none';
  select.style.display = 'none';
  text.textContent = "Chatbox";
})

var input = document.getElementById("input");
var sendBt = document.getElementById("send");
sendBt.addEventListener('click', sendFunction);

function sendFunction() {
  inputVal = input.value;
  if (inputVal != '') {
    var newM = document.createElement('div');
    var newUserava = document.createElement('div');
    var newUsermess = document.createElement('div');
    var newUsername = document.createElement('div');
    var newMessage = document.createElement('div');
  
    newM.className = 'm';
    newUserava.className = 'user-ava';
    newUsermess.className = 'user-mess';
    newUsername.className = 'username';
    newMessage.className = 'message';
  
    mContainer.appendChild(newM);
    newM.appendChild(newUserava);
    newM.appendChild(newUsermess);
    newUsermess.appendChild(newUsername);
    newUsermess.appendChild(newMessage);
    // console.log(newM);
  
    newUsername.textContent = "Username";
    newMessage.innerHTML = inputVal;

    input.value = '';
  }
}

var sumHeight = 0
var m = document.getElementsByClassName("m");
for (i=0;i<m.length; i+=1) {
  mHeight = m[i].offsetHeight;
  sumHeight += mHeight
};
var mContainer = document.getElementById("m-container");
var mContainerHeight = mContainer.offsetHeight+15;
if (sumHeight>mContainerHeight) {
  mContainer.style.overflowY = "scroll";
}

var motionBox = document.getElementById("motion-box");
var timeBox = document.getElementById("time-box");

var clockBtn = document.getElementById("clock");
clockBtn.addEventListener('click', function(){
  motionBox.style.display = 'none';
  timeBox.style.display = 'grid';
})

var motionBtn = document.getElementById("motionicon");
motionBtn.addEventListener('click',function(){
  motionBox.style.display = 'grid';
  timeBox.style.display = 'none';
})


var msec=0
var sec=0
sec.toPrecision(2);
var min=1
function start(){
  document.forms[0].display.value=min+":"+sec+":"+msec
  go=setTimeout("start()",1)
  msec++

  if(msec==100){
  msec=0
  sec++
  }

  if(sec==60){
  sec=0
  min++
  }

  if(min==8){
    clearTimeout(go)
  }
}



function stop(){
  clearTimeout(go)
}








