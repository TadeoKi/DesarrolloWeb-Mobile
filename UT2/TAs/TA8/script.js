var actual = 0;
var masviejo = 0;
function findTheOldest(people){
    
    for (let i=0; i<people.length;i++){
        actual = people[i].yearOfDeath - people[i].yearOfBirth;
        if (actual > masviejo){
            masviejo = actual;
        }
    }
    console.log(masviejo);
}
/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

findTheOldest(people);
*/