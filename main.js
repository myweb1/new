var objeto = []
var canvasxd
function setup() {
    mla = ml5.objectDetector("cocossd",
        () => { console.log("cargado listo para irme babay"); 
        mla.detect(gatogrisaseoconperroyplatoconfondosincopy, resultado )})
        gatogrisaseoconperroyplatoconfondosincopy.resize(400,200)
    canvasxd = createCanvas(400, 200)

}
function preload() {
    gatogrisaseoconperroyplatoconfondosincopy = loadImage("gatomalo.jpg")
}
function draw() {
    image(gatogrisaseoconperroyplatoconfondosincopy, 0, 0, 400, 200);
    for(i=0;i<objeto.length;i++){
        variablevarialosaelemental = objeto[i]
        popoporcentaje = round(variablevarialosaelemental.confidence*100)
        noFill()
        stroke("red")
        strokeWeight(5)
        rect(variablevarialosaelemental.x,variablevarialosaelemental.y,variablevarialosaelemental.width,variablevarialosaelemental.height)
        fill("blue")
        noStroke()
        textSize(12)
        text(variablevarialosaelemental.label+" "+popoporcentaje+"%",variablevarialosaelemental.x,variablevarialosaelemental.y)
    }
    

}
function resultado(error, parametro) {
    if (!error) {
        console.log(parametro)
        objeto = parametro
    }
}