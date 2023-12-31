'use strict';

import './styles/main.scss';

const array = document.querySelector('.array__bars');
const algs = document.querySelector('.drop-down__list');
const sizeControl = document.querySelector('.size__range');
const labelSize = document.querySelector('.array__size');
const labelMethod = document.querySelector('.array__method');
const generateButton = document.querySelector('.btn--generate');
const sortButton = document.querySelector('.btn--sort');

//ALGORITHMS

const algorithms = {
   selectionsort: function (arr) {
      for (let i = 0; i < arr.length - 1; i++) {
         let minIndex = i;

         for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
         }

         [arr[minIndex], arr[i]];
      }
   },

   heapsort: function (arr) {

   }
};

//VIEW

function getStyle(elem, style) {
   const styles = window.getComputedStyle(elem);

   return styles.getPropertyValue(style);
}

const arrayHeight = parseFloat(getStyle(array, 'height'));

function genRandomNum(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function genRandomArr(size) {
   const arr = [];
   const minHeight = 10;

   for (let i = 0; i < size; i++) {
      const height = genRandomNum(minHeight, arrayHeight);
      arr.push(height);
   }

   return arr;
}

function renderArr(arr) {
   array.innerHTML = '';

   for (let i = 0; i < arr.length; i++) {
      const markup = `
         <span style="height: ${arr[i]}px;" class="array__bar ${i === 0 ? 'array__bar--current' : ''}"></span>
      `;

      array.insertAdjacentHTML('beforeend', markup);
   }
}

function createArr(size) {
   const arr = genRandomArr(size);
   renderArr(arr);
}

sizeControl.addEventListener('input', function () {
   labelSize.textContent = sizeControl.value;

   createArr(sizeControl.value);
});

algs.addEventListener('click', function (e) {
   const target = e.target;

   if (!target.classList.contains('drop-down__item')) return;

   labelMethod.textContent = target.textContent;
});

generateButton.addEventListener('click', function () {
   createArr(sizeControl.value);
});

sortButton.addEventListener('click', function () {
   const alg = labelMethod.textContent.toLowerCase().split(' ').join('');

   algorithms[alg]();
});

createArr(sizeControl.value);