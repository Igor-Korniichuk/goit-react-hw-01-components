export default function randomColor() {
    return "#" + Math.random().toString(16).slice(2,8);
}