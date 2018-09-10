/*let twoSum = function(nums, target) {
    let result = [];
    for(let i =0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            let a = num[i]s+nums[j];
            if(Number(a)=== target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result
};
let arr = [1,2,3,6,5];
console.log(twoSum(arr, 5));*/
/*

let reverse = function (x) {
    let b;
    let arr = x.toString().split('');
    arr.reverse();
    if (arr[0] === 0 || arr[0] ==='-') {
        arr.shift();
        b = arr.join('').toString();
    }

    return Number(b)
};
console.log(reverse(70));*/
let threeSum = function (nums) {
    let result = [];
    if(nums.length<3)return result;
    let fn = (i,nums)=>{
        let arr;
        count = i+2;
        if(count<nums.length){
            let num = nums[i] + nums[i+1] + nums[count];
            console.log(num,'dddddddddddddddd');
            if(num === 0){
                arr = Array(nums[i],nums[i+1],nums[count])
           }else {
                arr = []
            }
        }else {
            count++;
        }
        return arr
    };
    for (let j =0;j<nums.length;j++){
        result.push(fn(j,nums))
    }
    return result;
};

let a = [-10, 0, 1, 2, -1, -4];
console.log(threeSum(a));