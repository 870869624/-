const myUrl = document.querySelector('a');

myUrl.onclick = function() {
   const mySrc = myUrl.getAttribute('herf');

   console.log(mySrc);
   myUrl.setAttribute('herf', 'https://www.baidu.com');
}