class Person{
    sname = ""
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
    #marks  = {
        maths: 90,
        sci: 80,
        bio: 98
    }

    constructor(name, age, ph_no, reg_no){
        super(name, age, ph_no)
        this.reg_no = reg_no
    }

    getDetails(){
        return {
          reg_no: this.reg_no
        }
    }

    getMarks(){
        return this.#marks
    }

    get stuName(){
        return this.name
    }

    set stuName(name){
        this.name = name
        console.log(`name updated to: ${this.name}`)
    }
    
}

// person1 = new Person("k",20)
// console.log(person1.getDetails())

// person2 = new Person("k2",20, 987654321)
// console.log(person2)

//student

const student1 = new Student("k",20,987654321,"xyzreg_no")
console.log({...student1})
console.log(student1.getDetails())
console.log(student1.getMarks());





// const {sname,ph_no} = student1.getDetails()
// console.log(sname, ph_no);
// console.log(...student1);
// console.log({...student1});
// console.log(student1.getMarks());
console.log(student1.stuName);
student1.stuName = "Khajavali"


