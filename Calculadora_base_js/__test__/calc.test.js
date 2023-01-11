const { suma, resta, multiplicacion, division } = require("../calc")


test("test suma", () => {
    const result = suma(5, 5)
    expect(result).toBe(10)
})

test("test resta", () => {
    const result = resta(5, 5)
    expect(result).toBe(0)
})

test("test multiplicacion", () => {
    const result = multiplicacion(5, 5)
    expect(result).toBe(25)
})

test("test division", () => {
    const result = division(5, 5)
    expect(result).toBe(1)
})

test("test division con letra", () => {
    const result = division("H", 5)
    expect(result).toBe(0)
})