// Vars
const modal = document.getElementById('simple-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Listener Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);



// Functions
function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}