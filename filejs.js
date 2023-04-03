
function validasi() {
	var nama = document.getElementById("nama").value;
	var jumlah = parseInt(document.getElementById("jumlah").value);
	var inputs = "";
	for (var i = 0; i < jumlah; i++) {
		inputs += "<label>Pilihan "+(i+1)+":</label>";
		inputs += "<input type='text' id='pil"+i+"'><br>";
	}
	document.getElementById("input_pil").innerHTML = inputs;
	document.getElementById("tombol").innerHTML = '<button type="button" onclick="radioFunction()">Submit</button>';
}

function radioFunction(){
	var pilih = document.getElementById("input_pil");
	var masuk = pilih.getElementsByTagName("input");
	var radios = "";

	for (var i = 0; i < masuk.length; i++) {
		if (masuk[i].type == "text") {
			radios +=
			'<input type="radio" name="option" value="' + masuk[i].value +'">' + masuk[i].value + "<br>";
		}
	}
	var submit = '<input type="submit" value="Submit">';
	document.getElementById("tombol").innerHTML = submit;
	document.getElementById("hasil").innerHTML = radios;
}

document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();
	var result = document.getElementById("hasil");
	var selectedOption = document.querySelector('input[name="option"]:checked');

	if (selectedOption) {
		var pilihan = [];
		var pilihanInput = document.querySelectorAll('#input_pil input[type="text"]');
		for (var i = 0; i < pilihanInput.length; i++) {
			pilihan.push(pilihanInput[i].value);
		}
		result.textContent = "Halo, Nama Saya " + document.getElementById("nama").value + ", saya mempunyai sejumlah " + document.getElementById("jumlah").value + " pilihan yaitu " + pilihan.join(", ") + " dan saya memilih " + selectedOption.value + ".";
	} else {
		result.textContent = "Please select an option.";
	}
});