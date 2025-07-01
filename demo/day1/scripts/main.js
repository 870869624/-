

const myImg = document.querySelector('img');

myImg.onclick = () =>{
    const mySrc = myImg.getAttribute('src');
    if(mySrc === './images/image.png'){
        myImg.setAttribute('src', './image/image.png');
    }else{
        myImg.setAttribute('src', './image/image1.png');
    }
}

var button = document.querySelector('button');
var heading = document.querySelector('h1');

function setUserName(){
    const myName = prompt('Please enter your name.');
    if (myName === null){
        myName = 'User';
    }
    localStorage.setItem('name', myName);
    heading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    const storeName = localStorage.getItem('name');
    heading.textContent = 'Mozilla is cool, ' + storeName;
}

button.onclick = () =>{
    setUserName();
}