function regg(pForm) {

const tosend=
  {
      firstname: pForm.firstname.value,
      lastname: pForm.lastname.value,
      email: pForm.email.value,
      phone: pForm.phone.value,
      address: pForm.adress.value,
      dob: pForm.dob.value,
      username: pForm.username.value,
      password: pForm.password.value,
      authorities: [{
        id:1
      } 
      ]

  }
      const js=JSON.stringify(tosend);
  
  const xhttp = new XMLHttpRequest();
   xhttp.onload = function() {
    document.getElementById("demo").innerHTML = "Registration DONe";
  };
  
  xhttp.open("POST", "http://localhost:8072/Midtask_war_exploded/tax/regis",true);
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  return false;

  };



