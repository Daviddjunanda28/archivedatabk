let classArray = [];
let studentData = {};

function displayClassList() {
    const classListElement = document.getElementById("classNames");
    classListElement.innerHTML = "";
    classArray.forEach((className, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${className}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteClass('${className}')">Hapus</button>
                <button class="btn btn-primary" onclick="showStudentForm('${className}')">Tambah Siswa</button>
                <button class="btn btn-primary" onclick="displayStudentList('${className}')">Lihat Siswa</button>
            </td>
        `;
        classListElement.appendChild(row);
    });
}

function displayStudentList(className) {
    const studentListElement = document.getElementById("studentNames");
    studentListElement.innerHTML = "";
    const students = studentData[className] || [];
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.nis}</td>
            <td>${student.sick}</td>
            <td>${student.leave}</td>
            <td>${student.absent}</td>
            <td>${student.notes}</td>
        `;
        studentListElement.appendChild(row);
    });
}

// Function untuk menampilkan form tambah siswa dan menyimpan nama kelas saat ini
function showStudentForm(className) {
    document.getElementById("currentClass").innerText = className;
    document.getElementById("studentFormContainer").style.display = "block";
}

// Function untuk menambahkan kelas
document.getElementById("classForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const className = document.getElementById("className").value.trim();
    if (className && !classArray.includes(className)) {
        classArray.push(className);
        studentData[className] = [];
        displayClassList();
        document.getElementById("className").value = "";
    }
});

// Function untuk mencari kelas
document.getElementById("searchClassForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchClassName = document.getElementById("searchClassName").value.trim().toLowerCase();
    if (searchClassName) {
        const filteredClasses = classArray.filter(className => className.toLowerCase().includes(searchClassName));
        const classListElement = document.getElementById("classNames");
        classListElement.innerHTML = "";
        filteredClasses.forEach((className, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${className}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteClass('${className}')">Hapus</button>
                    <button class="btn btn-primary" onclick="showStudentForm('${className}')">Tambah Siswa</button>
                    <button class="btn btn-primary" onclick="displayStudentList('${className}')">Lihat Siswa</button>
                </td>
            `;
            classListElement.appendChild(row);
        });
    }
});

// Function untuk menambahkan siswa
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const className = document.getElementById("currentClass").innerText;
    const studentName = document.getElementById("studentName").value.trim();
    const studentNIS = document.getElementById("studentNIS").value.trim();
    const studentSick = parseInt(document.getElementById("studentSick").value) || 0;
    const studentLeave = parseInt(document.getElementById("studentLeave").value) || 0;
    const studentAbsent = parseInt(document.getElementById("studentAbsent").value) || 0;

    if (studentName && studentNIS) {
        const student = {
            name: studentName,
            nis: studentNIS,
            sick: studentSick,
            leave: studentLeave,
            absent: studentAbsent,
            notes: `S: ${studentSick}, I: ${studentLeave}, A: ${studentAbsent}`
        };
        studentData[className].push(student);
        displayStudentList(className);
        document.getElementById("studentForm").reset();
    }
});

// Function untuk menghapus kelas
function deleteClass(className) {
    classArray = classArray.filter(classItem => classItem !== className);
    delete studentData[className];
    displayClassList();
    document.getElementById("studentNames").innerHTML = "";
}

// Inisialisasi tampilan awal
displayClassList();
