// Sin usar DRY
const areaRectangulo1 = 3 * 4;
const areaRectangulo2 = 2 * 3;
const areaRectangulo3 = 1 * 7;
const areaRectangulo4 = 2 * 4;

// Con DRY
function calculaAreaRectangulo(ancho, alto) {
    return ancho * alto;
}

const areaRectangulo5 = calculaAreaRectangulo(3 , 4);
const areaRectangulo6 = calculaAreaRectangulo(2 , 3);
const areaRectangulo7 = calculaAreaRectangulo(1 , 7);
const areaRectangulo8 = calculaAreaRectangulo(2 , 4);