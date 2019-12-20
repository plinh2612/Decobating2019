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
        if (slide0.style.display != "none") {
          pre.style.display = "flex";
        }
        else {
          pre.style.display = "none"
        }
      }
  }) 
}

// Set close bt
var closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener('click', function(e){
  openmodal[0] = openmodal[0].style.display = "none";
})

//Chạy slide trong modal
var next = document.getElementById('next');
var pre = document.getElementById('pre');
var slide3 = document.getElementById("slide3");

next.addEventListener('click', function(){
  var slides = document.getElementsByClassName('slide');
  for (index = 0; index < slides.length-1; index +=1) {
    if (slides[index].className == "slide current") {
      if (slides[index+1].id == "slide3") {
        next.style.display = "none";
      }
        // console.log(slides[index+1].id)
        slides[index].className = "slide";
        slides[index+1].className +=" current";
      break
    }
  }
})

pre.addEventListener('click', function(){
  var slides = document.getElementsByClassName('slide');
  for (index = 0; index < slides.length-1; index +=1) {
    if (slides[index].className == "slide current") {
      
        // console.log(slides[index+1].id)
        slides[index].className = "slide";
        slides[index-1].className +=" current";
      break
    }
  }
})


const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));
app.get('/home', (req, res) =>{
    res.sendFile('./html/home.html',{root:__dirname});//trang home
})

app.get('/room_of_opinions', (req, res) =>{
    res.sendFile('./html/room_of_opinions.html',{root:__dirname}); //trang decothinking
})

app.get('/news', (req, res) =>{
    res.sendFile('./html/news.html',{root:__dirname}); // trang news
})

app.get('/news_article', (req, res) =>{
    res.sendFile('./html/news_article.html',{root:__dirname}); // trang news article
})

app.get('/debate_sociaties', (req, res) =>{
    res.sendFile('./html/debate_sociaties.html',{root:__dirname}); // trang decosociaties
})

app.get('/debate_room', (req, res) =>{
    res.sendFile('./html/debate_room.html',{root:__dirname}); // trang debate room
})

app.get('/signin', (req, res) =>{
    res.sendFile('./html/signin.html',{root:__dirname}); // trang sign in
})

app.get('/opinionroom_chart', (req, res) =>{
    res.sendFile('./html/opinionroom_chart.html',{root:__dirname}); // trang chart
})

app.get('/debateroom_apformat', (req, res) =>{
    res.sendFile('./html/debateroom_apformat.html',{root:__dirname}); // trang sign in
})

app.get('/opiroom', (req, res) =>{
    res.sendFile('./html/opiroom.html',{root:__dirname}); // trang sign in
})

// app.get('/home', (req, res) => res.sendFile('../html/home.html');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



