export class Vector2 {
    constructor(public x: number, public y: number) {}
  
    add(otherVector2: Vector2) {
      return new Vector2(this.x + otherVector2.x, this.y + otherVector2.y);
    }
}

export default class Vector3 {
  constructor(public x: number, public y: number) {}

  add(otherVector3: Vector3) {
    return new Vector3(this.x + otherVector3.x, this.y + otherVector3.y);
  }
}