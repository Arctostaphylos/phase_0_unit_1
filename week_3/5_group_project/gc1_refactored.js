// Test 1 user story: When I give you a set of numbers, you print out the sum of all the numbers.
var sum=function(arr) {
  var total=0
  for(i=0; i<arr.length; i++) {
    total+=arr[i];
  }
  console.log(total);
  return total;
}

//Test 2 user story: When I give you a set of numbers, you print out the arithmetic mean of all the numbers.
var mean=function(arr) {
  var total=sum(arr);
  answer=total/arr.length;
  console.log(answer);
};

//Test 3 user story: When I give you a set of numbers, you print out the median number.

var median=function(arr) {
  arr.sort;
  if(arr.length%2===1){
    var index=Math.floor(arr.length/2);
    answer = arr[index];   
  } 
  else {
    var index=(arr.length/2);
    answer = (arr[index] + arr[index-1])/2;
  }
  console.log(answer)
}
