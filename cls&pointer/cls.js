class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

const cookieOne = new Cookie("red");
cookieOne.setColor("yellow");
console.log(cookieOne.color);
