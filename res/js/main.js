const send = document.getElementById("send");
const input = document.getElementById("input");
const content = document.getElementById("content");

const xinput = document.getElementById("xinput");

const img = document.getElementById("img")

const changeColor = () =>{
    const inputValue=input.value;
    content.style.color = inputValue;
};
send.onclick = () =>{
    const inputValue=input.value;
    content.style.color = inputValue;
};
content.onchange = () =>{
    changeColor();
};

xinput.onchange = () => {
    const background = xinput.value;
    document.body.style.backgroundImage=`url(${background})`;
};

img.onclick = () => {
    img.style.width = 800 +"px";
    img.style.height = 800 +"px";
};
