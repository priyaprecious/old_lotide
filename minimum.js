const range = function(arr) {
   
   var tempmax = arr[0];
   for (var i=1;i<arr.length;i++)
   {
     if(arr[i]>tempmax)
     {
       tempmax=arr[i];
     }
   } 

   var tempmin = arr[0];
   for (var i=1;i<arr.length;i++)
   {
     if(arr[i]<tempmin)
     {
       tempmin=arr[i];
     }
   } 
  return (tempmax - tempmin)
  
}
const number =[6,2,3,4,9,6,1,0,5];
console.log(`The maximum number in the list [6,2,3,4,9,6,1,0,5] is ${range(number)}`);