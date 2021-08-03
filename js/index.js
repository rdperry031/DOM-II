// Your code goes here
const navLinks = document.querySelectorAll('a.nav-link');
console.log(navLinks);
const navArray = Array.from(navLinks);
console.log(navArray);
function navOver(event){
  event.currentTarget.style.backgroundColor = '';
}
function navClick(event){
        event.currentTarget.style.backgroundColor = '#CC8899';
    }


for(let i=0; i<navArray.length; i++){
    navArray[i].addEventListener('mouseover', navOver);
    navArray[i].addEventListener('dblclick', navClick);
}


const funButtons = document.querySelector('.btn');
funButtons.addEventListener('wheel',e => {
  e.currentTarget.style.backgroundColor = 'yellow';
  console.log(e);
})
let form = document.createElement('form');
console.log(form);
form.backgroundColor = 'black';
funButtons.prepend(form);
console.log(funButtons);
