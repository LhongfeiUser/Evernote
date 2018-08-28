// 一、内置类型：
// 7种内置类型：null , undefined , boolean , string , Number , symbol 六种基本数据类型和 object 一种对象数据类型（引用数据类型）
// 对象是引用数据类型，使用过程中会遇到 浅拷贝 和 深拷贝 问题；

/*
let a = {name:'EF'};
let b = a;
b.name = 'FE';
console.log(a.name); // FE
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 二、Typeof
//typeof对于基本类型，除了null都可以显示正确的类型   typeof null 为 object(这是一个存在很久的bug);

/*console.log(typeof 1);  // number;
console.log(typeof '1'); // string;
console.log(typeof c);  // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof true);  // boolean
console.log(typeof undefined); // undefined
*/

//typeof 对于对象除了函数都会显示object

/*console.log(typeof []);  // object
console.log(typeof {});  // objdect
console.log(console.log); // function
*/

//  ps:想获得一个变量的正确类型，可以通过object.prototype.toString.call(xx) 来实现

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 三、类型转换
// 转为boolean类型
// 除了null, undefined, false, NaN, '', 0, -0其它所有值都转为true，包括所有对象。


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 四、原型（看原型图）

// new 过程发生的四件事：
/*
1.新生成了一个对象；
2.链接到原型；
3.绑定this;
4.返回新对象；
*/

// 实现简单new 方法
/*function create() {
    //创建一个空的对象
    let obj = new Object();
    //获得构造函数
    let Con = [].shift.call(arguments);
    //链接到原型
    obj.__proto__ = Con.protoType;
    //绑定this，执行构造函数
    let result = Con.apply(obj, arguments);
    //确保new出来的是一个对象；
    return typeof result === 'object' ? result : obj;
}*/
// new 运算优先级 new Foo()优先级大于 new Foo
    /*function Foo() {
        return this;
    }
    Foo.getname = function () {
        console.log(1);
    };
    Foo.prototype.getname = function () {
        console.log(2)    ;
    };
    let a = new Foo.getname(); // 1   new (Foo.getname())
    let b = new Foo().getname(); // 2 (new Foo()).getname  通过原型链找到getname属性
*/

// 五、instanceof 判断对象类型
// instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

// 六、this
/*function foo() {
    console.log(this.a)
}
var a = 2;
foo(); //undefined

var obj = {
    a: 2,
    foo: foo
};
obj.foo();*/

// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
/*var c = new foo();
c.a = 3
console.log(c.a);*/
// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new

//箭头函数中没有this指向问题 它的this指向取决于外面第一个不是箭头函数的this；
/*function a() {
    return () => {
        return () => {
            console.log(this)
        }
    }
}
console.log(a()()())*/












