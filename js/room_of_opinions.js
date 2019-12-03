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

var postMotionBt = document.getElementById("bt-postmotion");
var openModal = document.getElementById("postmotion-modal");
var closeBt = document.getElementsByClassName("close")[0];
postMotionBt.addEventListener('click', function(){
  // console.log(openModal);
  openModal.style.display = "flex";
})

closeBt.addEventListener('click', function(){
  openModal.style.display = "none";
})

