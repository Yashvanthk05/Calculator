const display=document.getElementById("display");
const container=document.getElementById("conatin");
display.value="Press ON © Yashvanth";
const theme=document.getElementById("theme");
theme.addEventListener("click",themeChange);
function dis(event){
    display.value+=event.target.textContent;
}
function erase(){
    display.value="";
}
function del(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function work(event){
    if (event.target.textContent=="ON"){
        display.style.color='black';
        display.value="";
        event.target.textContent="OFF";
    }
    else if(event.target.textContent=="OFF"){
        display.style.color='grey';
        display.style.textShadow='0px 0px 0px grey';
        display.value="";
        event.target.textContent="ON";
    }
}

function themeChange(event) {
    switch(event.target.textContent){
        case("Light"):
            container.classList.replace("dark-theme-container", "bright-theme-container");
            let dark_numbtn = document.querySelectorAll('.dark-theme-num');
            let dark_opbtn = document.querySelectorAll('.dark-theme-operator');
            dark_numbtn.forEach(btn => btn.classList.remove("dark-theme-num"));
            dark_numbtn.forEach(btn => btn.classList.add("bright-theme-num"));
            dark_opbtn.forEach(btn => btn.classList.remove("dark-theme-operator"));
            dark_opbtn.forEach(btn => btn.classList.add("bright-theme-operator"));
            event.target.textContent="Dark";
            break;
        case("Dark"):
            container.classList.replace("bright-theme-container", "dark-theme-container");
            let bright_numbtn = document.querySelectorAll('.bright-theme-num');
            let bright_opbtn = document.querySelectorAll('.bright-theme-operator');
            bright_numbtn.forEach(btn => btn.classList.replace("bright-theme-num", "dark-theme-num"));
            bright_opbtn.forEach(btn => btn.classList.replace("bright-theme-operator", "dark-theme-operator"));
            event.target.textContent = "Light";
            break;
        default:
            break;
        
    }
}