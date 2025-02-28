// O'zgaruvchilarni aniqlash
const testimonialsCards = document.querySelector('.testimonials-cards') // Slider konteyneri
const testimonialsCard = document.querySelectorAll('.testimonials-card') // Har bir testimonial kartasi
const indicators = document.querySelectorAll('.indicator') // Indikatorlar
const totalItems = testimonialsCard.length // Testimonial kartalari soni
let currentIndex = 0 // Joriy indeks
const gapBetweenItems = 40 // Har bir element orasidagi bo'sh joy (40px)

// Har bir elementning kengligi va oradagi bo'sh joyni hisobga olgan holda siljish miqdorini hisoblash
function getPageWidth() {
	return testimonialsCard[0].offsetWidth + gapBetweenItems // Kenglik + bo'sh joy
}

// Slider yangilash
function updateSlider() {
	const pageWidth = getPageWidth()
	const offset = -(currentIndex * (pageWidth + gapBetweenItems)) // Siljish miqdori
	testimonialsCards.style.transform = `translateX(${offset}px)`
	testimonialsCards.style.transition = 'transform 0.5s ease-in-out'

	// Indikatorlarni faollashtirish
	indicators.forEach((indicator, index) => {
		indicator.classList.toggle('indicator-active', index === currentIndex)
	})
}

// Indikator bosilganda tegishli itemga o'tish
indicators.forEach((indicator, index) => {
	indicator.addEventListener('click', () => {
		currentIndex = index
		updateSlider()
	})
})
