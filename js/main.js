//Функция, возвращающая случайное целое число из переданного диапазона включительно
// имя_функции(от, до); // Результат: целое число из диапазона "от...до"
const getRandomInt = function (min, max) {
	if (Number.isFinite(min) && Number.isFinite(max) && max > min) {
	min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
else if (max === min && Number.isInteger(max)) {
	return max;
}
else {
	return 'В данном диапазоне нет ни одного целого числа.';
}
}//конец функции поиска целого числа
// console.log(getRandomInt(8, 12.5));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
// имя_функции(от, до, количество_знаков_после_запятой);
const getRandomFloat = function (min, max, digit) {
	if (Number.isFinite(min) && Number.isFinite(max) && Number.isFinite(digit) && min >= 0) {
  let num =  Math.random() * (max - min) + min;
  return +num.toFixed(digit);
}
else {
	return 'Введен некорректный диапазон или точность';
}
}//конец функции
// console.log(getRandomFloat(1.1, 1.2, 2.5));

