const students = [
  {
      id:10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
  },
  {
      id:11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
  },
  {
      id:12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
  },
  {
      id:13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
  }
]

function averageStudentMark(id) {
  let student = students.find(student => student.id === id);
  let {marks} = student;
  let averageMark = marks.reduce((total, mark) => total + mark) / marks.length;
  return averageMark;
}
console.log(averageStudentMark(10));

function averageGroupMark(students) {
  let groupMark = students.map(({marks}) => marks)
                          .flat();
  let average = groupMark.reduce((total, mark) => total + mark) / groupMark.length;
  return average;
}
console.log(averageGroupMark(students));