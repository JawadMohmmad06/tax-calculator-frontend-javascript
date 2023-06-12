function update() {

      
  
  const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var user=JSON.parse(this.responseText);
    console.log(user.password);
     document.getElementById("username").value = user.username;
     document.getElementById("firstname").value = user.firstname;
    document.getElementById("lastname").value = user.lastname;
      document.getElementById("phone").value= user.phone;
document.getElementById("address").value = user.address;
     document.getElementById("email").value= user.email;
  }}
  
  xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/tax/profile/2", true);
  
  xhttp.send();

return false;
  }



  function profileupdate(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
        profileupdateppost(user);
        
        
           document.getElementById("response").innerHTML = "Update DOne";
        
    
    }
  };
xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/tax/profile/2", true);
  
  xhttp.send();

 
return false;
 };

function profileupdateppost(user) {

  const tosend=
  {
      id: 9,
      firstname:  document.getElementById("firstname").value,
      lastname:  document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value= user.phone,
      address: document.getElementById("address").value,
      dob: user.dob,
      username: document.getElementById("username").value,
      password: user.password,
      authorities: [{
        id:1
      } 
      ]

  }
  console.log("dd");
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
       
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8072/Midtask_war_exploded/tax/update");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  
};
  

