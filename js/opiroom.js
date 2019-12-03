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


var infoSlideBt = document.getElementById("bt-click");
var infoslide = document.getElementById("infoslide-trans");
infoSlideBt.addEventListener('click', function() {
    infoslide.style.display = "flex";
    var infoslideModal = document.getElementById("infoslide-modal");
    if (infoslideModal.textContent == "") {
        infoslide.style.display = "none"; 
        alert("No infoslide for this motion");
    }
})

var closebt = document.getElementsByClassName("fas fa-times");
// console.log(closebt[0]);
closebt[0].addEventListener('click', function() {
    infoslide.style.display = "none";
})

var proContainer = document.getElementsByClassName("pro-container")[0];
// console.log(proContainer);
var greenBt = document.getElementById("green-bt");
// console.log(greenBt);
greenBt.addEventListener('click', ClickGreenBt)

function ClickGreenBt() {
    var newProbox = document.createElement("div"); //tạo probox mới
    newProbox.className = "pro-box box";
    proContainer.prepend(newProbox); //thêm probox vào đúng vị trí
    // console.log(newProbox);

    var newOpi = document.createElement("div"); //tạo thành phần nội dung
    newOpi.className = "op-content";
    newProbox.appendChild(newOpi); //thêm nội dung vào đúng vị trí

    var userInput = document.createElement("textarea"); //thêm userinput
    userInput.className = "user-input";
    userInput.placeholder = "Write what you are thinking...";
    newOpi.appendChild(userInput);
  
    var postBt = document.createElement("div"); //thêm nút đăng 
    postBt.className = "post-bt";
    postBt.innerHTML = "Post";
    newProbox.appendChild(postBt);

    var check = document.getElementsByTagName("textarea"); //nếu như đã có hộp box r thì ko cần add thêm nữa
    if (check.length>0) {
        greenBt.removeEventListener('click', ClickGreenBt);
    }
}

var conContainer = document.getElementsByClassName("con-container")[0];
// console.log(proContainer);
var redBt = document.getElementById("red-bt");
// console.log(greenBt);
redBt.addEventListener('click', ClickRedBt)

function ClickRedBt() {
    var newConbox = document.createElement("div"); //tạo conbox mới 
    newConbox.className = "con-box box";
    conContainer.prepend(newConbox); //thêm conbox vào đúng vị trí
    // console.log(newProbox);

    var newOpi = document.createElement("div"); //tạo thành phần nội dung
    newOpi.className = "op-content";
    newConbox.appendChild(newOpi); //thêm nội dung vào đúng vị trí

    var userInput = document.createElement("textarea"); //thêm userinput
    userInput.className = "user-input";
    userInput.placeholder = "Write what you are thinking...";
    newOpi.appendChild(userInput);
  
    var PostBt = document.createElement("div"); //thêm nút đăng 
    PostBt.className = "Post-bt";
    PostBt.innerHTML = "Post";
    newConbox.appendChild(PostBt);

    var check = document.getElementsByTagName("textarea"); //nếu như đã có hộp box r thì ko cần add thêm nữa
    if (check.length>0) {
        redBt.removeEventListener('click', ClickRedBt);
    }
}

// postBt.addEventListener('click', function() { //post ý kiến này lên

// })

var heart = document.getElementsByClassName("fa-heart");
for (i=0; i<heart.length; i+=1) {
    heart[i].addEventListener('click', function() {
        parent = this.parentNode;
        like = document.createElement("i");
        like.className = "fas fa-heart liked";
        parent.prepend(like);
        this.remove();
    })
}


