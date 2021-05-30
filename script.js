function dropdownMenu() {
  var x = document.getElementById("dropdownClick");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.body.style.height= '200vh';
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.body.style.height= '120vh';
  }

});




