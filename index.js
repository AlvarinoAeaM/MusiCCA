let currentPage = 1;
const rowsPerPage = 10;

function displayTable(data, page) {
  const table = document.getElementById('data-table');
  table.innerHTML = ''; // Limpiar tabla
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = data.slice(start, end);

  // Renderizar filas de la tabla
  paginatedItems.forEach(item => {
    const row = table.insertRow();
    Object.values(item).forEach(text => {
      const cell = row.insertCell();
      cell.textContent = text;
    });
  });
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayTable(data, currentPage);
  }
}

function nextPage() {
  if (currentPage * rowsPerPage < data.length) {
    currentPage++;
    displayTable(data, currentPage);
  }
}
