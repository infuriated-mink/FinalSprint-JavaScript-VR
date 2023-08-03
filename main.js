function fetchEmployeesData() {
    return fetch("employees.json")
      .then((response) => response.json())
      .then((data) => {
        const statistics = displayStatistics(data);
        displayEmployeeData(data);
        console.log("Total Employees:", statistics.totalEmployees);
        console.log("Average Salary:", "$" + statistics.averageSalary.toFixed(2));
        console.log("Employee with Highest Salary:", statistics.highestSalaryEmployee.name, "-", "$" + statistics.highestSalaryEmployee.salary);
        if (statistics.highestSalaryEmployee.salary > 50000) {
          console.log("Wow, that's a high salary!");
        }
        return data;
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  function displayEmployeeData(employees) {
    const container = document.getElementById("employee-container");
    let output = "<h2>Employee Directory</h2>";
  
    employees.forEach((employee, index) => {
      const startingAge = 22;
      const yearsOfExperience = employee.age - startingAge;
  
      output += `<p><strong>Employee ${index + 1}</strong><br>Name: ${employee.name}<br>Age: ${employee.age}<br>Position: ${employee.position}<br>Salary: $${employee.salary}<br>Manager: ${employee.isManager ? "Yes" : "No"}<br>Skills: ${employee.skills.join(", ")}<br>Address: ${employee.address.city}, ${employee.address.postalcode}<br>Years of Experience: ${yearsOfExperience}</p>`;
  
      console.log(`Employee ${index + 1}:`);
      console.log("Name:", employee.name);
      console.log("Age:", employee.age);
      console.log("Position:", employee.position);
      console.log("Salary:", "$" + employee.salary);
      console.log("Manager:", employee.isManager ? "Yes" : "No");
      console.log("Skills:", employee.skills.join(", "));
      console.log("Address:", employee.address.city + ", " + employee.address.postalcode);
      console.log("Years of Experience:", yearsOfExperience);
    
      printPositionMessage(employee.position);
  
      console.log("----------------------------------------");
    });
  
    container.innerHTML = output;
  }
  function printPositionMessage(position) {
    const lowercasePosition = position.toLowerCase();
    switch (lowercasePosition) {
      case "software engineer":
        console.log("Welcome, esteemed software engineer! You're the backbone of our tech team.");
        break;
      case "ui/ux designer":
        console.log("Hello, respected UI/UX designer! Your designs are crucial to our success.");
        break;
      case "project manager":
        console.log("Hey there, skilled project manager! Your organization keeps us on track.");
        break;
      case "frontend developer":
        console.log("Greetings, talented frontend developer! Your work enhances our user experience.");
        break;
      case "backend developer":
        console.log("Welcome, proficient backend developer! You ensure our systems run smoothly.");
        break;
      default:
        console.log("Welcome to our team! Your unique skills make a valuable contribution.");
    }
  }
  function displayStatistics(employees) {
    const totalEmployees = employees.length;
    const totalSalaries = employees.reduce((acc, employee) => acc + Number(employee.salary), 0); // Convert salary to number
    const averageSalary = totalSalaries / totalEmployees;
    const highestSalaryEmployee = employees.reduce((max, employee) => (Number(employee.salary) > Number(max.salary) ? employee : max)); // Convert salary to number
  
    const statsContainer = document.getElementById("statistics");
    statsContainer.innerHTML = `<h2>Statistics</h2>
      <p>Total Employees: ${totalEmployees}</p>
      <p>Average Salary: $${averageSalary.toFixed(2)}</p>
      <p>Employee with Highest Salary: ${highestSalaryEmployee.name} - $${highestSalaryEmployee.salary}</p>`;
  return {
      totalEmployees,
      averageSalary,
      highestSalaryEmployee,
    };
  }
  function displaySkillsIndividually() {
    fetch("employees.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Skills of each employee:");
        data.forEach((employee, index) => {
          console.log(`Employee ${index + 1}:`, employee.skills.join(", "));
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  fetchEmployeesData();
  