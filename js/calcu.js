 function calcu(pFrom) {
  const tosend=
  {

      basic_salary: pFrom.basic_salary.value,
      house_rent: pFrom.house_rent.value,
      medical: pFrom.medical.value,
      con: pFrom.con.value,
      festival: pFrom.festival.value,
      investment: pFrom.investment.value,
      category: pFrom.category.value,
      zone: pFrom.zone.value,
      user:
      {
        id: 2
      }
      

  }
  const js=JSON.stringify(tosend);
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        var user=JSON.parse(this.responseText)
        document.getElementById("taxble_income").innerHTML = user.taxble_income;
      document.getElementById("total_tax").innerHTML = user.total_tax;
      document.getElementById("m_tax").innerHTML = user.m_tax

  }
}
  xhttp.open("POST", "http://localhost:8072/Midtask_war_exploded/tax/calcu");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);
  return false;
  
};
;
