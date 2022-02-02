function pageCount(firstBook,secondBook,thirdBook){
    var totalPage = firstBook*100 + secondBook*200 + thirdBook*300;
    return totalPage;
}
var inputBook = pageCount(1,1,1);
console.log(inputBook);