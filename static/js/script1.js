// ================= this function controls that he nav bar moves with the scroll ======================

$(document).ready(function () {
    //change the integers below to match the height of your upper div, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.


    $(window).scroll(function () {


        if ($(window).scrollTop() > $(".navbar").scrollTop()) {
            $(".navbar").css("position", "fixed");
            $(".navbar").css("top", "0");
            $(".navbar").css("width", "100%");

            /*alert("done");*/


        }

        if ($(window).scrollTop() < 451) {
            $(".navbar").css("position", "");
        }
    });
});


// ================================ function to let the pressed buttons stay pressed jquery ===================

$(document).ready(function(){
  const c1 = document.querySelector(".c1");
  const c2 = document.querySelector(".c2");
  const c3 = document.querySelector(".c3");
  const c4 = document.querySelector(".c4");
  const c5 = document.querySelector(".c5");
  const c6 = document.querySelector(".c6");
  const c7 = document.querySelector(".c7");

  $(c1).css({"color" : "black",
  "font-size" : "50px"});
  $(c2).css({"color" : "black",
  "font-size" : "50px"});
  $(c3).css({"color" : "black",
  "font-size" : "50px"});
  $(c4).css({"color" : "black",
  "font-size" : "50px"});
  $(c5).css({"color" : "black",
  "font-size" : "50px"});
  $(c6).css({"color" : "black",
  "font-size" : "50px"});
  $(c7).css({"color" : "black",
  "font-size" : "50px"});


});


// ================== this function is not doing anything =============
function myFunction() {
    alert();
    // Getting sum of numbers

}


// ============================ on this function we control the appeareance and desappeareance of hte log in button ========================
//this piece of java script captures the .menu-btn elements and creates a listener for event click then it proceeds to
// add classes to it depending on the state
const menuBtn = document.querySelector('.menu-btn');
const navbarlinks = document.querySelector('.nav-menu a')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
         menuBtn.classList.add('open');
         navbarlinks.classList.add('active')
         menuOpen= true;

    }
    else {
        menuBtn.classList.remove('open')
        navbarlinks.classList.remove('active')
        menuOpen= false;
    }
});

/* ===================== this part resizes the navbar ============================== */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* ============ this part adds a class when on load =====================*/
jquery