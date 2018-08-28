//虚拟API类
class API {
    constructor() {
        this.user = {id: 1, name: 'test'};
        this.friends = [this.user, this.user, this.user];
        this.photo = 'not a real photo';
    }

    getUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.user), 200)
        })
    }

    getFriends(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.friends.slice()), 200)
        })
    }

    getPhoto() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.photo), 200)
        })
    }

    throwErr() {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('this is a bug')), 200)
        })
    }
}

/*
//传统方式
function callbackHell() {
    const api = new API();
    let user, friends;
    api.getUser().then(function (returnUser) {
        user = returnUser;
        api.getFriends(user.id).then(function (returnFriends) {
            friends = returnFriends;
            api.getPhoto(user.id).then(function (returnPhoto) {
                console.log('callbackHell', {user, friends, returnPhoto});
            })
        })
    })
}

callbackHell();

//箭头函数
function _callbackHell() {
    const api = new API();
    let user, friend;
    api.getUser()
        .then((returnUser) => {
            user = returnUser;
            console.log('---------------------',api.getFriends(user.id));
            return api.getFriends(user.id)})
        .then((returnFriends)=>{
            friend = returnFriends;
            return api.getPhoto()})
        .then((photo)=>{
            console.log('_callbackHell',{user,friend,photo})
        })
}
_callbackHell();

//async await
async function asyncAwaitCallback() {
    const api = new API();
    console.log('aaaaaaapi',api);
    const user = await api.getUser();
    const friend = await api.getFriends();
    const photo = await api.getPhoto();
    console.log('asyncAwaitCallback',{user,friend,photo} );
}
asyncAwaitCallback();
*/

//Loops 循环

/*
* 递归promise循环
* */
function promiseLoops() {
    const api = new API();
    api.getUser()
        .then((user) => {
            return api.getFriends(user.id)
        })
        .then((returnFriends) => {
            console.log('1111111111---------',returnFriends);
            const getReturnFriends = (friends) => {
                if (friends.length > 0) {
                    let friend = friends.pop();
                    console.log('3333333333--',friend,'00000----',friends);
                    return api.getFriends(friend.id)
                        .then((moreFriends) => {
                            console.log('promiseLoops', moreFriends);
                            return getReturnFriends(friends)
                        })
                }
            };
            return getReturnFriends(returnFriends)
        })
}
// promiseLoops();

/*
* async/await
* */
async function asyncAwait() {
    const api = new API();
    const user = await api.getUser();
    const friends = await api.getFriends(user.id);
    for (let friend of friends) {
        let moreFriends =await api.getFriends(friend.id);
        console.log('asyncAwait',moreFriends)
    }
}
// asyncAwait();

/*
* 并行操作
* */
async function asyncAwaitLoops() {
    const api = new API();
    const user = await api.getUser();
    const friends = await api.getFriends(user.id);
    const friendPromise = friends.map((friend)=>api.getFriends(friend.id));
    console.log('lllllhahahhahah',friendPromise);
    const moreFriend = await Promise.all(friendPromise);
    console.log(moreFriend);
}
asyncAwaitLoops();













