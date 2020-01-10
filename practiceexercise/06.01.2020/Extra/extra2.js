user = {}
// List of Functions for registration
function validate() {
    
    fname = document.registrationForm.txtFirstName.value;
    lname = document.registrationForm.txtLastName.value;
    email = document.registrationForm.txtEmail.value;
    contact = document.registrationForm.txtContact.value;
    password = document.registrationForm.txtPassword.value;

    if( fname != "" && lname !="" && email !="" && contact!="" && password !="") 
    {   
        pattName = /^[a-zA-Z]*$/;
        pattContact = /^[0]?[789]\d{9}$/;
        pattEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(pattName.test(fname) === false) 
        {
            alert( "Please provide a valid FirstName." );
            fname.focus();
            return true;
        } 
        
        else if(!pattName.test(lname)) 
        {
            alert( "Please provide a valid LastName." );
            lname.focus();
        }

        else if(!pattContact.test(contact))
        {
            alert( "Please provide a valid Contact No." );
            contact.focus();
        }

        else if(!pattEmail.test(email))
        {
            alert( "Please provide a valid Email." );
            email.focus();
        }

        else
        {
            //saveToArray(fname, lname, contact, email, password);
            saveToLocalStorage(email, password);
        }
    }
    else
    {
        alert("One/Many field(s) are empty.");
    }


}


function saveToLocalStorage(email, password)
{
    window.localStorage.setItem(email, password);
}



function saveToArray(fname, lname, contact, email, password)
{
    user = {
        firstname : fname,
        lastname : lname,
        contact : contact,
        email : email,
        password : password
    }
    console.log(user);
    msgString = "<b>YOU REGISTERED WITH FOLLOWING DETAILS</b><br><br>" + 
            "<b>Firstname&nbsp;&nbsp;&nbsp;= </b>" + user["firstname"] + "<br>"+
            "<b>Lastname&nbsp;&nbsp;&nbsp;&nbsp;= </b>" + user["lastname"] + "<br>"+
            "<b>Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= </b>" + user["contact"] + "<br>"+
            "<b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= </b>" + user["email"] + "<br>"+
            "<b>Password&nbsp;&nbsp;&nbsp;&nbsp;= </b>" + getEncPassword(user["password"]);
    document.querySelector(".userInfo").innerHTML = msgString;
}


function getEncPassword(password)
{
    encPassword = "";
    for(i=0; i < password.length; i++)
    {
        encPassword += "*";
    }
    return encPassword;
}


























//List of Functions for Login
function loginCheck()
{
    loginEmail = document.loginForm.txtLoginEmail.value;
    loginPassword = document.loginForm.txtLoginPassword.value;
    
    currentUser = {
        currentEmail : loginEmail,
        currentPassword : loginPassword
    }



    if(window.localStorage.getItem(currentUser["currentEmail"]) === currentUser["currentPassword"] )
    {
        document.write("You are successfully logged in, " + currentUser["currentEmail"])
    }
    else
    {
        alert("Incorrent Login Credentials. Try LOGGING IN AGAIN!");
    }

}