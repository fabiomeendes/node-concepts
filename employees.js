const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chinenes = e => e.pais === 'China';
const women = e => e.genero === 'F';
const lowerSalary = (emp, currentEmp) => (emp.salario < currentEmp.salario ? emp : currentEmp);

try {
  axios.get(url).then((res) => {
    const employees = res.data;

    const emp = employees.filter(chinenes).filter(women).reduce(lowerSalary);

    console.log(emp, 'emp');
  });
} catch (err) {
  throw new Error(err);
}
