var expect = chai.expect;

describe("Comprobación CSV dobles comillas", function(){
   it("Debe poner el texto en un mismo cuadro", function(){
      var r = calculate('"Esto en una misma columna"');
      expect(r[0].value[0]).to.equal('Esto en una misma columna');
   });
});
