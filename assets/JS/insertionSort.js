function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let minIndex = arr[i];
        let j = i-1;
        while (j>=0 && minIndex < arr[j]) {
            arr[j+1] = arr[j];
            j -=1;            
        } 
        arr[j+1] = minIndex;       
    }
    
    return arr;
}
arr = [12,13,11,7,4,5,19,17,15,20]; 

$(document).ready(function() {
    $("#insertionSort").click(function() {        
        insertionSort(arr);
        let pContainer = document.getElementById("insertionAfter");
        pContainer.innerHTML = "After sorting: arr=["+arr+"]";
    });
});


console.log(insertionSort(arr));