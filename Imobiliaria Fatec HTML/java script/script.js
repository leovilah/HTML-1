document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const registrosTable = document.getElementById("registrosTable");
  
    registroForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert('O Contrato já esta pronto ✔')
  
      const Nome = document.getElementById("Nome").value
      const telefone = document.getElementById("telefone").value
      const data = document.getElementById("data").value;
      const numero = document.getElementById("numero").value;
      const checkbox = document.getElementById("checkbox").checked;
      const radio = document.getElementById("radio").checked;
      const texto = document.getElementById("texto").value;
  
      const newRow = registrosTable.insertRow();
      newRow.innerHTML = `
              <td>${Nome}</td>
              <td>${telefone}</td>
              <td>${data}</td>
              <td>${numero}</td>
              <td>${checkbox ? "Sim" : "Não"}</td>
              <td>${radio ? "Sim" : "Não"}</td>
              <td>${texto}</td>
          `;
    });
  
    const limparButton = document.getElementById("limpar");
    limparButton.addEventListener("click", function () {
      registroForm.reset();
    });
  });