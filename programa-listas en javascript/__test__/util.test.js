const { describe } = require('yargs');
const { generateText,createElement,validateInput } = require('../util.js');

// test o it
describe("Test generateText", ()=> {
    test("Test 1", () => {
        const result = generateText(null, null)
    
        expect(result).toBe("null (null years old)")
    
    })
    
    test("generatetext con valores", () => {
        const result = generateText("Leonardo", "39")
    
        expect(result).toBe("Leonardo (39 years old)")
    
    })
})


describe("Test createElement", ()=> {
    


})

