(function() {
  "use strict";
  // YOUR CODE HERE
  let buttons = document.getElementsByClassName("button");
  let lights = document.getElementsByClassName("bulb");
  for(let i = 0; i < buttons.length; i++){
     buttons[i].addEventListener("mouseenter", function () {
       console.log("Entered" , buttons[i].innerText, "button");
     });
     buttons[i].addEventListener("mouseleave", function () {
       console.log("Left" , buttons[i].innerText, "button");
     });
     buttons[i].addEventListener("click", function(){
       let myStr = buttons[i].innerText.toLowerCase();
       lights[i].classList.toggle(myStr);
       (lights[i].classList.contains(myStr)) ? console.log(myStr, "bulb is on"):console.log(myStr, "bulb is off");
     });
}
})();
