function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function() {
    stroke(255);
    push();
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    pop();
  }

this.branchA = function(){
  let dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(PI/6);
  dir.mult(0.67);
  let newEnd = p5.Vector.add(this.end, dir);
  let b = new Branch(this.end, newEnd);
  return b;
  }
  this.branchB = function(){
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI/4);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
    }
    this.branchC = function(){
      let dir = p5.Vector.sub(this.end, this.begin);
      dir.rotate(PI/6);
      dir.mult(0.67);
      let newEnd = p5.Vector.add(this.end, dir);
      let b = new Branch(this.end, newEnd);
      return b;
      }
}
