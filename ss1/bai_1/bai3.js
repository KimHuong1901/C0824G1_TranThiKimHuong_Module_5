const student1 = {
    firstName: 'John',
        gender: 'male',
        degree: 'Bachelor',
        english: 'English'
}
const student2 = {
       name: 'John',
       gender: 'male',
       degree: 'Bachelor',
       english: 'English'
   }
const detail = (student) => {
    const {firstName = 'Quân', degree = 'NA'} = student;
    console.log('FirstName:', firstName,'\nDegree:', degree);
}
detail(student1);


