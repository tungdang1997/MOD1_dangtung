class Stop {
    name : string;
    age :number
    constructor(name:string,age :number) {
        this.name = name;
        this.age = age
    }
    getInfo(){
        return `Ten : ${this.name}, Tuoi : ${this.age}`
    }
}
// cú pháp kết nối với ts khác
export default Stop;