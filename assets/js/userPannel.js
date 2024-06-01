// aside
let aside=document.querySelector('aside');
let li=Array.from(document.querySelectorAll('header .menu  > ul > li'));

document.getElementById('hamicon').addEventListener('click',function () {
  aside.classList.add('active');
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuOverlay').addEventListener('click',function () {
    this.classList.remove('active');
    aside.classList.remove('active');
  })
})
// dropdown menu

let dropdownBtn=Array.from(document.getElementsByClassName('dropdownBtn'));

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})