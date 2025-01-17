const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    occupation: "developer",
    nationality: "American",
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University',
    }
};
const {firstName, gender, education:{degree}, language} = person;
const student = {
    firstName,
    gender,
    degree,
    english:language.includes('English') ? 'English' : 'Spanish',
}
console.log(student);