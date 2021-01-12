let navBarTogglerTag=document.getElementById('navbar-toggler');
let humbargerBarTag=document.getElementsByClassName('humbargerBar')[0];
let humbargerCrossBarTag=document.getElementsByClassName('humbargerCrossBar')[0];

let navbarSupportedContentTag=document.getElementById('navbarSupportedContent');
navBarTogglerTag.addEventListener('click',()=>{
   let checkNavbarCollapse=navbarSupportedContentTag.classList.toggle('navBarCollapse');
   humbargerBarTag.classList.toggle('humbarBar-collapse')
   humbargerCrossBarTag.classList.toggle('humbargerCrossBar-show')

})

{/* <a class="nav-link h5 active" aria-current="page" href="#">HOME</a> */}
s



