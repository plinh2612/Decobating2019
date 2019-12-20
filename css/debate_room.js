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
      for (a=0; a<openmodal.length; a+=1) {
        openmodal[0] = openmodal[0].style.display = "flex";
      }
  }) 
}







