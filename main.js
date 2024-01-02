import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

const texts = gsap.utils.toArray('.text'); 
const tl = gsap.timeline();

texts.forEach(text => {
  const splitText = new SplitTextJS(text);
  console.log(splitText)
})
