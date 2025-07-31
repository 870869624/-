

const myImg = document.querySelector('img');


myImg.onclick = () => {
    const currentSrc = myImg.getAttribute('src');
    const image1 = './image/image.png';
    const image2 = './image/image1.png';

    // 切换图片
    if (currentSrc === image1) {
        myImg.setAttribute('src', image2);
    } else {
        myImg.setAttribute('src', image1);
    }
};

var button = document.querySelector('button');
var heading = document.querySelector('h1');

function setUserName(){
    const myName = prompt('Please enter your name.');
    if (myName === null){
        myName = 'User';
    }
    localStorage.setItem('name', myName);
    console.log(myName);
    heading.textContent = 'Welcome To My Blog, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    const storeName = localStorage.getItem('name');
    heading.textContent = 'Welcome To My Blog, ' + storeName;
}

button.onclick = () =>{
    setUserName();
}