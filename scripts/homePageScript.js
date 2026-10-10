
//Variable setup
var dropDownContainerDown = document.getElementsByClassName('dropDownContainerDown')

var openBarButtonLine1 = document.getElementsByClassName('openBarButtonLine1')
var openBarButtonLine2 = document.getElementsByClassName('openBarButtonLine2')
var sideBarStory = document.getElementsByClassName('sideBarStory')
var sideBarLore = document.getElementsByClassName('sideBarLore')
var sideBarMisc = document.getElementsByClassName('sideBarMisc')
var sideBarManipulations = document.getElementsByClassName('sideBarManipulations')
var mainBody = document.getElementsByClassName('mainBody')

var baseColor = "#43F7E9"

var settings = document.getElementsByClassName('settingsPopup')

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

    sideBarStory[0].classList.add('sideBarOpened')
    sideBarLore[0].classList.add('sideBarOpened')
    sideBarMisc[0].classList.add('sideBarOpened')

    sideBarManipulations[0].classList.add('sideBarOpened')

    if (window.innerWidth > 800) {
      mainBody[0].classList.add('shrunk')
    }
    console.log(isSideBarOpen)
  } else {
    isSideBarOpen = false
    openBarButtonLine1[0].classList.remove('sideBarOpened')
    openBarButtonLine2[0].classList.remove('sideBarOpened')

    sideBarStory[0].classList.remove('sideBarOpened')
    sideBarLore[0].classList.remove('sideBarOpened')
    sideBarMisc[0].classList.remove('sideBarOpened')
    
    sideBarManipulations[0].classList.remove('sideBarOpened')
    mainBody[0].classList.remove('shrunk')
  }
  
}

function openSideBarSection(x) {
  if (x.children[0].children[0].classList.contains('opened')) {
    for (let i = 0; i < (x.parentNode.children.length); i++) {
      x.parentNode.children[i].classList.remove('opened')
    }
    x.children[0].children[0].classList.remove('opened')
    x.children[0].children[1].classList.remove('opened')
  } else {
    for (let i = 0; i < (x.parentNode.children.length); i++) {
      x.parentNode.children[i].classList.add('opened')
    }
    x.children[0].children[0].classList.add('opened')
    x.children[0].children[1].classList.add('opened')
  }
}

function openStorySideBar(x) {
  x.classList.add('opened')
  for (let i = 0; i < (x.parentNode.children.length); i++) {
    if (x.parentNode.children[i] != x) {
      x.parentNode.children[i].classList.remove('opened')
    }
  }
  sideBarStory[0].classList.add('focused')
  sideBarLore[0].classList.remove('focused')
  sideBarMisc[0].classList.remove('focused')
}

function openWorldbuildingSideBar(x) {
  x.classList.add('opened')
  for (let i = 0; i < (x.parentNode.children.length); i++) {
    if (x.parentNode.children[i] != x) {
      x.parentNode.children[i].classList.remove('opened')
    }
  }
  sideBarLore[0].classList.add('focused')
  sideBarStory[0].classList.remove('focused')
  sideBarMisc[0].classList.remove('focused')
}

function openMiscSideBar(x) {
  x.classList.add('opened')
  for (let i = 0; i < (x.parentNode.children.length); i++) {
    if (x.parentNode.children[i] != x) {
      x.parentNode.children[i].classList.remove('opened')
    }
  }
  sideBarMisc[0].classList.add('focused')
  sideBarLore[0].classList.remove('focused')
  sideBarStory[0].classList.remove('focused')
}

function openSettings() {
  settings[0].classList.add('opened')
}

function closeSettings() {
  settings[0].classList.remove('opened')
}
