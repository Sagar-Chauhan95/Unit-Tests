
export   { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues}

 function sumTo(num:number):number{
    if(num===1){
        return 1;
    }else{
        return num + sumTo(num-1);
    }

}


function factorial(n: number): number {
    if(n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
function fibonacci(n:number):number{
    if(n<=1){
        return n;
    }else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}


 type TreeNode= {value:number, next:TreeNode|null}
export type binaryTreeType = {value:number; left:binaryTreeType|null; right:binaryTreeType|null}


function outputList(list:TreeNode):string{
    if(list.next===null){
        return list.value +" printed to console";
    }else {
        return list.value +" "+ outputList(list.next);
    }
}

function outputListLoop(list:TreeNode):string{
    let arr=[];
    let node:TreeNode |null =list;
    while(node){
        arr.push(node.value);
        node = node.next;
    }
    let str ="";
    for(const element of arr){
        str+=element +" ";
    }
    return str + "printed to console"

}


function reverseList(list:TreeNode):string{
    if(list.next===null){
        return `${list.value}`
    }else{
        if(list.value !=1){
            let result = reverseList(list.next) + ' '+list.value;
            return result;
        }else{
            let result = reverseList(list.next)+ " "+ list.value + ' printed to console';
            return result;
        }
    }
}

function reverseListLoop(list:TreeNode):string{
    let arr =[];
    let node:TreeNode|null =list;
    while(node){
        arr.push(node.value);
        node = node.next;
    }
    let result = '';
    for(let i=arr.length-1;i>=0; i--){
        result+=arr[i]+ " ";
    }
    return result + "printed to console";
}


function sumTreeValues(list:binaryTreeType|any):number{
    let sum=0;
    if(list.right===null && list.left===null){
        return sum+=list.value;
    }else if(list.left!==null && list.right ===null){
        return sum+=list.value + sumTreeValues(list.left);

    }else if(list.left===null && list.right !==null){
        return sum+=list.value + sumTreeValues(list.right);
    }else{
        return sum+=list.value + sumTreeValues(list.left)+sumTreeValues(list.right);
    }

    }

   
       

