let menu = document.querySelector('.menu');
let toggle = document.querySelector('.mdi-36px');
let btnmenu = document.querySelector('.fa-bars');
let menuItem = document.querySelectorAll('.menuItem');

toggle.addEventListener('click', ()=>{
	console.log('Click')
	if(toggle.classList.contains('mdi-toggle-switch')){
		toggle.classList.replace('mdi-toggle-switch', 'mdi-toggle-switch-off-outline')
	}else{
		toggle.classList.replace('mdi-toggle-switch-off-outline','mdi-toggle-switch')
	}
})

btnmenu.addEventListener('click', event=>{
	menu.classList.toggle('mobile')
})

menuItem.forEach(item=>{
	item.addEventListener('click', event=>{
		menu.classList.remove('mobile')
	})
})

// <>