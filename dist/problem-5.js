"use strict";
{
    const student1 = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90],
    };
    const calculateAverageGrade = (student) => {
        const totalGrade = student.grades.reduce((acc, grade) => acc + grade, 0);
        const averageGrade = totalGrade / student.grades.length;
        return averageGrade;
    };
    const averageGradeForBob = calculateAverageGrade(student1);
    console.log(averageGradeForBob);
}
