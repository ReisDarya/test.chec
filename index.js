import { object } from 'fast-check';
import _ from 'lodash';

export default function solution(content){
  // BEGIN
const object = convertToObject(content)
console.log(count(object))
console.log(nameOfCity(object))
console.log(minmax(object))
console.log(hottestDay(object))
console.log(hottestCity(object))
  // END
}
function convertToObject(content){
const currentContent = content.split('\n').filter(el => el !== '');
const keys = currentContent[0].split(',').map(el => el.replace(' ', '_'));
const object = currentContent.slice(1).map((el) => {
const values = el.split(',');
const obj = keys.reduce((acc, item, index) => {
acc[item] = values[index];
return acc 
},{})
return obj
})
return object
}



const count = (object) => `Count: ${object.length}`
const nameOfCity = (object) => `Cities: ${_.uniq(object.map(( { City } ) => City)).sort().join(', ')}`
const minmax = (object) => `Humidity: Min: ${_.min(object.map(( { Humidity } ) => Humidity))}, Max: ${_.max(object.map(( { Humidity } ) => Humidity))}`
const hottestDay = (obj) => {
  const hottest = obj.sort((a, b) => b.Max_Temperature - a.Max_Temperature)[0];
  return `HottestDay: ${hottest.Date} ${hottest.City}`
}
const hottestCity = (obj) => {
  const hottest = obj.reduce((acc, item) => {
    const prop = item.City.replace(' ', '_');
    acc[prop] = (acc[prop] ?? 0) + Number(item.Max_Temperature);
    return acc;
  }, {})
  const a = Object.values(hottest).sort((a, b) => b - a)[0];
  return `HottestCity: ${Object.keys(hottest).find(key => hottest[key] === a)}`;
}


//Выведите количество записей с данными в переданном файле. Учтите, что первая строчка в CVS файле является заголовочной, она не содержит данных и не должна учитываться. Вывод утилиты будет таким:
//Выведите список городов, для которых есть информация о погоде в переданном файле. Города в этом списке отсортированы в алфавитном порядке.
//Выведите минимальную и максимальную влажность, которая встречается в данных переданного файла.
//Выведите дату самой жаркой погоды и город, в котором была зафиксирована эта температура
//Выведите самый жаркий город, основываясь на средней температуре в городе за дни указанные в файле. Средняя температура считается относительно значения `Max Temperature`.
//С технической точки зрения, вам нужно посчитать среднюю температуру по каждому городу за указанную дату. Затем нужно определить в каком городе эта температура выше.

