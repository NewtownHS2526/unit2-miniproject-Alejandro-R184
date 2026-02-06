// YOUR CODE HERE

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.


const color1 = document.querySelector("#blue");
const color2 = document.querySelector("#green");
const color3 = document.querySelector("#pink");
const color4 = document.querySelector("#black");
const coloroutput = document.querySelector("#radio-output");

const colorarrow1 = () => {
    coloroutput.textContent = `You picked blue 💙`;
}
const colorarrow2 = () => {
    coloroutput.textContent = `You picked green 💚`;
}
const colorarrow3 = () => {
    coloroutput.textContent = `You picked pink 💕`;
}
const colorarrow4 = () => {
    coloroutput.textContent = `You picked black 🖤`;
}

color1.addEventListener("click" , colorarrow1);
color2.addEventListener("click" , colorarrow2);
color3.addEventListener("click" , colorarrow3);
color4.addEventListener("click" , colorarrow4);
// color choosing game ^

const numguessinginput = document.querySelector("#num-input");
const numguessingoutput = document.querySelector("#num-output");
const randomnum = Math.floor(Math.random() * 100) + 1;

const numguesser = () => {
    if (numguessinginput.value == randomnum){
        numguessingoutput.textContent = `${numguessinginput.value} was correct!`;
    } else {
        numguessingoutput.textContent = `${numguessinginput.value} was wrong.`;
    }
}

numguessinginput.addEventListener("change" , numguesser);
// number guessing game ^

let continentscore = 0;
const continentinput = document.querySelector("#text-input");
const continentoutput = document.querySelector("#sr-continent-alert");
const continentchecker = () => {
    
    if (continentinput.value == "North America"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Europe"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Asia"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "South America"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Africa"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Australia"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Antarctica"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else {
        continentoutput.textContent = `${continentinput.value} isnt a continent.`
    }}}}}}}
    continentinput.value = "";

    if(continentscore === 7){
        continentinput.value = "correct!";
        continentinput.disabled = true;
        continentoutput.textContent = "";
    }
}

continentinput.addEventListener("change" , continentchecker);
// continent guessing game ^

const body = document.body;
const backgroundbutton = document.querySelector("#submit")
const colorpicker = document.querySelector("#color");
let colorvalue = colorpicker.value;
const is_dark = (hexNum) => {
  const rgb = hexNum
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((c) => parseInt(c, 16));
  
  console.log( rgb);
  const average =  rgb.reduce((a, b) => a + b, 0) /  rgb.length;

  return true ? average < 119 : false;
};

const changebackground = () =>{
    if (is_dark(colorvalue) == false){
        body.style.backgroundColor = colorvalue;
    }
}

backgroundbutton.addEventListener("click" , changebackground);