function selectionSort(selectionArr) {
    let n = selectionArr.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (selectionArr[j] < selectionArr[minIndex]) {
                minIndex = j;
            }
        }
        [selectionArr[minIndex], selectionArr[i]] = [selectionArr[i], selectionArr[minIndex]];
    }
    return selectionArr;
}
selectionArr = [18,15,3,8,7,16,14,17,6,19]; 

$(document).ready(function() {
    $("#selectionSort").click(function() {        
        selectionSort(selectionArr);
        let pContainer = document.getElementById("selectionAfter");
        pContainer.innerHTML = "After sorting: arr=["+selectionArr+"]";
        let id = $(this).parent().attr('id');
        let aContainer = document.getElementById("alg"+id);
        aContainer.innerHTML = selectionSort.toString() ;
    });
});