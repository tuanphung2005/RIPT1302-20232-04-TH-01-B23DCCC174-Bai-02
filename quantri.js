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
    let student_id = prompt("Nhập mã sinh viên mới", student.student_id);
    let name = prompt("Nhập tên mới", student.name);
    let date = prompt("Nhập tuổi mới", student.date);
    let address = prompt("Nhập địa chỉ mới", student.address);
    let phone = prompt("Nhập số điện thoại mới", student.phone);
    let email = prompt("Nhập email mới", student.email);
    let ach = prompt("Nhập lớp học mới", student.ach);
    students[index] = {name: name, student_id: student_id, date: date, address: address, phone: phone, email: email, ach: ach};
    updateTable();
}


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
                <th>Autofill</th>
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