import { addNum } from './utils/math';
import { parseString } from './utils/string'
import image from './image.jpg';
import './index.css';

console.log('Webpack tutorial')

const result1 = addNum(1, 3);
console.log(result1);

const result2 = result1 + addNum(5, 3);
console.log(result2);

const headingDiv = document.createElement('div');

const img = new Image();
img.src = image;

const newContent = document.createTextNode(parseString('Hi there and greetings!', '*'));
headingDiv.appendChild(newContent);

document.body.appendChild(headingDiv);
document.body.appendChild(img);