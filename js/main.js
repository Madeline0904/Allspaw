document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNAvItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
	const footerNewYear = document.querySelector('.footer__year')

	function addShadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNAvItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)

	window.addEventListener('scroll', addShadow)
	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerNewYear.innerText = year
	}
	handleCurrentYear()
})
