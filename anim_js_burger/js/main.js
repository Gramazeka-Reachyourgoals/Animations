const burger = document.querySelector('.burger')
let burgerOpen = false;
burger.addEventListener('click', () =>{
	if(!burgerOpen) {
		burger.classList.add('open');
		burgerOpen = true;
	} else {
		burger.classList.remove('open');
		burgerOpen = false;
	}
});