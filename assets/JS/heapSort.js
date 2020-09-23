function heapSort(heapArr) {
    
    return heapArr;
}
heapArr = [3,9,6,17,2,5,18,20,12,19]; 

$(document).ready(function() {
    $("#heapSort").click(function() {        
        heapSort(heapArr);
        let pContainer = document.getElementById("heapAfter");
        pContainer.innerHTML = "After sorting: arr=["+heapArr+"]";
    });
});