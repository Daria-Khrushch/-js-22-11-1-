// import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// const logMessage = () => {
//   console.log('лог при вызове колл бек функции через 3 секунды');
// };
// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('внутри коллбєк для сет таймаут');
// }, 2000);

// console.log('После вызова setTimeout');

// setTimeout(() => {
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const logger = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// // const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }
