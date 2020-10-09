const drawer = document.getElementsByTagName('nav')[0];
const menuIcon = document.getElementById('menu-ico')

	function displayMenu() {
		menuIcon.style.display = 'none'
		drawer.style.display = 'block'
	}

	function closeDrawer() {
		drawer.style.display = 'none';
		menuIcon.style.display = 'block'
	}

	function selectMenu(item) {
		var el = document.getElementById(item);
		var elgroup = document.getElementsByClassName('wrapper');
		for (var i = 0; i < elgroup.length; i++) {
			elgroup[i].style.display = 'none'
		}
		el.style.display = 'block'
		closeDrawer()
	}

	function switchMode() {
		let toggle = document.getElementById('dark-light').checked
		console.log(toggle)
		let card = document.getElementsByTagName('body')[0];
		toggle ? card.style.backgroundColor = 'black' : card.style.backgroundColor = '#ffcd05' 
	}

	drawer.style.height = window.innerHeight + 'px';