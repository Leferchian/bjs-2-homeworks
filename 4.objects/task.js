function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks.push (mark);
  }
  else {
    this.marks.push (mark);    
  }
  
}

Student.prototype.addMarks = function(...marks) {
  if (this.excluded === undefined) {
    this.marks.push(...marks);
  }
}
  
Student.prototype.getAverage = function() {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  } else {
      return this.marks.reduce((accum, current) => accum + current, 0) / this.marks.length;
  }    
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
// ваш код для остальных методов