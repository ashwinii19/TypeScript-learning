// // ----------------- interfaces --------------------------
// // Interfaces are similar to type aliases, except they only apply to object types.
interface Human{
    name: string;
}
interface Human{
    age: number;
}
const human: Human = {
    name: "Ashwini",
    age: 22
}

// // ------------------------------------------------------------
interface Rectangle {
    width: number,
    height: number
}
const recatangle: Rectangle = {
    width: 10,
    height: 20
}

interface ColoredRectangle extends Rectangle{
    color: string;
}
const coloredRectangle: ColoredRectangle = {
    color: "red",
    width: 10,
    height: 20
}