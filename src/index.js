import React, {} from 'react';
import { createRoot } from 'react-dom/client'
import { addNum } from './utils/math';
// import { parseString } from './utils/string'
// import image from './image.jpg';
import App from './App';
import './index.css';

console.log('Webpack tutorial')

const result1 = addNum(1, 3);
console.log(result1);

const result2 = result1 + addNum(5, 3);
console.log(result2);

createRoot(document.body).render(<App />);
