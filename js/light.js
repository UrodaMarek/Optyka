export function startShine(x, y, canvasContext) {
    canvasContext.beginPath();
    let move = 1;
    for (let i = 0;i <= 500; i++) {
        x += move;
        canvasContext.arc(x, y, 1, 0, Math.PI * 2, false);
    }
    canvasContext.strokeStyle = "#ffffff";
    canvasContext.stroke();
}