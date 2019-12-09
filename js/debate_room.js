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
var roof = document.getElementById("roof");
var openmodal = document.getElementsByClassName("openmodal");
var dname = document.getElementsByClassName("dname");
// console.log(dname);

// Set chạy modal
for (i=0; i<format.length; i+=1) {
    format[i].addEventListener('click', function() {
        for (a=0; a<openmodal.length; a+=1) {
            openmodal[0] = openmodal[0].style.display = "flex";
        }
        // console.log(this.getElementsByClassName("dname"));
        var itsFormat = this.getElementsByClassName("dname");
        var itsFormatName = itsFormat[0].innerHTML;
        var nameFormat = document.getElementsByClassName("name-format");
        // console.log(nameFormat);
        for (n=0; n<nameFormat.length; n+=1) {
            var name = nameFormat[n].innerHTML;
            if (name==itsFormatName) {
                nameFormat[n].parentNode.style.display = "flex";
            }
            else {
                nameFormat[n].parentNode.style.display = "none"; 
            }
        }
    })
}
// Set cho nút đóng lại chạy được
var closebt = document.getElementsByClassName("fa-times");
closebt[0].addEventListener('click', function() {
    openmodal[0] = openmodal[0].style.display = "none";
})

// Set cho carousel chạy được
var balls = document.getElementsByClassName("ball");
for (i=0; i<balls.length; i+=1) {
    balls[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("current");
        current[0].classList.remove("current");
        this.className = "ball current";
        var id = this.id;
        var index = id[4]; 
        var slides = document.getElementsByClassName("slide");
        for (a=0; a<slides.length; a+=1) {
            slides[a] = slides[a].style.display = "none";
        }
        var slide = document.getElementById("slide"+index)
        slide = slide.style.display = "flex";
    })
}



