function getres() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
        var user=JSON.parse(this.responseText)
var row="" ;

      
      console.log("fff");
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
                        

                      </tr>`
            


        }
        document.getElementById("table").innerHTML=row;
        }
       }
    xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/tax/history/2", true);
  
  xhttp.send();

       
    
  };
  function del(pFrom) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        
        }
       }
    xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/tax/delate/"+pFrom.id.value, true);
  
  xhttp.send();
document.getElementById("response").innerHTML="deleted";
     return false;  
    
  };