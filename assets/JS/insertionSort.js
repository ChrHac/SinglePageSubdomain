function insertionSort(insertionArr) {
    let n = insertionArr.length;
    for (let i = 1; i < n; i++) {
        let minIndex = insertionArr[i];
        let j = i-1;
        while (j>=0 && minIndex < insertionArr[j]) {
            insertionArr[j+1] = insertionArr[j];
            j -=1;            
        } 
        insertionArr[j+1] = minIndex;       
    }
    
    return insertionArr;
}
insertionArr = [12,13,11,7,4,5,19,17,15,20]; 

$(document).ready(function() {
    $("#insertionSort").click(function() {        
        insertionSort(insertionArr);
        let pContainer = document.getElementById("insertionAfter");
        pContainer.innerHTML = "After sorting: arr=["+insertionArr+"]";
    });
});
