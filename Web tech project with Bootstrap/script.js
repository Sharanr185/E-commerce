/* const forms=document.querySelector(".forms"),
   pwShowHide=document.querySelectorAll(".eye-icon"),
    links=document.querySelectorAll(".link");

 pwShowHide.forEach(eyeicon =>{
     eyeicon.addEventListener("click",()=>{
         let pwFields=eyeicon.parentElement.querySelectorAll(".password");
        
         pwFields.forEach(password =>{
             if(password.type=="password")
             {
                 password.type="text";
                 eyeicon.classList.replace("bx-hide","bx-show");
                 return;
             }
             password.type="text";
             eyeicon.classList.replace("bx-hide","bx-show")

        })
     })
 })
 links.forEach(link=> {
     link.addEventListener("click",e=>{
         e.preventDefault();
         forms.classList.toggle("show-signup");
     })
 })*/