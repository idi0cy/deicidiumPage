
//Variable setup

function menuAnimation(x) {
  var menuToAnimate = x.children
  for (let i = 0; i < (menuToAnimate.length); i++) {
    menuToAnimate[i].classList.toggle('clickedMenu')
  }
}