const sum = (a,b)=> {
    if(!a || !b) throw new Error ('one of parametrs is not');
    return +a+ +b
};
describe("sum", ()=> {
    test("should return sum",()=> {
        const result = sum(4,5);

        expect(result).toBe(9)
    });

    test("should return sum when one of parameters parametr is sring",()=> {
        const result = sum(4,'5');

        expect(result).toBe(9)
    });

    test("should return error when one of parameters parametr is indefined",()=> {
        const result = sum(4, undefined);

        expert(()=>result ).toThrow()
       
    });
})