function positiveArry(arry){
    var arryElement = [];
    for(var i=0;i<arry.length;i++){
        var element = arry[i];
        if(element>=0){
           
            arryElement.push(element);
            
        }
        else{
            break;
        }
    }
return arryElement;
    
}
var arry = positiveArry([0,5,7,8,4,-3,-1,5,7,-8]);
console.log(arry);