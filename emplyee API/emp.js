var getData = document.getElementById("getData");

function fetchData() {
    console.log("you clicked an employee data");
    var xhr = new XMLHttpRequest();

    xhr.open('Get', 'https://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onprogress = function () {
        console.log("on progress");
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            let divcontent = document.getElementById("display-content");
            let str = "";
            obj.data.forEach(employee => {
                str += `<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
                            <div><p><strong>Employee ID:</strong> ${employee.id}</p></div>
                            <div><p><strong>Employee Name:</strong> ${employee.employee_name}</p></div>
                            <div><p><strong>Employee Salary:</strong> ${employee.employee_salary}</p></div>
                            <div><p><strong>Employee Age:</strong> ${employee.employee_age}</p></div>
                        </div>`;
            });
            divcontent.innerHTML = str;
            divcontent.style.display = "block";

        } else {
            console.log("something error");
        }


    }
    xhr.send();

}
getData.addEventListener('click', fetchData);

