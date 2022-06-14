document.querySelector(".aside-body").style.display = "none";
document.querySelector("#cross").style.display = "none";
let makeItPop = () => {
  document.querySelector("#cross").style.display = "";

  setTimeout(() => {
    document.querySelector(".aside-body").style.display = "";
  }, 50);
};

let removeAside = () => {
  document.querySelector(".aside-body").style.display = "none";
  document.querySelector("#cross").style.display = "none";
};


// date setting

const dateGrabber = new Date();
document.getElementById("date-field").innerHTML = dateGrabber.getFullYear();