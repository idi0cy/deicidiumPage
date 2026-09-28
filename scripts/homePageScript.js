
//Variable setup
var dropDownContainerTop = document.getElementsByClassName('dropDownContainerTop')

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
  console.log('opening');
  dropDownContainerTop[0].classList.toggle('opened');
}

function closeDropdown() {
  console.log('closing');
  dropDownContainerTop[0].classList.toggle('opened');
}