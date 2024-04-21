const tableform = document.getElementById("form");
tableform.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const fname = document.getElementById("first-name").value;
    const lname = document.getElementById("last-name").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const tablecontent = document.getElementById("table-content");

    const tableheading = document.createElement("h5");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headtr = document.createElement("tr");
    const headth = document.createElement("th");
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");
    const tr4 = document.createElement("tr");
    const tr5 = document.createElement("tr");
    const tr6 = document.createElement("tr");
    const tr7 = document.createElement("tr");
    const tr8 = document.createElement("tr");

    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    const th6 = document.createElement("th");
    const th7 = document.createElement("th");
    const th8 = document.createElement("th");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");

    tableheading.innerText="Form Input Values are Submited in table";  

    th1.innerHTML="First Name :";
    th2.innerHTML="Last Name :";
    th3.innerHTML="Address :";
    th4.innerHTML="Pincode :";
    th5.innerHTML="Gender :";
    th6.innerHTML="Foods :";
    th7.innerHTML="State :";
    th8.innerHTML="Country :";

    if(document.getElementById("male").checked==true){
      var gender = "Male";
    }
    else if(document.getElementById("female").checked==true){
      gender = "Female";
    }
    else{
      gender = "";
    }
      
    var food = document.getElementsByName("food");
    var foodres = "";
    for(var i=0;i<food.length;i++){
      if(food[i].checked){
        foodres += food[i].value + " ";
      }
    }   
    var foodresult = foodres.split(" ");
    if(foodresult.length<3){
      const error = document.getElementById("error")
      error.innerHTML="Choose minimum 2 foods";
    }
    else{
      error.innerHTML="";
    
      td1.innerText=fname;
      td2.innerText=lname;
      td3.innerText=address;
      td4.innerText=pincode;
      td5.innerText=gender;
      td6.innerText=foodresult;
      td7.innerText=state;
      td8.innerText=country;
      
      tbody.appendChild(tr1)
      tr1.append(th1,td1)

      tbody.appendChild(tr2)
      tr2.append(th2,td2)

      tbody.appendChild(tr3)
      tr3.append(th3,td3)

      tbody.appendChild(tr4)
      tr4.append(th4,td4)

      tbody.appendChild(tr5)
      tr5.append(th5,td5)

      tbody.appendChild(tr6)
      tr6.append(th6,td6)

      tbody.appendChild(tr7)
      tr7.append(th7,td7)

      tbody.appendChild(tr8)
      tr8.append(th8,td8)

      headtr.appendChild(headth)
      thead.appendChild(headtr)
      table.append(thead,tbody)
      tablecontent.append(tableheading,table)

      tbody.classList.add("border","border-2");
      table.classList.add("table");

      tableform.reset();
   
    }
})