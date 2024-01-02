import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

const texts = gsap.utils.toArray('.text'); 
const tl = gsap.timeline();

texts.forEach(text => {
  const splitText = new SplitTextJS(text);
  console.log(splitText)

  tl
    // incoming animation
    .from(splitText.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: .04
    }, "<")
    // outcoming animation
    .to(splitText.chars, {
      opacity: 0,
      y: -80,
      rotateX: 90,
      stagger: .04
    }, "<1")
})
