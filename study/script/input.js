function add(){
   var num = document.getElementById('txtNum').value;
   var name = document.getElementById('txtName').value;
   var gibon = document.getElementById('txtGibon').value;
   var nightsal = document.getElementById('txtNightsal').value;
   var famnum = document.getElementById('txtFam').value;


   if(!num || !name || !gibon || !nightsal || !famnum ){
      alert("값이 없는 항목이 있습니다. \n 확인 후 다시 입력해 주십시오 ");
   }else{
      var emp = new Emp(num, name, parseInt(gibon),parseInt(nightsal),parseInt(famnum));
      array.push(emp);
      document.myform.reset();
      document.getElementById('btnCalc').disabled = false;
   }
}