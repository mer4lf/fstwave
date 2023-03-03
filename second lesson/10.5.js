"use strict"

let result = prompt('Ведите число большее 100')
while(result !== null && +result <= 100){
    result = prompt('Ведите число большее 100')
}