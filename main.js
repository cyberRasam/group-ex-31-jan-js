function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//academy exc
let students = [
  { name: 'Rasam' },
  { name: 'Roham' },
  { name: 'Rojina' },
  { name: 'Melina' },
  { name: 'Cna' },
];

function join(std) {
  return std.map((el) => (el.academy = 'Develhope'));
}

join(students);
console.log(students);

//exam exc

function exam(std) {
  return std.forEach((element) => {
    element.grade = getRandomNumber(1, 10);
  });
}

exam(students);
console.log(students);

//year exc

function year(std) {
  return std.forEach((el) => {
    el.year = getRandomNumber(1, 3);
  });
}

year(students);
console.log(students);

//graduate exc

function graduate(std) {
  return std.filter((el) => {
    return el.grade >= 6;
  });
}

console.log('Graduated stds');
console.log(graduate(students));

//Student levels exc

function levels(std) {
  let level = [];

  for (let i = 0; i < std.length; i++) {
    let stGrade = std[i].grade;
    if (stGrade <= 6) {
      level.push('Failed');
    } else if (stGrade < 8) {
      level.push('Average');
    } else if (stGrade >= 8) {
      level.push('Above Average');
    } else if (stGrade >= 9) {
      level.push('Great');
    }
  }

  return level;
}

let level = levels(students);
console.log(level);

//Failed students exc

function failedOnes(std) {
  return std.filter((el) => {
    return el.grade < 6;
  });
}
let fails = failedOnes(students);
console.log('Failed students:', fails);
