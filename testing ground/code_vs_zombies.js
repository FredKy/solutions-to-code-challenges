class Human {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  getId() {
    return this.id;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getPosition() {
    return [this.x, this.y];
  }
}

class Zombie {
  constructor(id, x, y, xNext, yNext) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.xNext = xNext;
    this.yNext = yNext;
  }
  getId() {
    return this.id;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getPosition() {
    return [this.x, this.y];
  }
  getNextPosition() {
    return [this.yNext, this.xNext];
  }
}
