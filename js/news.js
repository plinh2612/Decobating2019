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


var leftBt = document.getElementsByClassName("fas fa-chevron-left")[0];
var rightBt = document.getElementsByClassName("fas fa-chevron-right")[0];
console.log(leftBt)
console.log(rightBt)
var slides = document.getElementsByClassName("slide");
rightBt.addEventListener('click', function() {
  currentSlide = document.getElementsByClassName("slide current")[0];
  cuId = currentSlide.id;
  num = cuId[5];
  currentSlide.className = "slide";
  num =parseInt(num);
  num +=1;
  if (num ==3) {
    num = 0;
  };
  var nextId = "slide"+num;
  nextSlide = document.getElementById(nextId);
  nextSlide.className = "slide current";
  console.log(nextSlide)
  
})

leftBt.addEventListener('click', function() {
  currentSlide = document.getElementsByClassName("slide current")[0];
  cuId = currentSlide.id;
  num = cuId[5];
  currentSlide.className = "slide";
  num =parseInt(num);
  num -=1;
  if (num ==-1) {
    num = 2;
  };
  var nextId = "slide"+num;
  nextSlide = document.getElementById(nextId);
  nextSlide.className = "slide current";
  console.log(nextSlide)
  
})