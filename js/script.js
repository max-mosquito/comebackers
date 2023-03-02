const clickme = document.querySelector('.clickme');
const popup = document.querySelector('.popup');

clickme.addEventListener('click', ()=>{
	popup.classList.add('active');
});

popup.addEventListener('click', (e)=>{
	popup.classList.remove('active');
})