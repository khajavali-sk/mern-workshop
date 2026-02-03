class Person{
    name = ""
    age = ""
    ph_no = ""

    constructor(name, age, ph_no="")
    {
        this.name = name
        this.age = age
        this.ph_no = ph_no
    }

    getDetails() {
        return {
            name: this.name,
            ph_no: this.ph_no
        }
        
    }
}

//Inheritance

class Student extends Person{
    reg_no = ""
    constructor(name, age, ph_no, reg_no){
        super(name, age, ph_no)
        this.reg_no = reg_no
    }

    getDetails(){
        return {
            sname: this.name,
            age: this.age,
            ph_no: this.ph_no,
            reg_no: this.reg_no
        }
    }
}

// person1 = new Person("k",20)
// console.log(person1.getDetails())

// person2 = new Person("k2",20, 987654321)
// console.log(person2)

//student

student1 = new Student("k",20,987654321,"xyzreg_no")
console.log(student1)
student_details = student1.getDetails()
console.log(student_details)

