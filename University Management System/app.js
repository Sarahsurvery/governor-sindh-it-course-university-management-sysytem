class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Student extends Person {
    rollno;
    courses = [];
    constructor(name, age, rollno) {
        super(name, age);
        this.rollno = rollno;
    }
    registerforCourses(course) {
        this.courses.push(course);
    }
}
;
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assigncourses(course) {
        this.courses.push(course);
    }
}
;
class department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addcourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("sarah", 20, 123);
const std2 = new Student("faizan", 25, 5432);
const Instructor1 = new Instructor("hamzah", 20, 5000);
const Instructor2 = new Instructor("bilal", 25, 5000);
class course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addstudent(std) {
        this.students.push(std);
    }
    setInstructor(Instructor) {
        this.instructor.push(Instructor);
    }
}
const course1 = new course(1, "ArtificialIntelligence");
const course2 = new course(2, "Metaverse");
course1.addstudent(std1);
course1.addstudent(std2);
course2.addstudent(std1);
course1.setInstructor(Instructor1);
course2.setInstructor(Instructor2);
console.log(course1.students);
const d1 = new department("computer science");
d1.addcourse(course1);
console.log(d1.courses[0]);
export {};
