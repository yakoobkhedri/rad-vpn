// dropdown menu

let dropdownBtn=Array.from(document.getElementsByClassName('dropdownBtn'));

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})