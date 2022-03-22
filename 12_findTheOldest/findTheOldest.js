const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const oldestAge = determineAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const personAge = determineAge(person.yearOfBirth, person.yearOfDeath);
    return oldestAge < personAge ? person : oldest;
  })
}

const determineAge = (yearOfBirth, yearOfDeath) => {
  if(!yearOfDeath){
    yearOfDeath = new Date().getFullYear();
  }

  return yearOfDeath - yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
