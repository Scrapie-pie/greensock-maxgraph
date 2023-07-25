const btn = document.querySelector('.hero-btn')

gsap.from('.site', {opacity: 0, duration: 0.5})

const tl1 = gsap.timeline();
tl1
  .from('.header', {opacity: 0, duration: 0.5})
  .from('.hero-title', {opacity: 0, y: 100, duration: 0.7})
  .from('.hero-descr', {opacity: 0, y: 50, duration: 0.7}, "-=0.7")
  .from('.hero-btn', {opacity: 0, y: 100, duration: 0.7}, "-=0.7")

btn.onclick = () => {
  tl1.reverse()
}


const items = document.querySelectorAll('.accordion__item')

items.forEach(el => {
  const tl2 = gsap.timeline();
  const bottomEl = el.querySelector('.accordion__bottom')

  tl2.to(bottomEl, { duration: 0.7, height: bottomEl.scrollHeight })
  tl2.pause()

  el.addEventListener('click', (e) => {
    let self = e.currentTarget;

    if (!self.classList.contains('active')) {
      self.classList.add('active')
      tl2.play()

    } else {
      self.classList.remove('active')
      tl2.reverse()
    }
  })
})