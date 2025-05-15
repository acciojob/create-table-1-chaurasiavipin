function insert_Row() {
    //Write your code here
	 const table = document.getElementById("sampleTable");
let div = document.createElement("div");
	console.log("div 3"+ insert_Row)
      const rowCount = table.rows.length;
      const newRow = table.insert_Row();

      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);

      cell1.textContent = `Row${rowCount + 1} cell1`;
      cell2.textContent = `Row${rowCount + 1} cell2`;
  
  
}
