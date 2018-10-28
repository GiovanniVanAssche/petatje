 var users = { Name:["Ruben Libert","Giovanni Van Assche"],             
     Psw:["930108_07072018","940729_07072018"]}; 
 
 
 function check(form){  
           
     for (var i = 0; i < users.Name.length ; i++)  { 
         
       if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  { 
           
        sessionStorage.setItem("UserName",form.userid.value);                      
        sessionStorage.setItem("UserIndex",i);
           
        valid = true;
        
           break;  
      } 
      else{
        
       
        if ( users.Name.indexOf(form.userid.value) == -1) {
          alert("De gebruikersnaam klopt niet | Nom d'utilisateur pas correct");
          break;
        }
         if ((form.userid.value == users.Name[i]) && (form.pswrd.value !== users.Psw[i])){
           alert("Het opgegeven wachtwoord klopt niet | Mot de passe pas correct");          
           break;
           }
       }
    }   
       
    
    if (valid)   {    
      window.location.assign('index.html');    
      return false;   
    }           
}