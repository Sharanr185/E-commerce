function Signup_validation()
{
    var Name=document.signupform.username.value;
    var Password=document.signupform.password.value;
    var Password1=document.signupform.password1.value;
    var Phnum=document.signupform.phnum.value;
    var n4=document.getElementsByName("feed");
    if(Name=="")
    {
        window.alert("Please enter your name");
        return false;
    }
    if(Password == "")
    {
        alert("Please enter the password");
        Password.focus();
        return false;
    }
    if(Password1 == "")
    {
        alert("Please enter the Confirm password");
        Password1.focus();
        return false;
    }
    if(Password.length!= ""){
        var x = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
         if(x.test(Password) === false) 
         {    alert("Please enter a valid pwd");
                 return false;
         }       
    }
    if(Password!=Password1)
    {
        alert("Password mismatch occurs");
        return false;
    }
    if(Phnum.length!=10)
    {
        alert("Please enter a valid phone number")
        return false;
    }
    var i=0;
			var valid=false;
			while(!valid && i<n4.length)
			{
				if(n4[i].checked)
				{
					valid=true;
				}
				
				i++;
			}
			if(!valid)
			{
				alert("Please choose the radio button");
				return false;
			}
}
window.addEventListener("load",start,false);
function start()
{
    document.getElementsById("signup-form").addEventListener("submit",subfun,false);
    document.getElementById("signup-form").addEventListener("reset",refun,false);
}
function subfun()
{
    window.alert("Are you sure to submit");
    window.alert("Thank you");
}
function refun()
{
    window.alert("Are you sure to reset");
}