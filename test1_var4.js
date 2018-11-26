
function diffMinMax(arr) {
    var arrMin = arr[0];
    var arrMax = arr[0]; 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arrMin ) {
            iMin = i;
        } 
        if (arr[i] > arrMax ) {
         iMax = i;
        } 
    }
var betweenMinMax = iMin - iMax - 1;
if (betweenMinMax%2) alert('нечетное');
else       alert('четное');
}
var myArr = [1.7, 2, 5.8, 777, 3.15, 10.6 ,0.1];
diffMinMax(myArr);

