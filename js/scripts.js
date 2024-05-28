// Simpan daftar nama guru dalam array
let teacherArray = [];

// Function untuk menampilkan daftar nama guru
function displayTeacherList() {
  const teacherListElement = document.getElementById("teacherNames");
  teacherListElement.innerHTML = "";
  teacherArray.forEach((teacher, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. Nama: ${teacher.name}, NIP: ${
      teacher.nip
    }, Mata Pelajaran: ${teacher.subject}, Email: ${teacher.email}`;
    teacherListElement.appendChild(listItem);
  });
}

// Function untuk menambahkan guru ke dalam array dan menampilkan daftar nama guru
function addTeacher() {
  const teacherName = document.getElementById("teacherName").value;
  const teacherNIP = document.getElementById("teacherNIP").value;
  const teacherSubject = document.getElementById("teacherSubject").value;
  const teacherEmail = document.getElementById("teacherEmail").value;
  if (teacherName && teacherNIP && teacherSubject && teacherEmail) {
    teacherArray.push({
      name: teacherName,
      nip: teacherNIP,
      subject: teacherSubject,
      email: teacherEmail,
    });
    displayTeacherList();
    // Reset form setelah data ditambahkan
    document.getElementById("teacherForm").reset();
  } else {
    alert("Mohon isi semua kolom terlebih dahulu.");
  }
}

// Menambahkan event listener ke form untuk menangani klik tombol Simpan
document
  .getElementById("teacherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addTeacher();
  });
