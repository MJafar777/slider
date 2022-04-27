

const navbar=document.querySelector('.navbar');
const menuToggle= document.querySelector('.menuToggle')

const list=document.querySelectorAll('.list');

function activeList(){
    list.forEach( (item)=> {
          item.classList.remove('active');
          item.addEventListener('click',()=>{
              item.classList.add('active');
          })
    })
}

list.forEach((item)=>{
    item.addEventListener('click',activeList);
})

menuToggle.addEventListener('click',()=>{
    navbar.classList.toggle('open');
})