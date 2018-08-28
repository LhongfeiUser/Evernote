/*let params =[3,5];
function sum(x=1,y=2,z=3){
    return x+y+z;
}
console.log(sum(...params));
console.log(sum.apply(undefined,params));*/

/*function Book(title, pages, isbn) {
    this.title= title;
    this.pages=pages;
    this.isbn=isbn;
    Book.prototype.printTitle=function () {
        console.log(this.title);
    }
}
let book = new Book(3,1,2);
console.log(book);
book.printTitle();*/

/*
class Book {
    constructor(title,pages,isbn){
        this.title=title;
        this.pages=pages;
        this.isbn=isbn;
    }
    printIsbn(){
        console.log(this.isbn);
    }
}
let book = new Book(4,5,6);
book.printIsbn();
class ITbook extends  Book{
    constructor(title,pages,isbn,technology){
        super(title,pages,isbn);
        this.technology =technology;
    }
    printTechnology(){
        console.log(this.technology)
    }
}
let jsbook =new ITbook();
jsbook.printTechnology();
console.log(jsbook);*/

/*//求斐波那契数列
let fbl = [];
fbl[0] = 1;
fbl[1] =2;
for(let i = 2;i<19;i++){
    fbl[i] = fbl[i-1] + fbl[i-2];
    console.log(fbl[i]);
    fbl.push(fbl[i]);
}
console.log(fbl,fbl.length);*/

/*
let numbers = [0,1,2,3,4,5,6,7];
// numbers.push(11);
// numbers.push(11,12);
// console.log(numbers);
//
// for(let i=numbers.length;i>=0;i--){
//     numbers[i]=numbers[i-1];
// }
// numbers[0] = -1;
// console.log(numbers);
//
// numbers.unshift(-3,-8);
// console.log(numbers);

let del = numbers.splice(5,2);
console.log(del);//返回删除项
console.log(numbers);//原数组改变*/

//3*3*3矩阵/多维数组
/*let ary = [];
for(let x=0;x<3;x++){
    ary[x]=[];
    for(let y = 0;y<3;y++){
        ary[x][y]=[];
        for(let z=0;z<3;z++){
            ary[x][y][z]=x+y+z;
        }
    }
}
console.log(ary);*/

/*
//如果数组中的数可以被2整除返回true，否则返回false

let isEven = x => {
    console.log(x);
    let result = (x % 2 === 0);
    console.log(result + '.....还割');
    return result;
};
// console.log(isEven(3));
// 遍历数组的几种方法
let numbers = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
let first = numbers.every(isEven);
console.log(first + '......割');

let second = numbers.some(isEven);
console.log(second + '.......再割');

let third = numbers.forEach(isEven);//无返回值；

let four = numbers.map(isEven); //返回一个由函数返回值组成的新数组；
console.log(four + '........继续割');

let five = numbers.filter(isEven);//返回一个新数组，由使函数返回true的元素组成；
console.log(five + '.........最后割');

let six = numbers.reduce((previousValue, currentValue, currentIndex) => {
    console.log(currentIndex);
    return (previousValue + currentValue)
});
console.log(six);
*/

/*//es6及数组新功能
let numbers = [1,2,3,4,5,5,6,6,7,8,9];

// for...of
for(let n of numbers){
    // console.log(n);
    // console.log((n % 2 === 0 ? 'even' : 'odd'));
}
//@@iterator属性；
let val = numbers[Symbol.iterator]();
console.log(val.next().value); //1
console.log(val.next().value); //2
console.log(val.next().value); //3
                               //... 没有迭代值 时返回undefined

//entries方法；
let aEntries = numbers.entries();//得到键值对的迭代器；
console.log(aEntries.next().value);//[ 0, 1 ] 位置为0的值为1；
console.log(aEntries.next().value);//[ 1, 2 ] 位置为1的值为2；
console.log(aEntries.next().value);//[ 2, 3 ] 位置为2的值为3；
console.log(aEntries.next().value);//[ 3, 4 ] 位置为3的值为4；
                                   //...

//keys方法；
let aKeys = numbers.keys();//得到数组索引的迭代器；
console.log(aKeys.next());//{ value: 0, done: false }; 当done对象为false表示还有可迭代对象
console.log(aKeys.next());//{ value: 1, done: false };
console.log(aKeys.next());//{ value: 2, done: false };
console.log(aKeys.next());//{ value: 3, done: false };
                          //... 当done为true时表示没有可迭代的对象，返回undefined；

//Array.from方法 根据已有数组创建一个新数组
let numbers2 = Array.from(numbers); //复制数组
console.log(numbers2);

let evens =Array.from(numbers,x=>x%2===0); //过滤数组
console.log(evens);

//Array.of 方法创建新数组

let numbers3 = Array.of(1);
let numbers4 = Array.of(2,3,4,5);

let numbers5 =Array.of(...numbers4);//复制数组，相当于Array.from(numbers4)
console.log(numbers3, numbers4, numbers5);
console.log(...numbers4);

//Array.fill方法静态值填充数组 原数组改变
let numbersCopy = Array.of(1,23,4,5,6,7);

/!*let num1=numbersCopy.fill(0);//改变数组全部元素
console.log(num1);*!/

/!*let num2=numbersCopy.fill(9,3);//参数9，要改变成的值，参数3索引  从索引为3处的元素到数组末尾替换为9
console.log(num2);*!/

/!*let num3 =numbersCopy.fill(88,2,4);//从索引为2开始到索引为4的元素替换为88,不包含索引为4的元素
console.log(num3);*!/

/!*let ones = Array(6).fill(1);//创建一个6个元素都为1的数组;
console.log(ones);*!/

let copyArray = [1,2,3,4,5,6]; //原数组改变；
/!*let copys=copyArray.copyWithin(0,4);//将从索引4开始到数组末尾的元素在当前数组中从索引0处开始全部替换掉;
console.log(copys);*!/
let copys2 = copyArray.copyWithin(0,2,4);//将从索引2开始到索引为4处的元素在当前数组中从索引0处开始全部替换掉;
console.log(copys2);*/

//排序元素
// let ary = [1,2,3,4,5,6,7];
// let ary1 = ary.reverse();//将数组元素反向排列
// console.log(ary1);
// console.log(ary1.reverse());

// let ary2 = ary1.sort();
// let ary2 = ary1.sort((a,b)=>a-b);
// console.log(ary2);

/*let friends =[
    {name:'任一',age:'30',},
    {name:'任二',age:'35',},
    {name:'任三',age:'15',}
];
function comparePerson(a,b) {
    if(a.age<b.age){
        return -1;
    }
    if(a.age>b.age){
        return 1;
    }
    return 0
}
console.log(friends.sort(comparePerson));*/

// 搜索
// indexOf(返回与参数匹配的第一个元素的索引，没有匹配元素返回-1) lastIndexOf(返回与参数匹配的最后一个元素的索引，没有匹配到相应的元素返回-1);
// find和findIndex 方法接收一个回掉函数，find方法返回第一个满足函数条件的值，findIndex方法返回这个值在数组里的索引。如果没有满足条件，find返回undefined，findIndex返回-1;
// includes(x)方法 数组存在x元素返回true，否则返回false;
// includes(x,y) x要检测值，从索引y开始向后检索，索引y以前的元素不参与检索;

//输出数组为字符串  toString join 原数组不变

/*let numbers = [1,2,3,4,5,0,6,6];
let num1 = numbers.toString();
console.log(num1,typeof (num1),numbers);
let num2 = numbers.join('-');
console.log(num2,numbers);*/

/*

// 栈
/!*
let items = [];
function Stack() {
    this.push=function (ele) {
        items.push(ele);
    };
    this.pop=function (ele) {
        items.pop(ele);
    };
    this.peek=function () {
        return items[items.length-1]
    };
    this.isEmpty= function () {
        return items.length===0;
    };
    this.clear =function () {
        items = [];
    };
    this.size = function () {
        return items.length;
    };
    this.print =function () {
        console.log(items.toString())
    }
}

let stack =new Stack();
console.log(stack.isEmpty());
stack.push(4);
stack.push(8);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(7);
stack.push(9);
console.log(stack.size());
console.log(stack.print());
*!/

let a = (function () {
    let _items =Symbol();
    class Stack {
        constructor(){
            this[_items] = [];
        };
        push(ele) {
            this[_items].push(ele)
        }
        peek(){
            return this[_items][this[_items].length-1];
        }
        size(){
            return this[_items].length;
        }
        pop(ele){
            this[_items].pop(ele)
        }
    }
    return Stack
})();

let b =new a();
console.log(b.size());
b.push(10);
b.push(1);
b.push(10);
console.log(b);
console.log(b.size());
console.log(b.peek());
*/

/*
// 队列
let items =[];
function Queue() {
    this.enqueue = function (ele) { //向末尾添加项
        items.push(ele)
    };
    this.dequeue = function (ele) {//删除第一项
        return items.shift(ele);
    };
    this.front = function () {//查看队列头元素
        return items[0];
    };
    this.isEmpty = function () { //检查队列是否为空
        return items.length===0;
    };
    this.size =function () { //查看队列项长度
        return items.length;
    };
    this.print = function () {
        console.log(items.toString());
    }
}
let queue =new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();
*/

/*let Queue2 =(function () {
    const items = new WeakMap();
    class Queue8 {
        constructor(){
            items.set(this,[]);
        }
        enqueue(ele){
            console.log(this);
            let q = items.get(this);
            q.push(ele);
        }
        print(){
            let q =items.get(this);
            console.log(q);
        }
    }
    return Queue8;
})();

let f = new Queue2();
f.enqueue('hhh');
f.enqueue('hhs');
f.enqueue('hdfsf');
f.enqueue('hffffff');
f.print();*/

/*//优先队列
function PriorityQueue() {
    let items = [];
    function QueueElement(element, priority) {
       this.element = element;
       this.priority =priority;
    }
    this.enqueue=function (element, priority) {
        let queueElement = new QueueElement(element,priority);
        let added =false;
        for(let i=0;i<items.length;i++){
            if(queueElement.priority<items[i].priority){
                items.splice(i,0,queueElement);
                added=true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    };
    this.print = function () {
        for(let i=0;i<items.length;i++){
            console.log(`${items[i].element}-${items[i].priority}`);
        }
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('xiaoM',3);
priorityQueue.enqueue('xiaoL',2);
priorityQueue.enqueue('xiaoH',1);
priorityQueue.enqueue('xiaoJ',0);
priorityQueue.print();*/

/*
//循环队列 下面代码依赖306行封装的Queue类
function hotPotato(nameList, num) {
    let queue = new Queue();
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);//将名字全部放入队列中
    }
    console.log('dd:'+queue.dequeue());
    let eliminated = '';
    while (queue.size()>1){  //循环队列
        for(let i=0;i<num;i++){  //将队列开头的名字删除，并将其添加到末尾，当循环到给定数字num 不在将当前项添加末尾，表示被淘汰
            queue.enqueue(queue.dequeue())
        }
        eliminated =queue.dequeue(); //每轮中被淘汰者
        console.log(eliminated+'在击鼓传花游戏中被淘汰的')
        console.log(queue.size());
    }
    return queue.dequeue();
}
let names = ['1','3','5','s','6','90'];
let win = hotPotato(names,2);
console.log('win is :'+win);
*/

//链表
function linkedList() {
    let Node = function (element) {  //辅助类
        this.element = element;  //添加到列表的值
        this.next = null;   //指向列表中下一个节点项的指针
    };
    let length = 0;  //存储列表的数量的length属性
    let head = null; //存储第一个节点的引用

    this.append = function (element) { //像列表尾部添加一个新的项   1、列表为空，添加的是第一个元素；2、列表不为空，向其追加一个元素。
        let node = new Node(element),
            current;
        if (head === null) { //列表中的第一个节点
            head = node;
            console.log(head, '1');
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            console.log(current, '2');
            current.next = node;//找到最后一项，建立连接
            console.log(current.next, '3');
        }
        length++;//更新列表长度；
        console.log(length);
    };
    this.insert = function (position, element) { //像列表特定位置插入一个新的项

    };

    this.removeAt = function (position) { //从列表特定位置移除一项
        if (position > -1 && position < length) { //检查越界值
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function (element) { //从列表中移除一项

    };
    this.indexOf = function (element) { // 返回元素在列表中的索引。如果列表中没有该元素则返回-1；

    };
    this.isEmpty = function () { //如果链表中不包含任何元素，返回true,如果链表长度大于0则返回false。

    };
    this.size = function () { //返回链表包含元素个数。与数组length属性类似;

    };
    this.getHead = function () { //

    };
    this.toString = function () { //由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值

    };
    this.print = function () {

    };
}
let list = new linkedList();
list.append(5);
list.append(10);






















