function isThisAnEmailAddress(mayBeAnEmail) {
    if (mayBeAnEmail.includes("@") && !mayBeAnEmail.includes(" ")) {
        let indexOfAt = mayBeAnEmail.indexOf("@");
        let firstDotIndex = mayBeAnEmail.indexOf(".");
        let findSecondDotIndex = mayBeAnEmail.substring(indexOfAt).indexOf(".");
        if(firstDotIndex < findSecondDotIndex){

            return true;
        }
        else return false;
    }
    else return false;
}