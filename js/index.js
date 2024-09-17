const navLinks = document.querySelectorAll('a.nav-link');
console.log(navLinks);
const navArray = Array.from(navLinks);
console.log(navArray);
function navOver(event){
  this.style.backgroundColor = '#CC8899';
}
for(let i=0; i<navArray.length; i++){
    navArray[i].addEventListener('mouseover', navOver);
}