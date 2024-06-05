/** Set up 
 * Install nodejs
 * Install typescript npm i typescript
 * Initialize Typescript tsc --init
 * Compile code to JS with same name file: tsc
 * node file_name_ts
 */

// let fname = "Dinomanh";
// fname = 10; // Chúng ta có thể gán lại giá trị
// cho fname là 10 type đổi từ string --> interge ==> KO AN TOÀN


// String
let lname : string;
lname = "Dinomanh";
let newname = lname.toUpperCase();
// console.log(newname);



//Number
let age: number;
age = 10;
//age = "10";//Error
age = 20; // OK
age = 20.34 // OK 

//parseInt(string)
age = parseInt("23");
// console.log(age);


//Boolean
let isValid: boolean = false; // default is false
//console.log(isValid) //undefined
// console.log(isValid); 

// Array
let emplist : string[]; // array of strings 
let deplist : Array<string> = []; // array of strings
emplist = ["Dinosaur", "HoangNoal","John Doe"];


let numerList: Array<number>;
numerList = [1,2,3,4,5,6,7,8,9,10];
let result = numerList.filter((number) => number > 2);
result = numerList.filter((number) => number > 5);
let employee = emplist.find((emp) => emp == "Dinosaur");
let sum = numerList.reduce((acc,num) => acc + num)
// console.log(result)
// console.log(employee);
// console.log(sum);

//Enum 
const enum Color{
    Red,
    Green,
    Blue
}

let c:Color = Color.Red;

// Tuple
let swapNumbs: [firstNumber: number,secondNumber: number];
function swapNumbers(num1: number,num2: number) : [number, number] {
    return [num2,num1];
}
swapNumbs = swapNumbers(10,20);
swapNumbs[1];

let department:any;
department = "IT";
department = 10;
// console.log(department);

// Function 
function add( num1: number,num2: number,num3?: number ,num4 = 10) : number{
    return num3 ? num1 + num2 + num3 + num4 : num1 + num2 + num4
}

const sub = (num1: number,num2: number): number => num1 - num2;


const mult = (num1: number,num2: number,...num3: number[]): number => {
    return num1 * num2 * num3.reduce((a,b) => a * b)
};
// console.log(add(2,3))
// console.log(sub(5,4))
let numbers = [1,2,3];
// console.log(mult(2,3,...numbers));
// console.log(mult(2,3,...[1,2,3]));
// console.log(mult(2,3,1,2,3));

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4]);
let concatString = getItems<string> (["a", "b", "c"]);


//Classes


interface Address{
    street: string;
    city: string;
    state: string;
    code?: string;
}

interface User{
    name: string;
    age?: number;
    id: number;
    email: string;
}

interface Employees extends User {
    salary: number;
}

interface Login {
    login(): User
}

class Employee implements Login {
    private id: number;

    protected name: string;

    public address: Address;
    
    get empId(): number {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }

    static getEmployeeCount(): number{
        return 50;
    }

    constructor(id:number,name:string,address:Address){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    login(): User {
       return {
        name: "John",
        id: 1,
        email: "john@gmail.com",
       }
    }

    getNameWithAddress() : string{
        return  `${this.name} stays at ${this.address}`;
    }


}

class Manager extends Employee{

    constructor(id:number,name:string,address:Address){
        super(id,name,address);
    }

    // getNameWithAddress(): string {
    //     return  `${this.name} is a manager at ${this.address}`;
    // }
}

// let john = new Employee(1,"John","Highway 7");
let john = new Employee(1,"John",{street:"ABC",city:"HN",state:"USA",code:"123"});

console.log("John info: ",john);


let {address,empId}:Employee = john;
console.log(address,empId);

console.log(john.getNameWithAddress());
console.log(john.empId);
john.empId = 100;
console.log(john.empId);
//john.id    // Lỗi chỉ sử dụng trong class
//john.name  // Lỗi chỉ sử dụng trong class hoặc class kế thừa(Manager)

let mike = new Manager(1,"Mike",{street:"ABC",city:"New York",state:"USA",code:"123"});
console.log("Mike info: ",mike);
console.log(mike.getNameWithAddress()); // sẽ gọi hàm getNameWithAddress() ở trong lớp Manager
// nếu không có sẽ gọi hàm trong lớp cha(Employee)
console.log(Employee.getEmployeeCount(),Manager.getEmployeeCount(),)



/** NOTE:
 *  Trong Angular dùng class để viết services để gọi API từ Back-end và display trên Front-end(Component)
 *  privat attributes: viết tắt #id chỉ sử dụng trong class 
 *  protected attributes: chỉ sử dụng bởi lớp kế thừa(lớp Manager ở trên) và gọi hàm super
 *  Static Method là phương thức mà chỉ truy cập với tên của class không thông qua đổi tượng 
 *  Lớp kế thừa cũng có thể gọi phương thức static của lớp cha
 *  Getter and Setter: dùng truy cập các private attribute hoặc method mà chỉ được truy cập bên trong class
 *  Trong JS không có Interfaces
 *  Decorators: sửa lại method hoặc thuộc tính trong thời gian chạy
 *  */


let [user1,user2,...restUsers]: User[] = 
[
    {name:"Dinomanh",email:"dinomanh@gmail.com", age: 13, id:1},
    {name:"Dinomanh2", email:"dinomanh2@gmail.com",age: 12,id:2},
    {name:"Dinomanh2", email:"dinomanh2@gmail.com",age: 12,id:6},
    {name:"Dinomanh2", email:"dinomanh2@gmail.com",age: 12,id:7},
    {name:"Dinomanh2", email:"dinomanh2@gmail.com",age: 12,id:9}
];
console.log(user1);
console.log(restUsers)

let results = restUsers.filter(user => user.id > 4)
console.log(results);

// @Component({

// })
// class Component {
//     fname: string 
//     constructor( fname: string){
//         this.fname = fname;
//     }
// }

