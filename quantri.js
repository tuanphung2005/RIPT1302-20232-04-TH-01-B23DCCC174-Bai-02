let students = [];

function addStudent(student) {
    students.push(student);
    updateTable();
}

function deleteStudent(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
        students.splice(index, 1);
        updateTable();
    }
}

function editStudent(index) {
    let student = students[index];


    let student_id = document.getElementById("edit_student_id");
    let name = document.getElementById("edit_name");
    let date = document.getElementById("edit_date");
    let address = document.getElementById("edit_address");
    let phone = document.getElementById("edit_phone");
    let email = document.getElementById("edit_email");
    let ach = document.getElementById("edit_ach");


    student_id.value = student.student_id;
    name.value = student.name;
    date.value = student.date;
    address.value = student.address;
    phone.value = student.phone;
    email.value = student.email;
    ach.value = student.ach;

    document.getElementById("editStudentForm").dataset.index = index;

    document.getElementById("editStudentForm").style.display = "block";
}

document.getElementById("editStudentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let index = this.dataset.index;

    let student_id = document.getElementById("edit_student_id").value;
    let name = document.getElementById("edit_name").value;
    let date = document.getElementById("edit_date").value;
    let address = document.getElementById("edit_address").value;
    let phone = document.getElementById("edit_phone").value;
    let email = document.getElementById("edit_email").value;
    let ach = document.getElementById("edit_ach").value;


    students[index] = {name: name, student_id: student_id, date: date, address: address, phone: phone, email: email, ach: ach};


    document.getElementById("editStudentForm").style.display = "none";

    updateTable();
});

 function updateTable() {
    let table = document.getElementById("studentTable");
    table.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>SDT</th>
            <th>Email</th>
            <th>Thành tích</th>
            <th>Actions</th>
        </tr>
        <tr>
            <form id="studentForm">
                <th>Tự động</th>
                <th><input type="text" id="student_id" placeholder="Mã sinh viên"></th>
                <th><input type="text" id="name" placeholder="Tên"></th>
                <th><input type="date" id="date" placeholder="Tuổi"></th>
                <th><input type="text" id="address" placeholder="Địa chỉ"></th>
                <th><input type="text" id="phone" placeholder="SDT"></th>
                <th><input type="email" id="email" placeholder="Email"></th>
                <th><input type="text" id="ach" placeholder="Thành tích"></th>
                <th><input type="submit" value="Thêm mới" onclick=newstu()></th>
            </form>
        </tr>
    `;
    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.student_id}</td>
                <td>${student.name}</td>
                <td>${student.date}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
                <td>${student.ach}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                    <button onclick="editStudent(${index})">Sửa</button>
                </td>
            </tr>
        `;

    });
}

function newstu() {
    let student_id = document.getElementById("student_id").value;
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let ach = document.getElementById("ach").value;
    let student = {name: name, student_id: student_id, date: date, address: address, phone: phone, email: email, ach: ach};
    addStudent(student);
}