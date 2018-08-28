class Observer {
   constructor(data){
     this.observer(data)
   }
   observer(data){  //data:1=1
     //要对这个data数据原有属性改成get和set的形式
     if(!data || typeof data !== 'object'){
       return;
     }
     //要将数据一一劫持，先获取到data的key和value
     console.log(Object.keys(data));
     Object.keys(data).forEach(key=>{
       //劫持
       console.log(data,'----', key,'----', data[key]);
       this.difineReactive(data,key,data[key]);
       this.observer(data[key]);//深度递归劫持;
     })
   }
   //定义响应式
   difineReactive(obj,key,value){
     let that =this;
     Object.defineProperty(obj,key,{
       enumerable:true,//可枚举
       configurable:true,//可删除
       get(){ //当取值时调用的方法   可以进行一些操作
         return value;
       },
       set(newValue){//当给data属性中设置值的时候 更改获取的属性值  可以进行一些操作
         if(newVlalue!==value){
           that.observer(newValue);//如果是对象继续进行劫持
           value = newValue;
         }
       }
     })

   }
}
