function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
            }
        }
    }
    return arr;
}
arr = [5,6,1,2,5,8,2,4,6]; 

$(document).ready(function() {
    $("#bubbleSort").click(function() {        
        bubbleSort(arr);
        let pContainer = document.getElementById("bubbleAfter");
        pContainer.innerHTML = "After sorting: arr=["+arr+"]";
    });
});


console.log(bubbleSort(arr));