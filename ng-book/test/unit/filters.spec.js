describe("Unit Test", function (){

    beforeEach(function(){
        module("app.filter");
    });

    it("should capitalize all the As in a word",inject(["$filter", function($filter){

        var value = "chair";
        var result = "chAir";

        var value_capitalizea  = $filter("capitalizea")(value);
        expect(value_capitalizea).toBe(result);
    }]));

    it("should capitalize all the As in a sentence",inject(["$filter", function($filter){

        var value = "chair";
        var result = "chAir";

        var value_capitalizea  = $filter("capitalizea")(value);
        expect(value_capitalizea).toBe(result);
    }]));
});