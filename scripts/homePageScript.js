
//Variable setup
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
  dropDownContainerDown[0].classList.toggle('opened');
}

function closeDropdown() {
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

function openSideBarSection(x) {
  if (x.children[0].children[0].classList.contains('opened')) {
    x.children[0].children[0].classList.remove('opened')
    x.children[0].children[1].classList.remove('opened')
  } else {
    x.children[0].children[0].classList.add('opened')
    x.children[0].children[1].classList.add('opened')
  }
}
