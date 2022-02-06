 //problem 1:


function anaToVori(ana){
    let totalVori;
    if(ana <= 0 || typeof ana != 'number'){
        return "enter the valid value";
    }
    else if(ana >0 ){
        const totalVori = ana * 0.0625;
        return totalVori;
    }
 
}






//problem 2:

function pandaCost(singaraQuantity,samuchaQuantity,zilapiQuantity){
    let totalPrice;
    if((singaraQuantity<0 || typeof singaraQuantity == 'string') || (samuchaQuantity<0 || typeof samuchaQuantity == 'string') || (zilapiQuantity<0 || typeof samuchaQuantity == 'string')){
        return "enter the right value";

    }
    else if( singaraQuantity == 0 && samuchaQuantity == 0 && zilapiQuantity == 0){
        return "enter a value";
    }
    else if (singaraQuantity>=0 || samuchaQuantity >= 0 || zilapiQuantity >= 0 ){
        totalPrice = singaraQuantity * 7 + samuchaQuantity * 10 + zilapiQuantity * 15;
        return totalPrice; 
    }
}






//problem 3:

function picnicBudget(amountOfPeople){
    let budgetOfPicnic;
    if(amountOfPeople <= 0 || typeof amountOfPeople != 'number'){
              return "enter the valid value";
          }
          else if(amountOfPeople <= 100){
              budgetOfPicnic = amountOfPeople * 5000;
              return budgetOfPicnic;

          }
          else if(amountOfPeople > 100 && amountOfPeople <= 200){
              const firstHundred = 100 * 5000;
              const secondHundred = (amountOfPeople - 100) * 4000;
              budgetOfPicnic = firstHundred + secondHundred;
              return budgetOfPicnic;

        }
        else{
            const firstHundred = 100 * 5000;
            const secondHundred =  100 * 4000;
            const extraPeople = (amountOfPeople - 200) * 3000;
            budgetOfPicnic = firstHundred + secondHundred + extraPeople;

            return budgetOfPicnic;
        }
}









//problem 4:

function oddFriend(friendsName){
    if(friendsName.length === 0){
        return "Enter the value";
    }
 
    let friendNameLength = 0;
    let friendNameStorage = 0;
    let friendNameStorageCount = 0;
    for(let i = 0; i < friendsName.length; i++){
        friendNameLength = friendsName[i].length;
        friendNameStorage = friendsName[i];
        if(friendNameLength % 2 != 0 ){
            friendNameStorageCount++;
            return friendNameStorage;
        }
     
        else{
            continue;
        }

        
    }
    if(friendNameStorageCount == 0){
        return "Not Match";
    }
}

