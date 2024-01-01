'use strict';

import './styles/main.scss';

const array = document.querySelector('.array__bars');
const algs = document.querySelector('.drop-down__list');
const sizeControl = document.querySelector('.size__range');
const labelSize = document.querySelector('.array__size');
const labelMethod = document.querySelector('.array__method');
const generateButton = document.querySelector('.btn--generate');
const sortButton = document.querySelector('.btn--sort');

let arrCurr = [];

// TIMER

function timer() {
   const time = sizeControl.value;
   return new Promise(function (resolve) {
      setTimeout(resolve, 1000 / time);
   });
}

//ALGORITHMS

const algorithms = {
   selectionsort: async function () {
      for (let i = 0; i < arrCurr.length - 1; i++) {
         const iElem = document.getElementById(`${i}`);

         let minIdx = i;
         let minElem = iElem;

         minElem.classList.add('array__bar--current');

         await timer();

         for (let j = i + 1; j < arrCurr.length; j++) {
            const currElem = document.getElementById(`${j}`);

            currElem.classList.add('array__bar--current');

            await timer();

            currElem.classList.remove('array__bar--current');

            if (arrCurr[minIdx] > arrCurr[j]) {
               minIdx = j;

               minElem.classList.remove('array__bar--current');

               minElem = currElem;

               minElem.classList.add('array__bar--current');

               await timer();
            }
         }

         if (minIdx !== i) {
            [arrCurr[minIdx], arrCurr[i]] = [arrCurr[i], arrCurr[minIdx]];

            const heightMin = minElem.dataset.height;
            const heightI = iElem.dataset.height;

            minElem.style.height = `${heightI}px`;
            minElem.dataset.height = heightI;

            iElem.style.height = `${heightMin}px`;
            iElem.dataset.height = heightMin;

            await timer();
         }

         minElem.classList.remove('array__bar--current');
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
         <span id="${i}" data-height="${arr[i]}" style="height: ${arr[i]}px;" class="array__bar"></span>
      `;

      array.insertAdjacentHTML('beforeend', markup);
   }

   arrCurr = arr;
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