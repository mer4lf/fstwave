///1///
let a ={};
function A(){return a};
function B(){return a};
alert(new A() == new B())

///2///
function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

///3///
function Accumulator(startingValue){
    this.value = startingValue
    this.read = function (){
        this.value += +prompt('Ведите число')
    }
}