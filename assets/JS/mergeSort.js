function mergeSort(mergeArr) {
   
    
    
    
}
mergeArr = [17,18,16,6,5,12,1,2,20,9]; 

$(document).ready(function() {
    $("#mergeSort").click(function() {        
        mergeSort(mergeArr);
        let pContainer = document.getElementById("mergeAfter");
        pContainer.innerHTML = "After sorting: arr=["+mergeArr+"]";
    });
});


