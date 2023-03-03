///1.1///
let user = {};
user.name = 'Jhon';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

///1.2///
function isEmpty(a){
    let cnt = 0;
    for(let i in a){
        cnt++;
    }
    return !cnt;
}

///1.3/// это будет ратотать, тк мы меняем не само значение переменной, а её свойство

///1.4///
function salary(a){
    let sum = 0
    for (let i in a){
        sum+=a[i];
    }
    return sum;
}


///1.5///
function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof(obj[key]) === 'number') obj[key] *= 2
    }
}