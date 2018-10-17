//input.js
function add(){
	var harkbun = document.getElementById('txtHakbun').value;
	var name = document.getElementById('txtName').value;
	var kor = document.getElementById('txtKor').value;
	var eng = document.getElementById('txtEng').value;
	var mat = document.getElementById('txtMat').value;
	var edp = document.getElementById('txtEdp').value;

	if(!harkbun || !name || !kor || !eng || !mat || !edp){
		alert("입력되지않은 값이 있습니다. 확인후 추가해주세요 ");
	}else{
		
		var student = new Student(harkbun, name, parseInt(kor),parseInt(eng),parseInt(mat),parseInt(edp));
		array.push(student);
		document.myform.reset();
		document.getElementById('btnCalc').disabled = false;
	}

	
}