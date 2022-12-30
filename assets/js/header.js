let menu = document.querySelector('.menu');
let toggle = document.querySelector('.switch');
let btnmenu = document.querySelector('.fa-bars');
let menuItem = document.querySelectorAll('.menuItem');

toggle.addEventListener('click', event=>{
	toggle.classList.toggle(toggle.classList.replace('fa-toggle-on', 'fa-toggle-off'))
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