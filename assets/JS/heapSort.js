let array_length;

function heapRoot(heapArr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && heapArr[left] > heapArr[max]) {
        max = left;
    }

    if (right < array_length && heapArr[right] > heapArr[max])     {
        max = right;
    }

    if (max != i) {
        swap(heapArr, i, max);
        heapRoot(heapArr, max);
    }
}

function swap(heapArr, leftIndex, rightIndex){
    let temp = heapArr[leftIndex];
    heapArr[leftIndex] = heapArr[rightIndex];
    heapArr[rightIndex] = temp;
}

function heapSort(heapArr) {
    
    array_length = heapArr.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heapRoot(heapArr, i);
      }

    for (i = heapArr.length - 1; i > 0; i--) {
        swap(heapArr, 0, i);
        array_length--;
      
      
        heapRoot(heapArr, 0);
    }
    return heapArr;
}
heapArr = [3,9,6,17,2,5,18,20,12,19]; 

$(document).ready(function() {
    $("#heapSort").click(function() {        
        heapSort(heapArr);
        let pContainer = document.getElementById("heapAfter");
        pContainer.innerHTML = "After sorting: arr=["+heapArr+"]";
        let id = $(this).parent().attr('id');
        let aContainer = document.getElementById("alg"+id);
        aContainer.innerHTML = heapSort.toString() ;
    });
});