// #region | Basic variable setup
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
//#endregion

// #region | Checking storage type available

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
// #endregion

// #region | Menu dropdown logistics
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
//#endregion

// #region | Side bar functionality
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
  let temp = 0
  for (let i = 0; i < (sideBarLore[0].children.length); i++) {
    temp = temp + sideBarLore[0].children[i].offsetHeight
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
//#endregion

//#region | Literally two lines to open settings
function openSettings() {
  settings[0].classList.add('opened')
};

function closeSettings() {
  settings[0].classList.remove('opened')
};
//#endregion

//#region | Secondary colour selection (Photosystem II and I type organization)
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

function grabStoredSecondaryColour() {
  baseSecondaryColour = localStorage.getItem("baseSecondaryColour_stored")
  baseRValue2 = parseInt(localStorage.getItem("baseRValue2_stored"))
  baseGValue2 = parseInt(localStorage.getItem("baseGValue2_stored"))
  baseBValue2 = parseInt(localStorage.getItem("baseBValue2_stored"))

  rSlider2.value = parseInt(localStorage.getItem("baseRValue2_stored"))
  gSlider2.value = parseInt(localStorage.getItem("baseGValue2_stored"))
  bSlider2.value = parseInt(localStorage.getItem("baseBValue2_stored"))

  applySecondaryColour()
}

function updateSecondaryColourStorage () {
  localStorage.setItem("baseSecondaryColour_stored", baseSecondaryColour)
  localStorage.setItem("baseRValue2_stored", baseRValue2)
  localStorage.setItem("baseGValue2_stored", baseGValue2)
  localStorage.setItem("baseBValue2_stored", baseBValue2)
}

///this code is for setting the secondary colour in localStorage OR pulling it from localStorage
if (checkST() === 0) {
  if (!localStorage.getItem("baseSecondaryColour_stored")) {
    localStorage.setItem("baseSecondaryColour_stored", `rgb(${255}, ${253}, ${250})`)
    localStorage.setItem("baseRValue2_stored", 255)
    localStorage.setItem("baseGValue2_stored", 253)
    localStorage.setItem("baseBValue2_stored", 250)
  } else {
    grabStoredSecondaryColour()
  }
} else {

  console.log("well that's not good")
  if (checkST() === 1) {

    console.log("getting better")

  } else {

    console.log("really not good")

  }
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
  updateSecondaryColourStorage()
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
//#endregion

//#region | Primary colour selection (Joke was already made)

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

function grabStoredBaseColour() {
  baseColour = localStorage.getItem("baseColour_stored")
  baseRValue = parseInt(localStorage.getItem("baseRValue_stored"))
  baseGValue = parseInt(localStorage.getItem("baseGValue_stored"))
  baseBValue = parseInt(localStorage.getItem("baseBValue_stored"))

  //why not work? :(
  rSlider.value = parseInt(localStorage.getItem("baseRValue_stored"))
  gSlider.value = parseInt(localStorage.getItem("baseGValue_stored"))
  bSlider.value = parseInt(localStorage.getItem("baseBValue_stored"))

  applyColourScheme()
}

function updateBaseColourStorage() {
  localStorage.setItem("baseColour_stored", baseColour)
  localStorage.setItem("baseRValue_stored", baseRValue)
  localStorage.setItem("baseGValue_stored", baseGValue)
  localStorage.setItem("baseBValue_stored", baseBValue)
}

///this code is for setting base colour in localStorage OR pulling it from localStorage
if (checkST() === 0) {
  if (!localStorage.getItem("baseColour_stored")) {
    rSlider2.value = 255
    gSlider2.value = 253
    bSlider2.value = 250

    rSlider.value = 67
    gSlider.value = 247
    bSlider.value = 233
    localStorage.setItem("baseColour_stored", `rgb(${67}, ${247}, ${233})`)
    localStorage.setItem("baseRValue_stored", 67)
    localStorage.setItem("baseGValue_stored", 247)
    localStorage.setItem("baseBValue_stored", 233)
  } else {
    grabStoredBaseColour()
  }
} else {
  console.log("well that isn't good")
}

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
  updateBaseColourStorage()
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
//#endregion

//what does this code even do anymore? I can't remove it though unless something might break...
generateColour()
generateSecondaryColour()

//#region | Blank link warnings

const blankLinks = document.querySelectorAll(".sideNavLink")
blankLinks.forEach((link) => {
  if (link.href === '') {
    //IT WORKS
    link.onclick = function() {alert(`The page "${link.innerText}" has not been added to the site. It will be added in a future update.`)}
  }
});

//#endregion

// #region | Code for font settings

const fontWheel1 = document.querySelector(".fontScrollWheel1")
const fontWheel2 = document.querySelector(".fontScrollWheel2")

const fw1UpButton = document.querySelector(".upButton.first")
const fw1DownButton = document.querySelector(".downButton.first")
const fw2UpButton = document.querySelector(".upButton.second")
const fw2DownButton = document.querySelector(".downButton.second")

//efficiency. automation. unmatched. introducing:
const availableFonts = [
  "../fonts/ArialCE.ttf",
  "../fonts/calibri-regular.ttf",
  "../fonts/cmuntt.ttf",
  "../fonts/COMIC.TTF",
  "../fonts/JetBrainsMono-Regular.ttf",
  "../fonts/times.ttf",
  "../fonts/Ubuntu-Regular.ttf",
  "../fonts/ZenDots-Regular.ttf"
]
const fontNames = [
  "Arial",
  "Calibri",
  "CMU Typewriter",
  "Comic Sans",
  "JetBrains Mono",
  "Times New Roman",
  "Ubuntu",
  "Zen Dots"
]

var scrolldexMax = 7
var FW1scrollIndex = 2
var FW2scrollIndex = 7

var selectedBodyFont = availableFonts[2]
var selectedTitleFont = availableFonts[7]

var lineBreak = document.createElement("br")

function updateFontLocalStorage () {
  FW1scrollIndex = parseInt(localStorage.getItem("selectedBodyFont_stored"))
  FW2scrollIndex = parseInt(localStorage.getItem("selectedTitleFont_stored"))
  root.style.setProperty("--bodyFont", `font${FW1scrollIndex}`)
  root.style.setProperty("--titleFont", `font${FW2scrollIndex}`)
}

function applyBodyFontLocalStorage () {
  localStorage.setItem("selectedBodyFont_stored", FW1scrollIndex)
  updateFontLocalStorage()
}

function applyTitleFontLocalStorage () {
  localStorage.setItem("selectedTitleFont_stored", FW2scrollIndex)
  updateFontLocalStorage()
}

if (checkST() === 0) {
  if (!localStorage.getItem("selectedBodyFont_stored")) {
    localStorage.setItem("selectedBodyFont_stored", 2)
    localStorage.setItem("selectedTitleFont_stored", 7)
    updateFontLocalStorage()
  } else {
    updateFontLocalStorage()
  }
} else {
  console.log("gulp")
}

//there is almost certainly a better way to get this job done

function doMath(a, b, plusOrMinus) {
  if (plusOrMinus === '+') {
    return (a + b)
  } else if (plusOrMinus === '-') {
    return (a - b)
  } else if (plusOrMinus === 'nah') {
    return (0)
  }
}
function audit(parameter) {
  if (parameter > scrolldexMax) {
    return 0
  } else if (parameter < 0) {
    return scrolldexMax
  } else {
    return parameter
  }
}

function wheel1Set(orientation) {
  fontWheel1.innerHTML = ''
  for (let i = 0; i < 3; i ++) {
    let count = 0
    fontNames.forEach((font) => {
      if ((count != FW1scrollIndex)&&(count != audit(FW1scrollIndex - doMath(0,1,orientation)))) {
        let divAlternative = document.createElement("div")
        divAlternative.innerText = font
        divAlternative.classList.add("becomeTrans")
        fontWheel1.appendChild(divAlternative)

        /* fontWheel1.innerHTML += font
        fontWheel1.appendChild(lineBreak) */
      } else if(count === FW1scrollIndex){
        let selectedFontElement = document.createElement("div")
        selectedFontElement.innerText = font
        selectedFontElement.classList.add("selectedFont1")
        
        fontWheel1.appendChild(selectedFontElement)
      } else {
        let unselectingFontElement = document.createElement("div")
        unselectingFontElement.innerText = font
        unselectingFontElement.classList.add("unselectingFont1")

        fontWheel1.appendChild(unselectingFontElement)
      }
      count += 1
    })
  }

  document.querySelectorAll(".selectedFont1").forEach((selectedFont) => {
    selectedFont.offsetHeight
    selectedFont.classList.add("selecting")
  })
  document.querySelectorAll(".unselectingFont1").forEach((selectedFont) => {
    selectedFont.offsetHeight
    selectedFont.classList.add("unselecting")
  })

  fontWheel1.scrollTo({
    top: ((FW1scrollIndex + (scrolldexMax - 1)) *24),
    left: 0,
    behavior: 'smooth'
  })
}

function wheel2Set(orientation) {
  fontWheel2.innerHTML = ''
  for (let i = 0; i < 3; i ++) {
    let count = 0
    fontNames.forEach((font) => {
      if ((count != FW2scrollIndex)&&(count != audit(FW2scrollIndex - doMath(0,1,orientation)))) {
        let divAlternative = document.createElement("div")
        divAlternative.innerText = font
        divAlternative.classList.add("becomeTrans")
        fontWheel2.appendChild(divAlternative)
        
        /* fontWheel2.innerHTML += font
        fontWheel2.appendChild(lineBreak) */
      } else if(count === FW2scrollIndex){
        let selectedFontElement = document.createElement("div")
        selectedFontElement.innerText = font
        selectedFontElement.classList.add("selectedFont2")
        
        fontWheel2.appendChild(selectedFontElement)
      } else {
        let unselectingFontElement = document.createElement("div")
        unselectingFontElement.innerText = font
        unselectingFontElement.classList.add("unselectingFont2")
        fontWheel2.appendChild(unselectingFontElement)
      }
      count += 1
    })
  }

  document.querySelectorAll(".selectedFont2").forEach((selectedFont) => {
    selectedFont.offsetHeight
    selectedFont.classList.add("selecting")
  })
  document.querySelectorAll(".unselectingFont2").forEach((selectedFont) => {
    selectedFont.offsetHeight
    selectedFont.classList.add("unselecting")
  })

  fontWheel2.scrollTo({
    top: ((FW2scrollIndex + (scrolldexMax - 1)) *24),
    left: 0,
    behavior: 'smooth'
  })
}
wheel1Set('+')
wheel2Set('+')

//actually kinda super inefficient, but I'm sure it is fine
function wheel1Move(orientation) {
  FW1scrollIndex = doMath(FW1scrollIndex, 1, orientation)
  if (FW1scrollIndex < 0) {
    FW1scrollIndex = scrolldexMax
  } else if (FW1scrollIndex > scrolldexMax) {
    FW1scrollIndex = 0
  }
  wheel1Set(orientation)
  fontWheel1.scrollTo({
    top:((FW1scrollIndex + (scrolldexMax - doMath(1, 1, orientation))) *24),
    left: 0
  })
  fontWheel1.scrollTo({
    top: ((FW1scrollIndex + (scrolldexMax - 1)) *24),
    left: 0,
    behavior: 'smooth'
  })
}

function wheel2Move(orientation) {
  FW2scrollIndex = doMath(FW2scrollIndex, 1, orientation)
  if (FW2scrollIndex < 0) {
    FW2scrollIndex = scrolldexMax
  } else if (FW2scrollIndex > scrolldexMax) {
    FW2scrollIndex = 0
  }
  wheel2Set(orientation)
  fontWheel2.scrollTo({
    top:((FW2scrollIndex + (scrolldexMax - doMath(1, 1, orientation))) *24),
    left: 0
  })
  fontWheel2.scrollTo({
    top: ((FW2scrollIndex + (scrolldexMax - 1)) *24),
    left: 0,
    behavior: 'smooth'
  })
}

function applyBodyFont() {
  applyBodyFontLocalStorage()
  root.style.setProperty("--bodyFont", `font${FW1scrollIndex}`)
}
function applyTitleFont() {
  applyTitleFontLocalStorage()
  root.style.setProperty("--titleFont", `font${FW2scrollIndex}`)
}

const searchBar1 = document.querySelector("#fontSearch1")
const searchBar2 = document.querySelector("#fontSearch2")
var searchBar1Query = searchBar1.value
var searchBar2Query = searchBar2.value

searchBar1.addEventListener("input", checkSearchQuery1)
searchBar2.addEventListener("input", checkSearchQuery2)

function checkSearchQuery1() {
  let candidates = []
  searchBar1Query = searchBar1.value
  if (searchBar1Query != '') {
    for (let i = 0; i < fontNames.length; i++) {
      if (fontNames[i].toLowerCase().includes(searchBar1Query.toLowerCase())) {
        
        candidates.push(fontNames[i])

      }
    }

    //Asserting dominance module
    let proctor = true
    let smallest = 1000 //if a font's name is longer than 1000 characters I quit
    let chosenCandidate = "none"
    let count2 = 0

    candidates.forEach((candidate) => {
      count2 = candidate.length - 1
      while (proctor === true) {
        if (candidate.toLowerCase().includes(searchBar1Query.toLowerCase(), count2)) {
          if (smallest > count2) {
            smallest = count2
            chosenCandidate = candidate
          }
        }
        if (count2 === 0) {
          proctor = false
        }
        count2 -= 1
      }
      proctor = true
    })

    for (let i = 0; i < fontNames.length; i++) {
      if (fontNames[i] === chosenCandidate) {
        FW1scrollIndex = i
        wheel1Set("nah")
      }
    }
  }
}

//not really done yet
function checkSearchQuery2() {
  let candidates = []
  searchBar2Query = searchBar2.value
  if (searchBar2Query != '') {
    for (let i = 0; i < fontNames.length; i++) {
      if (fontNames[i].toLowerCase().includes(searchBar2Query.toLowerCase())) {
        candidates.push(fontNames[i])
      }
    }

    //Asserting dominance module
    let proctor = true
    let smallest = 1000 //if a font's name is longer than 1000 characters I quit
    let chosenCandidate = "none"
    let count2 = 0

    candidates.forEach((candidate) => {
      count2 = candidate.length - 1
      while (proctor === true) {
        if (candidate.toLowerCase().includes(searchBar2Query.toLowerCase(), count2)) {
          if (smallest > count2) {
            smallest = count2
            chosenCandidate = candidate
          }
        }
        if (count2 === 0) {
          proctor = false
        }
        count2 -= 1
      }
      proctor = true
    })

    for (let i = 0; i < fontNames.length; i++) {
      if (fontNames[i] === chosenCandidate) {
        FW2scrollIndex = i
        wheel2Set("nah")
      }
    }
  }
}

// #endregion code for font wheel

//#region | Resetting ALL styles for appearance
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
  applySecondaryColour()
  applyColourScheme()


  FW1scrollIndex = 2
  applyBodyFont()
  FW2scrollIndex = 7
  applyTitleFont()
  wheel1Set("+")
  wheel2Set("+")
}
//#endregion
