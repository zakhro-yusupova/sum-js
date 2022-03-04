var numbers = [1, 3, 5, 9];

function add (arr){
  var sumNumbers = 0;
  for (var i = 0; i < arr.length; i ++){
    sumNumbers += arr[i];
  }

  return sumNumbers;

}

console.log(add(numbers));
