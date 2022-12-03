'use strict';

//AVERAGE

const list = [
    2000,
    3000
  ];
  

const calculateAverage = (list) =>{
    let amountList = 0;
  
    for (let i = 0; i < list.length; i++){
      amountList = amountList + list[i];
    }
  
    const averageList = amountList / list.length;
  
    return averageList;
  };




  //MEDIAN

  const list1 = [
    100,
    200,
    300,
    500,
    4000000,
    150,
    450,
    400,
  ];
  
  
  
  list1.sort(function(a, b) {
    return a - b;
  });
  
  
  const halfList1 = parseInt(list1.length / 2);
  
  function isPair (number){
    if(number % 2 === 0){
      return true;
    }
    else{
      return false;
    }
  }
  
  let median;


  
  if (isPair(list1.length)){
    const element1 = list1[halfList1 - 1];
    const element2 = list1[halfList1];
  
    const calculateAverageElements = calculateAverage([element1, element2]);
  
    median = calculateAverageElements;
  }
  else{
    median = list1[halfList1];
  }



  //MODE

  const list2 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const list2Count ={};
  
  list2.map(
    function(element){
      if(list2Count[element]){
        list2Count[element] += 1;
      }
      else{
        list2Count[element] = 1;
      }
    }
  );
  
  const list2Array = Object.entries(list2Count).sort(
      function(elementA, elementB) {
        return elementA[1] - elementB[1];
      }
    );
    
    const mode = list2Array[list2Array.length - 1];
    
    console.log(mode)