const getName = () => {
    return "Tofayel";
}
const getAge = () => {
    return 23;
}
// exports.message = () => {
//     return "How are you?";
// }
const cgpa = 3.72;

// Export manually

// exports.getName = getName;
// exports.getAge = getAge;
// exports.results = cgpa;


//Export together
module.exports = {
    getName,
    getAge,
    cgpa
}