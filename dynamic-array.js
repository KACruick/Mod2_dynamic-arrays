class DynamicArray {

  constructor(defaultSize=4) {
    
    this.length = 0
    this.capacity = defaultSize
    this.data = Array(this.capacity);

  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    //need to shift over every element in the array to the right
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.length++;
    this.data[0] = val;
  }

}


module.exports = DynamicArray;
