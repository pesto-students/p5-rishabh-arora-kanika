function createStack() {
  const items = [];
  return {
    push(item) { //pushing stack item

      items.push(item);
    },


    pop() {
      return items.pop();
    }

  };
}


const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);

