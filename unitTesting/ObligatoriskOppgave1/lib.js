function isThisDateValid(date){
    let firstDotIndex = date.indexOf(".");
    let secondDotIndex = date.substring(firstDotIndex).indexOf(".");
    if(date.length == 10) return true;
    if(firstDotIndex == 2 && secondDotIndex == 5) return true;
    else return false;
}