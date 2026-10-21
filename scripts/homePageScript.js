
//Variable setup
const root = document.querySelector(':root');

var dropDownContainerDown = document.getElementsByClassName('dropDownContainerDown')

var openBarButtonLine1 = document.getElementsByClassName('openBarButtonLine1')
var openBarButtonLine2 = document.getElementsByClassName('openBarButtonLine2')
var sideBarStory = document.getElementsByClassName('sideBarStory')
var sideBarLore = document.getElementsByClassName('sideBarLore')
var sideBarMisc = document.getElementsByClassName('sideBarMisc')
var sideBarManipulations = document.getElementsByClassName('sideBarManipulations')
var mainBody = document.getElementsByClassName('mainBody')
var settings = document.getElementsByClassName('settingsPopup')
var minSideNavSec = document.getElementsByClassName('minSideNavSec')

var isSideBarOpen = false

//Checking if localStorage is available

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

var storageType = ''

if (storageAvailable("localStorage")) {
  storageType = 'localStorage'
} else if (storageAvailable("sessionStorage")) {
  storageType = 'sessionStorage'
} else {
  storageType = 'none'
}

function checkST() {
  if (storageType === 'localStorage') {
    return 0
  } else if (storageType === 'sessionStorage') {
    return 1
  } else {
    return 2
  }
}

console.log(checkST())

//End of that section

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
};


function openDropdown() {
  dropDownContainerDown[0].classList.toggle('opened');
};


function closeDropdown() {
  dropDownContainerDown[0].classList.remove('opened');
};


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
  
};


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

  //about to write some weirdlycomplex debug code
  //IT DOESN"T EVEN WORK
  let temp = 0
  for (let i = 0; i < (sideBarLore[0].children.length); i++) {
    temp = temp + sideBarLore[0].children[i].offsetHeight
  }
  console.log(temp)
  console.log(`Scrollheight: ${sideBarLore[0].scrollHeight}`)
  console.log(`SidebarHeight: ${sideBarLore[0].offsetHeight}`)
};

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
};

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
};

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
};

function openSettings() {
  settings[0].classList.add('opened')
};

function closeSettings() {
  settings[0].classList.remove('opened')
};

//COLOURS 2

const colourSlidersTwo = document.querySelectorAll(".colourSelectSliderTwo")
const rSlider2 = document.getElementById('redSelect2')
const gSlider2 = document.getElementById('greenSelect2')
const bSlider2 = document.getElementById('blueSelect2')
const colourDisplay2 = document.querySelector('.colourDisplay2')
const copyColour2 = document.getElementById('copyColour2')
const colourOutput2 = document.querySelector('.colourOutput2')

var baseSecondaryColour =  `rgb(${255}, ${253}, ${250})`
var baseRValue2 = 255
var baseGValue2 = 253
var baseBValue2 = 250


///If any of this needs to be reset, then do it somehow idk
///this code is for setting the secondary colour in localStorage OR pulling it from localStorage
if (checkST() === 0) {
  if (!localStorage.getItem("baseSecondaryColourStored")) {
    ///put code here to make the baseSecondaryColour variable in localstorage
    //localStorage.setItem("baseSecondaryColourStored", baseSecondaryColour)
    ///REMEMBER TO SET THESE PULLED STYLES AFTER THIS CODE
  } else {
    ///put code here to start applying the already set baseSecondaryColour variable in local storage
    //baseSecondaryColour = localStorage.getItem("baseSecondaryColourStored")
    ///REMEMBER TO SET THESE PULLED STYLES AFTER THIS CODE
  }
} else {
  console.log("well that's not good")
}

let copyColourVal2 = () => {
  colourOutput2.select();
  document.execCommand("copy");
  copyColour2.innerText = "Copied";
  setTimeout(()=>{
    copyColour2.innerText = "Copy"
  }, 1000)
}

function applySecondaryColour() {
  root.style.setProperty('--secondBaseColour', baseSecondaryColour)
}

copyColour2.addEventListener("click", copyColourVal2)

let generateSecondaryColour = () => {
  baseRValue2 = rSlider2.value
  baseGValue2 = gSlider2.value
  baseBValue2 = bSlider2.value

  let outputSecondaryColour = `rgb(${baseRValue2}, ${baseGValue2}, ${baseBValue2})`

  colourOutput2.value = outputSecondaryColour
  colourDisplay2.style.backgroundColor = outputSecondaryColour
  baseSecondaryColour = outputSecondaryColour
}

colourSlidersTwo.forEach((inp) => {
  inp.addEventListener("input",generateSecondaryColour);
})

//COLOURS 1

const colourSliders = document.querySelectorAll(".ColourSelectSlider");
const rSlider = document.getElementById('redSelect');
const gSlider = document.getElementById('greenSelect');
const bSlider = document.getElementById('blueSelect');
const copyColourButton = document.getElementById('copyColour')
const colourOutput = document.querySelector('.colourOutput');
const colourDisplay = document.querySelector('.colourDisplay')

var baseColour = `rgb(${67}, ${247}, ${233})`
var baseRValue = 67
var baseGValue = 247
var baseBValue = 233

///this code is for setting base colour in localStorage OR pulling it from localStorage
if (checkST() === 0) {
  if (!localStorage.getItem("baseColourStored")) {
    ///put code here to make the baseColour variable in localstorage
    //localStorage.setItem("baseColourStored", baseColour)
  } else {
    ///put code here to start applying the already set baseColour variable in local storage
  }
} else {
  console.log("well that isn't good")
}
///End of storage section

var themeColour = `rgb(${rSlider.value}, ${gSlider.value}, ${bSlider.value})`;
colourDisplay.style.backgroundColor = themeColour

let generateColour = () => {

  let rColourVal = rSlider.value;
  let gColourVal = gSlider.value;
  let bColourVal = bSlider.value;

  //is this even needed anymore?
  baseRValue = rSlider.value;
  baseGValue = gSlider.value;
  baseBValue = bSlider.value;

  let outputColour = `rgb(${rColourVal}, ${gColourVal}, ${bColourVal})`;

  colourOutput.value = outputColour;
  colourDisplay.style.backgroundColor = outputColour
  baseColour = outputColour
}

colourSliders.forEach((inp) => {
  inp.addEventListener("input",generateColour);
})

let copyColourVal = () => {
  colourOutput.select();
  document.execCommand("copy");
  copyColourButton.innerText = "Copied";
  setTimeout(()=>{
    copyColourButton.innerText = "Copy"
  }, 1000)
}

function applyColourScheme() {
  root.style.setProperty('--baseColour', baseColour)

  let redPH = Math.floor(baseRValue * 0.15)
  let greenPH = Math.floor(baseGValue * 0.15)
  let bluePH = Math.floor(baseBValue * 0.15)

  let colourPH = `rgb(${redPH}, ${greenPH}, ${bluePH})`
  root.style.setProperty('--dullColour', colourPH)

  redPH = Math.floor(baseRValue * 0.75)
  greenPH = Math.floor(baseGValue * 0.75)
  bluePH = Math.floor(baseBValue * 0.75)

  colourPH = `rgb(${redPH}, ${greenPH}, ${bluePH})`
  root.style.setProperty('--secondaryColour', colourPH)

  redPH = Math.floor(baseRValue * 0.6)
  greenPH = Math.floor(baseGValue * 0.6)
  bluePH = Math.floor(baseBValue * 0.6)

  colourPH = `rgb(${redPH}, ${greenPH}, ${bluePH})`
  root.style.setProperty('--tertiaryColour', colourPH)

  redPH = Math.floor(baseRValue * 0.3)
  greenPH = Math.floor(baseGValue * 0.3)
  bluePH = Math.floor(baseBValue * 0.3)

  colourPH = `rgb(${redPH}, ${greenPH}, ${bluePH})`
  root.style.setProperty('--quaternaryColour', colourPH)

  redPH = Math.floor(baseRValue * 0.2)
  greenPH = Math.floor(baseGValue * 0.2)
  bluePH = Math.floor(baseBValue * 0.2)

  colourPH = `rgb(${redPH}, ${greenPH}, ${bluePH})`
  root.style.setProperty('--quinaryColour', colourPH)

  colourPH = `rgba(${baseRValue}, ${baseGValue}, ${baseBValue}, 0.15)`
  root.style.setProperty('--sideNavColourTrans', colourPH)
}

copyColourButton.addEventListener("click", copyColourVal)

function resetAllStyles () {
  root.style.setProperty('--baseColour', '#43f7e9')
  root.style.setProperty('--dullColour', '#002424')
  root.style.setProperty('--secondaryColour', '#34c2b6')
  root.style.setProperty('--tertiaryColour', '#258d84')
  root.style.setProperty('--quaternaryColour', '#144642')
  root.style.setProperty('--quinaryColour', '#003333')
  root.style.setProperty('--sideNavColourTrans', '#43f7e823')
  root.style.setProperty('--secondBaseColour', '#FFFDFA')

  rSlider.value = 67
  gSlider.value = 247
  bSlider.value = 233

  rSlider2.value = 255
  gSlider2.value = 253
  bSlider2.value = 250

  generateColour()
  generateSecondaryColour()
}

rSlider2.value = 255
gSlider2.value = 253
bSlider2.value = 250

rSlider.value = 67
gSlider.value = 247
bSlider.value = 233

generateColour()
generateSecondaryColour()
