function insert_Row() {
    //Write your code here
	 const table = document.getElementById("sampleTable");
let tr = document.createElement("tr");
	let td=document.createElement("td");
	let tdd=document.createElement("td");
	
	
	
	
      const rowCount = table.rows.length;
      const newRow = table.insert_Row();

      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);

      cell1.textContent = `Row${rowCount + 1} cell1`;
      cell2.textContent = `Row${rowCount + 1} cell2`;
  
  
}
