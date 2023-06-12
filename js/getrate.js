function getrate() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;


document.getElementById("genaral1stSlab").value=user.genaral1stSlab;
document.getElementById("femalgenaral1stSlab").value=user.femalgenaral1stSlab;
document.getElementById("disa1stSlab").value=user.disa1stSlab;
document.getElementById("ff1stSlab").value=user.ff1stSlab;
document.getElementById("firstSlab").value=user.firstSlab;
document.getElementById("sslab").value=user.sslab;
document.getElementById("tslab").value=user.tslab;
document.getElementById("fslab").value=user.fslab;
document.getElementById("restslab").value=user.restslab;
document.getElementById("firstSlabRate").value=user.firstSlabRate;
document.getElementById("secSLabRate").value=user.secSLabRate;
document.getElementById("thSlabRate").value=user.thSlabRate;
document.getElementById("fSlabRate").value=user.fSlabRate;
document.getElementById("reSlabRate").value=user.reSlabRate;
document.getElementById("tax_year").value=user.tax_year;













       console.log(Object.keys(user).length)
      
        for (var i = 0; i < Object.keys(user).length/9; i++){
            row += `<tr>
                            
                            <td>${user.genaral1stSlab}</td>
                            <td>${user.femalgenaral1stSlab}</td>
                            <td>${user.disa1stSlab}</td>
                            <td>${user.ff1stSlab}</td>
                            <td>${user.firstSlab}</td>
                            <td>${user.sslab}</td>
                            <td>${user.tslab}</td>
                            <td>${user.fslab}</td>
                            <td>${user.restslab}</td>
                            <td>${user.firstSlabRate}</td>
                            <td>${user.secSLabRate}</td>
                            <td>${user.thSlabRate}</td>
                            <td>${user.fSlabRate}</td>
                            <td>${user.reSlabRate}</td>
                            <td>${user.tax_year}</td>
                      </tr>`
            


        }
        document.getElementById("table").innerHTML=row;
        }
       }
    xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/admin/getrate", true);
  
  xhttp.send();

       
    
  };

   function update(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
        profileupdateppost(user);
        
        
           document.getElementById("response").innerHTML = "Update DOne";
        
    
    }
  };
xhttp.open("GET", "http://localhost:8072/Midtask_war_exploded/admin/getrate", true);
  
  xhttp.send();

 
return false;
 };

function profileupdateppost(user) {

  const tosend=
  {

      id: user.id,
      genaral1stSlab: document.getElementById("genaral1stSlab").value,
      femalgenaral1stSlab: document.getElementById("femalgenaral1stSlab").value,
      disa1stSlab: document.getElementById("ff1stSlab").value,
      ff1stSlab: document.getElementById("ff1stSlab").value,
      firstSlab: document.getElementById("firstSlab").value,
      sslab:document.getElementById("sslab").value,
      tslab: document.getElementById("tslab").value,
      fslab: document.getElementById("fslab").value,
      restslab: document.getElementById("restslab").value,
      firstSlabRate: document.getElementById("firstSlabRate").value,
      secSLabRate: document.getElementById("secSLabRate").value,
      thSlabRate: document.getElementById("thSlabRate").value,
      fSlabRate: document.getElementById("fSlabRate").value,
      reSlabRate: document.getElementById("reSlabRate").value,
      tax_year: document.getElementById("tax_year").value

      
      

  }
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
       
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8072/Midtask_war_exploded/admin/updatet");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  
};
