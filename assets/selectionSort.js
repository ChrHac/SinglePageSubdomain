function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}
arr = [18,15,3,8,7,16,14,17,6,19]; 

$(document).ready(function() {
    $("#selectionSort").click(function() {        
        selectionSort(arr);
        let pContainer = document.getElementById("selectionAfter");
        pContainer.innerHTML = "After sorting: arr=["+arr+"]";
    });
});


console.log(selectionSort(arr));