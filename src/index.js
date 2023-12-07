'use strict';

import './styles/main.scss';

const array = document.querySelector('.array__bars');
const algs = document.querySelector('.drop-down__list');
const sizeControl = document.querySelector('.size__range');
const labelSize = document.querySelector('.array__size');
const labelMethod = document.querySelector('.array__method');

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
   const minHeight = arrayHeight / size;

   for (let i = 0; i < size; i++) {
      const height = minHeight * (1 + genRandomNum(0, size - 1));
      arr.push(height);
   }

   return arr;
}

function renderArr(arr) {
   for (let i = 0; i < arr.length; i++) {
      const markup = `
         <span style="height: ${arr[i]}px;" class="array__bar"></span>
      `;

      array.insertAdjacentHTML('beforeend', markup);
   }
}

sizeControl.addEventListener('input', function () {
   labelSize.textContent = sizeControl.value;
});

algs.addEventListener('click', function (e) {
   const target = e.target;

   if (!target.classList.contains('drop-down__item')) return;

   labelMethod.textContent = target.textContent;
});

const arr = genRandomArr(50);
renderArr(arr);