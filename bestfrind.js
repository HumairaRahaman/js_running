function bestFrind(frindList){
   var friendName = frindList[0];
    for( var i=0; i<frindList.length;i++){
        if(frindList[i].length> friendName.length){
            friendName = frindList[i];
            

        }
    }
    return friendName;
}

var friendList = bestFrind(['tara','sumel','shanto','miraj']);
console.log(friendList);