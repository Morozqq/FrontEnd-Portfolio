var myImage = document.querySelector("img")

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src")
    if (mySrc === "./images/fire2.png"){
        myImage.setAttribute("src", "/images/mazila.png")
    } else {
        myImage.setAttribute("src", "/images/fire2.png")
    }

}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }