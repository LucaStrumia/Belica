const openModal = document.querySelector('.main-header__link');
const modal = document.querySelector('.modal-sesion')
const closeModal = document.querySelector('.close-modal')

const openModal1 = document.querySelector('.modal-crear');
const modal1 = document.querySelector('.modal-sesion_crear')
const closeModal1 = document.querySelector('.close-modal_crear')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})


openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show_crear');
    modal.classList.remove('modal--show');
    
})

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show_crear');
})