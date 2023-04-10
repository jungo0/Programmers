const fs = require('fs');
const [n,...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +n
const board = arr.map(v=>v.split(' ').map(v=>+v))


class Node{
  constructor(item){
    this.item = item;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item){
    const node = new Node(item)
    if(this.head===null){
      this.head= node;
      this.head.next = this.tail;
    }else{
      this.tail.next = node;
    }

    this.tail = node;
    this.length +=1;
  }

  pop(){
    const popItem = this.head;
    this.head = this.head.next;
    this.length -=1;
    return popItem.item;
  }

  size(){
    return this.length;
  }

  empty(){
    if(this.length==0){
      return 1;
    }else{
      return 0;
    }
  }

  front(){
    if(this.empty()==1) return -1;
    return this.head.item; 
  }

  back(){
    if(this.empty()==1) return -1;
    return this.tail.item; 
  }
}


let q=new Queue();
q.push([0,0,N]);
let answer= [0,0];
while(!q.empty()){
  let [y,x,size] = q.pop();
  let first = board[y][x];
  let same = true;

  for(let i = y; i<y+size; i++){
    for(let j = x; j<x+size; j++){
      if(board[i][j]!=first) {
        same =false;
        break;
      }
    }
    if(!same)break;
  }
  if(same){
    answer[first]++;
  }else{
    q.push([y,x,size/2])
    q.push([y+size/2,x,size/2])
    q.push([y,x+size/2,size/2])
    q.push([y+size/2,x+size/2,size/2])
  }
}

console.log(answer.join('\n'))