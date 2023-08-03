

function randomColor() {
    let randomNum = Math.floor(Math.random()*1677215);
    
    let randomHexCode = "#" + randomNum.toString(16);
   
    document.getElementById("hexCode").innerText = randomHexCode
    document.getElementById("hexCode").style.color = randomHexCode
    
    
    document.body.style.backgroundColor = randomHexCode
    
}