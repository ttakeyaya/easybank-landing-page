const mobileMenu = document.getElementById('hamburger');
let image = document.getElementById('hamburger-image');
let modal = document.getElementById('modal');
let body = document.body;
let isModalOpen = false;

mobileMenu.addEventListener('click', (e)=>{
  if(!isModalOpen){
    modal.style.display="block";
    image.src ="../images/icon-close.svg";
    isModalOpen =! isModalOpen;
    body.classList.add('forbid-scroll');
  }else{
    image.src ="../images/icon-hamburger.svg";
    isModalOpen =! isModalOpen;
    modal.style.display="none";
    body.classList.toggle('forbid-scroll');
  }
});

// reset the modal if the vw is greater than or equal to 800px;
window.onresize= (e) =>{
  let currentVW = window.innerWidth;
  if(currentVW >= 800){
    isModalOpen = false;
    modal.style.display="none";
    image.src="../images/icon-hamburger.svg";
    body.classList.remove('forbid-scroll');
  }
}