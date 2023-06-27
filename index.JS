const table = document.getElementById("multiplication-table");
for (let a = 1; a <= 10; a++) {
  const row = document.createElement("tr");

  for (let b = 1; b <= 10; b++) {
    const cell = document.createElement("td");
    cell.textContent = a * b;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
