var expect = chai.expect;

describe("Comprobación CSV dobles comillas", function(){
   it("Debe poner los siguiente en un mismo cuadro", function(){
      var r = calculate('"Esto en una misma columna",23');
      expect(r[0]).to.equal('"Esto en una misma columna"');
   });
});
