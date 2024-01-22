const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/download-1.jpg");
  } else {
    myImage.setAttribute("src", "images/download.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
  };  

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }  
  myButton.onclick = () => {
    setUserName();
  };