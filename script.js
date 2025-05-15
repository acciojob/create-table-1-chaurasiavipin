function insert_Row() {
	let myTal=document.getElementById("sampleTable");
	var row=myTal.insertRow(0);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
}