const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED= 'rejected';

//promise 接收一个函数参数，该函数会立即执行
function MyPromise(fn) {
    let _this = this;
    console.log(_this);
    _this.currentState = PENDING;
}