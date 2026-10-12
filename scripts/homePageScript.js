
//Variable setup
var dropDownContainerDown = document.getElementsByClassName('dropDownContainerDown')

var openBarButtonLine1 = document.getElementsByClassName('openBarButtonLine1')
var openBarButtonLine2 = document.getElementsByClassName('openBarButtonLine2')
var sideBarStory = document.getElementsByClassName('sideBarStory')
var sideBarLore = document.getElementsByClassName('sideBarLore')
var sideBarMisc = document.getElementsByClassName('sideBarMisc')
var sideBarManipulations = document.getElementsByClassName('sideBarManipulations')
var mainBody = document.getElementsByClassName('mainBody')

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

const colourSliders = document.querySelectorAll(".ColourSelectSlider");

const rSlider = document.getElementById('redSelect');
const gSlider = document.getElementById('greenSelect');
const bSlider = document.getElementById('blueSelect');

const copyColourButton = document.getElementById('copyColour')
const colourOutput = document.querySelector('.colourOutput');
const colourDisplay = document.querySelector('.colourDisplay')

const root = document.querySelector(':root');

var baseColour = `rgb(${67}, ${247}, ${233})`

var baseRValue = 67
var baseGValue = 247
var baseBValue = 233

console.log(colourOutput)

var themeColour = `rgb(${rSlider.value}, ${gSlider.value}, ${bSlider.value})`;
colourDisplay.style.backgroundColor = themeColour

let generateColour = () => {

  let rColourVal = rSlider.value;
  let gColourVal = gSlider.value;
  let bColourVal = bSlider.value;

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

/*

primary: rgb(67, 247, 233)
dull: 0, 36, 36
secondary: rgb(52, 194, 182)
tertiary: 37, 141, 132
the fourth one: 20, 70, 66
quinary: 0, 51, 51

transparent: (67, 247, 232, 0.15)

*/

copyColourButton.addEventListener("click", copyColourVal)
