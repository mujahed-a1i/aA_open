function tripler(array) {
    let newArray = [ ]
    for (let i = 0; i < array.length ; i++){
        let k = array[i] * 3;
        newArray.push(k)
    } 
    return newArray;
  }
  
  console.log(tripler([4,5,6]));