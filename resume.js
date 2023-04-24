// add more education field
function addNewWEFeild(){
     let newNode = document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('weField');
     newNode.classList.add('mt-3');
     newNode.setAttribute('rows',3);
     newNode.setAttribute('placeholder','Enter More About Your Work Experience');
     let weOb = document.getElementById('we');
     let weAddButtonOb = document.getElementById('weAddButton');
     weOb.insertBefore(newNode,weAddButtonOb);

}
// add more aqdemic field
function addNewAQFeild(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter More About Your Aqdemic Qulification');
     
    let aqOb = document.getElementById('aq');
    let aqAddButtonOb = document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function generatCV(){
    // for name
    document.getElementById('nameT').innerHTML= document.getElementById('NameField').value;
    document.getElementById('name2T').innerHTML = document.getElementById('NameField').value;
//  for Professsion
     document.getElementById('professionT').innerHTML = document.getElementById('ProfessionField').value;
    //  for addres
    document.getElementById('addressT').innerHTML = document.getElementById('AddressField').value;
    // addressT.innerHTML = AdressField.value;
       //  for contact
    document.getElementById('contactT').innerHTML = document.getElementById('ContactField').value;
    //  for extra information
    document.getElementById('extraT').innerHTML = document.getElementById('ExtraField').value;
      //  for Objective
      document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;
         //  for Work Experience

      let wes = document.getElementsByClassName("weField");
      let str="";
      for(let e of wes){
        str=str +`<li> ${e.value} </li>`;
      
      }
      document.getElementById("weT").innerHTML = str;
      // for ademic quilfication
      let aqs = document.getElementsByClassName("aqField");
      let str2="";
      for(let e of aqs){
        str2=str2 +`<li> ${e.value} </li>`;
       
      }
      document.getElementById("aqT").innerHTML = str2;
    // for img
    let file = document.getElementById('imgField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend= function(){
        document.getElementById('imgT').src = reader.result;
    }
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}
// for print btn
function printCV(){
    window.print();
}
