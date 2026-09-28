
//Variable setup
var dropDownContainerTop = document.getElementsByClassName('dropDownContainerTop')
var dropDownContainerDown = document.getElementsByClassName('dropDownContainerDown')

function menuAnimation(x) {
  var menuToAnimate = x.children
  for (let i = 0; i < (menuToAnimate.length); i++) {
    menuToAnimate[i].classList.toggle('clickedMenu')
  }

  if (menuToAnimate[0].classList.contains('clickedMenu')) {
    openDropdown();
  } else {
    closeDropdown();
  }
}

function openDropdown() {
  console.log(window.innerWidth)
  if (window.innerWidth > 700) {
    dropDownContainerTop[0].classList.toggle('opened');
  } else {
    dropDownContainerDown[0].classList.toggle('opened');
    console.log('this thing')
  }
}

function closeDropdown() {
  dropDownContainerTop[0].classList.remove('opened');
  dropDownContainerDown[0].classList.remove('opened');
}