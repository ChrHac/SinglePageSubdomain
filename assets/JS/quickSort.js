function swap(quickArr, leftIndex, rightIndex){
    let temp = quickArr[leftIndex];
    quickArr[leftIndex] = quickArr[rightIndex];
    quickArr[rightIndex] = temp;
}
function partition(quickArr, left, right) {
    let pivot   = quickArr[Math.floor((right + left) / 2)]; 
    let i       = left; 
    let j       = right; 
    while (i <= j) {
        while (quickArr[i] < pivot) {
            i++;
        }
        while (quickArr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(quickArr, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(quickArr, left, right) {
    let index;
    if (quickArr.length > 1) {
        index = partition(quickArr, left, right); 
        if (left < index - 1) { 
            quickSort(quickArr, left, index - 1);
        }
        if (index < right) { 
            quickSort(quickArr, index, right);
        }
    }
    return quickArr;
}
quickArr = [3,9,6,17,2,5,18,20,12,19]; 

$(document).ready(function() {
    $("#quickSort").click(function() {        
        quickSort(quickArr, 0, quickArr.length-1);
        let pContainer = document.getElementById("quickAfter");
        pContainer.innerHTML = "After sorting: arr=["+quickArr+"]";
    });
});