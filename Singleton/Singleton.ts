class MySingleton{
  static Myinstance: MySingleton;

  constructor() {}

  public static getInstance(): MySingleton{
    if (!MySingleton.Myinstance){
      MySingleton.Myinstance = new MySingleton();
    } return MySingleton.Myinstance;
  };
}
let ex1: MySingleton = MySingleton.getInstance();
let ex2: MySingleton = MySingleton.getInstance();
console.log(ex1);
console.log(ex2);
console.log(ex1 === ex2);

class Singleton{
  static instance: Singleton;
  id:number;

  constructor(id:number) {
    this.id = id;
    if (Singleton.instance){
      return Singleton.instance;
    }
    Singleton.instance = this;
  };
}
let example1 = new Singleton(1);
let example2 = new Singleton(2);
console.log(example1);
console.log(example2);
console.log(example1 === example2);