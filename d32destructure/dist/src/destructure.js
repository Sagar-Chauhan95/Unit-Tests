/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
export function topSalary(salaries) {
    if (!salaries || Object.keys(salaries).length == 0) {
        return "none";
    }
    let maxSalary = 0;
    let maxSalaryName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxSalaryName = name;
        }
    }
    return maxSalaryName;
}
