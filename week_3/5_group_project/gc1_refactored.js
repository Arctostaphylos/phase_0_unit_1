var sum=function(arr) {
  var total=0
  for(i=0; i<arr.length; i++) {
    total+=arr[i];
  }
  console.log(total);
  return total;
}

var mean=function(arr) {
  var total=sum(arr);
  answer=total/arr.length;
  console.log(answer);
};
//Test 3

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
