const { init, limpiar, resetear, resolver } = require("../funcionalidad.js")
const fs = require("fs");
document.body.innerHTML = fs.readFileSync("../calculadora.html");


describe("test funcion init", () => {

    test("numero uno", () => {
        document.getElementById("one").click()
        const result = document.getElementById('resultado').textContent

        expect(result).toBe("1")

    })





})