
import { Vector2 } from "./zad4_export";
import Vector3 from "./zad4_export"; //roznica przy imporcie(zapis klamrowy)
//eksport domyślny jest używany, gdy chcesz eksportować pojedynczy element,
// a eksport nazwany jest używany, gdy chcesz eksportować wiele elementów 
//z jednego pliku 
const vec2a = new Vector2(1, 2);
const vec2b = new Vector2(2, 1);

console.log(vec2a.add(vec2b));

const vec3a = new Vector3(2, 2);
const vec3b = new Vector3(2, 1);

console.log(vec3a.add(vec3b));