document
  .getElementById("teacherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("teacherName").value;
    const nip = document.getElementById("teacherNIP").value;
    const subject = document.getElementById("teacherSubject").value;
    const email = document.getElementById("teacherEmail").value;

    fetch("save_teacher.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${name}&nip=${nip}&subject=${subject}&email=${email}`,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        fetchTeachers();
      });
  });

function fetchTeachers() {
  fetch("fetch_teacher.php")
    .then((response) => response.json())
    .then((data) => {
      const teacherNamesElement = document.getElementById("teacherNames");
      teacherNamesElement.innerHTML = "";
      data.forEach((teacher, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${teacher.name}</td>
                    <td>${teacher.nip}</td>
                    <td>${teacher.subject}</td>
                    <td>${teacher.email}</td>
                `;
        teacherNamesElement.appendChild(row);
      });
    });
}

fetchTeachers();
