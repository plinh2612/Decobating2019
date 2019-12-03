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

var btmenuClicks = document.getElementsByClassName("cate");

for (i=0;i<btmenuClicks.length;i++) {
    var btmenuClick = btmenuClicks[i];
    btmenuClick.addEventListener('click', function (e) {
        var current = document.getElementsByClassName('active');
        // console.log(current);
        current[0].className = current[0].className.replace(" active","");
        this.className += (" active");
    })
};