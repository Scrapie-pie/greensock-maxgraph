// import {TweenMax} from "./gsap.min";

const text = document.querySelector('.text');

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text)

const random = (min, max) => (Math.random() * (max - min)) + min

console.log(split.querySelectorAll('.letter'))

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: 0.1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		//repeat: -1,
		//yoyo: true
	})
})