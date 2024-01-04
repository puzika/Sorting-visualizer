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
   //SELECTION SORT**************************************

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

   //HEAP SORT*********************************************

   heapsort: async function () {
      async function heapify(size, index) {
         let largest = index;
         let left = 2 * index + 1;
         let right = 2 * index + 2;

         const indexElem = document.getElementById(`${index}`);
         let largestElem = indexElem;

         indexElem.classList.add('array__bar--current');

         await timer();

         if (left < size) {
            const leftElem = document.getElementById(`${left}`);

            leftElem.classList.add('array__bar--current');

            await timer();

            if (arrCurr[left] > arrCurr[largest]) {
               largest = left;
               largestElem = leftElem;
            } else {
               leftElem.classList.remove('array__bar--current');
            }
         }

         if (right < size) {
            const rightElem = document.getElementById(`${right}`);

            rightElem.classList.add('array__bar--current');

            if (arrCurr[right] > arrCurr[largest]) {
               largest = right;
               largestElem.classList.remove('array__bar--current');
               largestElem = rightElem;
            }

            await timer();

            rightElem.classList.remove('array__bar--current');
         }

         indexElem.classList.remove('array__bar--current');
         largestElem.classList.remove('array__bar--current');

         if (largest !== index) {
            const heightIndex = indexElem.dataset.height;
            const heightLargest = largestElem.dataset.height;

            indexElem.style.height = `${heightLargest}px`;
            indexElem.dataset.height = `${heightLargest}`;

            largestElem.style.height = `${heightIndex}px`;
            largestElem.dataset.height = `${heightIndex}`;

            [arrCurr[index], arrCurr[largest]] = [arrCurr[largest], arrCurr[index]];

            await heapify(size, largest);
         }
      }

      for (let i = Math.floor(arrCurr.length / 2) - 1; i >= 0; i--) {
         await heapify(arrCurr.length, i);
      }

      for (let i = arrCurr.length - 1; i > 0; i--) {
         [arrCurr[0], arrCurr[i]] = [arrCurr[i], arrCurr[0]];

         const zeroElem = document.getElementById(`${0}`);
         const iElem = document.getElementById(`${i}`);

         const heightZero = zeroElem.dataset.height;
         const heightIElem = iElem.dataset.height;

         zeroElem.style.height = `${heightIElem}px`;
         zeroElem.dataset.height = heightIElem;

         iElem.style.height = `${heightZero}px`;
         iElem.dataset.height = heightZero;

         await heapify(i, 0);
      }
   },

   //MERGE SORT********************************************

   mergesort: async function () {
      async function merge(left, right) {
         const result = [];
         let leftIdx = 0;
         let rightIdx = 0;
         let current = Math.min(...left);

         while (leftIdx < left.length && rightIdx < right.length) {
            const leftElem = document.getElementById(`${left[leftIdx]}`);
            const rightElem = document.getElementById(`${right[rightIdx]}`);

            leftElem.classList.add('array__bar--current');

            await timer();

            rightElem.classList.add('array__bar--current');

            await timer();

            if (arrCurr[left[leftIdx]] < arrCurr[right[rightIdx]]) {
               result.push(left[leftIdx]);

               const currentElem = document.getElementById(`${current}`);

               currentElem.style.height = `${arrCurr[left[leftIdx]]}px`;
               currentElem.dataset.height = arrCurr[left[leftIdx]];

               leftIdx++;
            } else {
               result.push(right[rightIdx]);

               const currentElem = document.getElementById(`${current}`);

               currentElem.style.height = `${arrCurr[right[rightIdx]]}px`;
               currentElem.dataset.height = arrCurr[right[rightIdx]];

               rightIdx++;
            }

            current++;

            leftElem.classList.remove('array__bar--current');
            rightElem.classList.remove('array__bar--current');
         }

         while (leftIdx < left.length) {
            result.push(left[leftIdx]);

            const leftElem = document.getElementById(`${left[leftIdx]}`);

            leftElem.classList.add('array__bar--current');

            await timer();

            leftElem.classList.remove('array__bar--current');

            const currentElem = document.getElementById(`${current}`);

            currentElem.style.height = `${arrCurr[left[leftIdx]]}px`;
            currentElem.dataset.height = arrCurr[left[leftIdx]];

            leftIdx++;
            current++;
         }

         while (rightIdx < right.length) {
            result.push(right[rightIdx]);

            const rightElem = document.getElementById(`${right[rightIdx]}`);

            rightElem.classList.add('array__bar--current');

            await timer();

            rightElem.classList.remove('array__bar--current');

            const currentElem = document.getElementById(`${current}`);

            currentElem.style.height = `${arrCurr[right[rightIdx]]}px`;
            currentElem.dataset.height = arrCurr[right[rightIdx]];

            rightIdx++;
            current++;
         }

         return result;
      }

      async function mergeS(arr) {
         if (arr.length <= 1) return arr;

         const middle = Math.floor(arr.length / 2);
         const left = await mergeS(arr.slice(0, middle));
         const right = await mergeS(arr.slice(middle));

         return merge(left, right);
      }

      const arrIdx = [];

      for (let i = 0; i < arrCurr.length; i++) arrIdx.push(i);

      const sortedIdx = await mergeS(arrIdx);

      arrCurr = sortedIdx.map(currVal => arrCurr[currVal]);

      console.log(arrCurr, sortedIdx);
   },


   //QUICK SORT*************************************************

   quicksort: async function () {
      async function quickS(left = 0, right = arrCurr.length - 1) {
         if (left >= right) return;

         const pivot = arrCurr[right];
         let index = left - 1;
         let indexElem;

         for (let i = left; i <= right; i++) {
            const currElem = document.getElementById(`${i}`);

            currElem.classList.add('array__bar--current');

            await timer();

            if (arrCurr[i] < pivot || i === right) {
               index++;
               [arrCurr[i], arrCurr[index]] = [arrCurr[index], arrCurr[i]];

               indexElem?.classList.remove('array__bar--current');
               indexElem = document.getElementById(`${index}`);
               indexElem.classList.add('array__bar--current');

               await timer();

               const heightCurrent = currElem.dataset.height;
               const heightIndex = indexElem.dataset.height;

               indexElem.style.height = `${heightCurrent}px`;
               indexElem.dataset.height = heightCurrent;

               currElem.style.height = `${heightIndex}px`;
               currElem.dataset.height = heightIndex;
            }

            currElem.classList.remove('array__bar--current');
         }

         indexElem?.classList.remove('array__bar--current');

         await quickS(left, index - 1);
         await quickS(index + 1, right);
      }

      await quickS();
   },

   //BUBBLE SORT***************************************************

   bubblesort: async function () {
      for (let i = 0; i < arrCurr.length - 1; i++) {
         let sorted = true;

         for (let j = 0; j < arrCurr.length - i - 1; j++) {
            if (arrCurr[j] > arrCurr[j + 1]) {
               [arrCurr[j], arrCurr[j + 1]] = [arrCurr[j + 1], arrCurr[j]];
               sorted = false;
            }
         }

         if (sorted) break;
      }

      console.log(arrCurr);
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
// Array.from(array.children).forEach(b => console.log(b));