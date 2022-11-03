'use strict';

const list1 = [
  100,
  200,
  300,
  500,
];



const calculateAverage = (list) =>{
  let amountList = 0;

  for (let i = 0; i < list.length; i++){
    amountList = amountList + list[i];
  }

  const averageList = amountList / list.length;

  return averageList;
};