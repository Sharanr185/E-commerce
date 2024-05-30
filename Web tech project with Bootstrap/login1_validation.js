function loginvalidation(){
    var Name=document.myform.name.value;
    var password=document.myform.pass.value;

    if(Name==null || Name=="")
    {
        alert("Please enter your name");
        return false;
    }
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }
    if(password.length!= ""){
        var x = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
         if(x.test(password) === false) 
         {    alert("Please enter a valid pwd");
                return false;
         }       
 }

}
window.addEventListener("load",start,false);
            function start()
            {
                document.getElementById("myform").addEventListener("submit",subfun,false);
                document.getElementById("fname").addEventListener("focus",focusone, false );
                document.getElementById("fname").addEventListener("blur", blurone, false );
                document.getElementById("pass").addEventListener("focus",focustwo, false );
                document.getElementById("pass").addEventListener("blur", blurone, false );
            }
            function subfun()
            {
                window.alert("Are you sure want to submit.");
                window.alert("Thank You!");
            }
function focusone() 
{ 
    document.getElementById("help").innerHTML="Enter name" ;
}
function focustwo() 
{
    document.getElementById("help").innerHTML="Enter password" ;
}
function blurone() 
{ 
    document.getElementById("help").innerHTML="" ;
}