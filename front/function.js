

//Creation de RegExp pour validation Email
const ValidateEmail = function (mail) {
 
    const emailRegExp = new RegExp(
        
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
        'g'
    );
    let testEmail = emailRegExp.test(mail.value);
    
    if(testEmail) {
        return true

    } else {
        alert('adresse email non valide !')
        return false
    }
};

