const canvas_1 = document.getElementById("canvas-1");

const lienzo = canvas_1.getContext("2d");

function dibujar($start, $end) {
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo($start.x, $start.y);
    lienzo.lineTo($end.x, $end.y);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar_canvas_1() {
    var $start = {
        x: 0,
        y: 0
    }
    var $end = {
        x: 0,
        y: 500
    }
    const lineWidth = 10;
    const lines = 50;

    for (let i = 0; i < lines + 1; i++) {
        console.log($start, $end);
        dibujar($start, $end);
        $start.y = $start.y + lineWidth;
        $end.x = $end.x + lineWidth;

    }

}

dibujar_canvas_1();