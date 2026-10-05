
//Variable setup
var dropDownContainerTop = document.getElementsByClassName('dropDownContainerTop')
var dropDownContainerDown = document.getElementsByClassName('dropDownContainerDown')

var openBarButtonLine1 = document.getElementsByClassName('openBarButtonLine1')
var openBarButtonLine2 = document.getElementsByClassName('openBarButtonLine2')
var sideBar = document.getElementsByClassName('sideBar')
var sideBarManipulations = document.getElementsByClassName('sideBarManipulations')
var mainBody = document.getElementsByClassName('mainBody')

var isSideBarOpen = false

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
  }
}

function closeDropdown() {
  dropDownContainerTop[0].classList.remove('opened');
  dropDownContainerDown[0].classList.remove('opened');
}


function openSideBar() {
  if (isSideBarOpen === false) {
    isSideBarOpen = true
    openBarButtonLine1[0].classList.add('sideBarOpened')
    openBarButtonLine2[0].classList.add('sideBarOpened')
    sideBar[0].classList.add('sideBarOpened')
    sideBarManipulations[0].classList.add('sideBarOpened')

    if (window.innerWidth > 800) {
      mainBody[0].classList.add('shrunk')
    }
    console.log(isSideBarOpen)
  } else {
    isSideBarOpen = false
    openBarButtonLine1[0].classList.remove('sideBarOpened')
    openBarButtonLine2[0].classList.remove('sideBarOpened')
    sideBar[0].classList.remove('sideBarOpened')
    sideBarManipulations[0].classList.remove('sideBarOpened')
    mainBody[0].classList.remove('shrunk')
  }
  
}
