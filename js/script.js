const childCards = document.querySelectorAll('[data-child-card]');
// const childCardCheckbox = document.querySelectorAll('[data-card-checkbox]')

const childList = document.querySelector('[data-child-list]')
const btnShowChildList = document.querySelector('[data-add-childs]')
const disabedWrapper = document.querySelector('[data-disable-wrap]')

for (const checkCard of childCards) {
	checkCard.addEventListener('click', (el) => {
		const card = el.target.closest('[data-child-card]')
		card.classList.toggle('selected')

		const check = card.querySelector('[data-card-checkbox]')
		check.checked = !check.checked;
	})
}

btnShowChildList.addEventListener('click', () => {
	childList.classList.remove('disabled')
	disabedWrapper.style.display = 'none'
})