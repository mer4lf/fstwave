///1///
// программа вернет ошибку, тк ref не функция и в данном случае его значение будет undefined

let calculator = {
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
};

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

