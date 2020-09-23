function bubbleSort(bubbleArr) {
    for (let j = 0; j < bubbleArr.length; j++) {
        for (let i = 0; i < bubbleArr.length; i++) {
            if (bubbleArr[i-1] > bubbleArr[i]) {
                [bubbleArr[i-1], bubbleArr[i]] = [bubbleArr[i], bubbleArr[i-1]];
            }
        }
    }
    return bubbleArr;
}
bubbleArr = [5,6,1,2,5,8,2,4,6]; 

$(document).ready(function() {
    $("#bubbleSort").click(function() {        
        bubbleSort(bubbleArr);
        let pContainer = document.getElementById("bubbleAfter");
        pContainer.innerHTML = "After sorting: arr=["+bubbleArr+"]";
    });
});
