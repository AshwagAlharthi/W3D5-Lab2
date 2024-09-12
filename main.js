let text = document.getElementById("text");

function changeText(){
    text.textContent = "This is a new Text";
}

function largeSize() {
    text.style.fontSize = '2rem';
}

function smallSize() {
    text.style.fontSize = '0.8rem';
    
}

function changeColor() {
    text.style.color = 'blue';
}

function changeBg() {
    text.style.backgroundColor = 'green';
}

function changeImg() {
    let img = document.getElementById("img");
    let image1 = "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";
    let image2 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";

    img.style.display = "block";

    if (img.src.includes(image1)) {
        img.src = image2;
    } else {
        img.src = image1;
    }
}