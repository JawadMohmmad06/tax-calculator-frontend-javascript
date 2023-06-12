function getusers() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

      
      
        for (var i = 0; i < Object.keys(user).length; i++){
            row += `<tr>
                            
                            <td>${user[i].id}</td>
                            <td>${user[i].firstname}</td>
                            <td>${user[i].lastname}</td>
                            <td>${user[i].email}</td>
                            <td>${user[i].phone}</td>
                            <td>${user[i].address}</td>
                            <td>${user[i].dob}</td>
                            <td>${user[i].username}</td>

                      </tr>`
            


        }
        document.getElementById("table").innerHTML=row;
        }
       }
    xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/admin/users", true);
  
  xhttp.send();

       
    
  };