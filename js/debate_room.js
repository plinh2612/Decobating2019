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


var format = document.getElementsByClassName("format");
var openmodal = document.getElementsByClassName("openmodal");

var next = document.getElementById('next');
var pre = document.getElementById('pre');

var slide0 = document.getElementById("slide0");

// Set chạy modal
for (i=0; i<format.length; i+=1) {
  format[i].addEventListener('click', function() {
      openmodal[0] = openmodal[0].style.display = "flex";

      //Set the content of each modal
      if (this.id == 'ap') { //AP content
        var formatTitle = document.getElementsByClassName('format-title');
        for (i = 0; i<formatTitle.length; i+=1) {
          formatTitle[i].innerHTML = 'asian parliamentary'
        }
      } 

      if (this.id == 'bp') { //BP content
        var formatTitle = document.getElementsByClassName('format-title');
        for (i = 0; i<formatTitle.length; i+=1) {
          formatTitle[i].innerHTML = 'british parliamentary'
        }
        var para1 = document.getElementById('para1');
        para1.innerHTML = "BP format, also known as British Parliamentary, is a debating format used in many format international debating competitions involving high school as well as university institutions. The format is based on the debating format officially used by members of the British Parliamentary (MP) when debating on an issue. This format requires a total of four teams seperated into two sides Government (support) and Opposition (against) and two benches, Opening and Closing.The four teams will be seated accordingly to their positions and speaking roles, 1st Opening Government (OG), 2nd Opening Opposition (OP), 3rd Closing Government (CG) and 4th Closing Opposition (CO).";
        para2. innerHTML = "Individual members are assigned roles as follows: (generally refered by initials) <div>OG: Prime Minister, Debuty Prime Minister (PM, DPM)</div> <div>OO: Leader of the Opposition, Debuty Leader of the Opposition (LO, DLO)</div> <div>CG: Member of the Government, Government Whip (MG, GW)</div> <div>CO: Member of the Opposition, Opposition Whip (MO,OW)</div>";
        para3.innerHTML = "When a speaker is delivering a speech, between the first minute and the sixth minute, opposing teams can raise POIs to ask rebuttal questions or make comments. The speaker has the right to accept or refuse them. However, do NOT POI your own side, You are forbidden from doing so.";
        document.getElementById('knowmorelink').href = "https://static1.squarespace.com/static/58970e4cd1758e28994b5bf8/t/5b6aeaf9758d4610026a2585/1533733633615/British+Parliamentary+Debating+for+Beginners.pdf";
        document.getElementById('knowmorelink').innerHTML = 'British Parliamentary format';
      }

      if (this.id == 'ws') { //WS content
        var formatTitle = document.getElementsByClassName('format-title');
        for (i = 0; i<formatTitle.length; i+=1) {
          formatTitle[i].innerHTML = 'world school';
        }
        var para1 = document.getElementById('para1');
        para1.innerHTML = "World Schools debating format, obtaining it's name from the World Schools Debating Championship, the largest high-school debating competition, largely resembles AP format. Six speakers will be divided into two teams, Proposition and Opposition, 3 speakers on each team. Members will be marked P1, P2, P3 for Proposition and one reply speaker; O1, O2, O3 for Opposition and one reply speaker.";
        document.getElementById('well').style.display = "none";
        para3.innerHTML ="POI: Between one and seven minutes into a speech, opposing teams can raise POIs to rebut, ask questions or to clarify themselves if necessary. The speaker has a right to deny or accept a POI.";
        document.getElementById('knowmorelink').innerHTML = 'World School format';
        document.getElementById('knowmorelink').href = "http://www.esu.org/wp-content/uploads/2019/01/Introduction-to-World-Schools-format-guide.pdf";
        console.log(document.getElementsByClassName('turnofspeech')[0].style.backgroundImage);
      }
  }) 
}

//Set chạy slide
var slides = document.getElementsByClassName('slide');

//Next btn
next.addEventListener('click', function() {
  currentSlide = document.getElementsByClassName("slide current")[0];
  cuId = currentSlide.id;
  num = cuId[5];
  currentSlide.className = "slide";
  num =parseInt(num);
  num +=1;
  if (num ==4) {
    num = 0;
  };
  var nextId = "slide"+num;
  nextSlide = document.getElementById(nextId);
  nextSlide.className = "slide current";
})

// Pre btn
pre.addEventListener('click', function() {
  currentSlide = document.getElementsByClassName("slide current")[0];
  cuId = currentSlide.id;
  num = cuId[5];
  currentSlide.className = "slide";
  num =parseInt(num);
  num -=1;
  if (num ==-1) {
    num = 3;
  };
  var nextId = "slide"+num; 
  nextSlide = document.getElementById(nextId);
  nextSlide.className = "slide current";
})

//Close-bt
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click',function() {
  openmodal[0] = openmodal[0].style.display = "none";
})

//Set the content of each modal
var dname = document.getElementsByClassName('dname');
// console.log(dname)
for (num=0; num<dname.length; num+=1) {
  if (dname[num].id == 'ap-name') {
    var formatTitle = document.getElementsByClassName('format-title');
    for (i = 0; i<formatTitle.length; i+=1) {
      formatTitle[i].innerHTML = 'haha'
    }
  }
}







