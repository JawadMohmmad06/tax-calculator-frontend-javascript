function getres() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

      
      
        for (var i = 0; i < Object.keys(user).length; i++){
            row += `<tr>
                            
                            <td>${user[i].id}</td>
                            <td>${user[i].basic_salary}</td>
                            <td>${user[i].house_rent}</td>
                            <td>${user[i].medical}</td>
                            <td>${user[i].con}</td>
                            <td>${user[i].festival}</td>
                            <td>${user[i].investment}</td>
                            <td>${user[i].category}</td>
                            <td>${user[i].zone}</td>
                            <td>${user[i].taxble_income}</td>
                            <td>${user[i].total_tax}</td>
                            <td>${user[i].m_tax}</td>
                            <td>${user[i].user.username}</td>
                            <td>${user[i].user.id}</td>

                      </tr>`
            


        }
        document.getElementById("table").innerHTML=row;
        }
       }
    xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/admin/get", true);
  
  xhttp.send();

       
    
  };

 function deletee(pFrom) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       }
   }
   document.getElementById("response").innerHTML = "delete DOne";
    xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/admin/delate/"+document.getElementById("id").value, true);
  
  xhttp.send();

      return false; 
    
  };

 