// Test away!
function foo() {
    return 'the foo'
}

const Car = require('./car')

describe('first test', () =>{
    test('sanity', () =>{
       // expect(5).toBe(6)
        expect(5).toBeTruthy()
    })
    test('object', ()=>{
        const o = { a: 1}
        const oo = { a: 1}
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('object 2 ', ()=>{
        expect({ a: 1}).toEqual({a:1})
    })
})

describe('second test', () => {
    test('foo returns foo', () =>{ 
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)
    })
})
describe('car test', ()=>{
    let prius
    beforeEach(() =>{
        prius = new Car('toyota', 'prius')
    })
    test('class test', ()=> {
        expect(Car). toBeDefined()
        expect(Car). toBeInstanceOf(Function)
    })
    test('has model & make', () => {
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        expect(prius).toEqual({ make: 'toyota', model: 'prius'})
    })


})