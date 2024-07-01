const character = "#"; /*Step 1 & 2 & 3 & 25 & 26 & 27*/
/*console.log(character); Step 4*/
/*character = "World"; Step 5*/
/*console.log(character); Step 6*/
/*let secondCharacter; Step 7*/
/*secondCharacter = character; Step 9 & 10*/
/*console.log(secondCharacter); Step 8*/
const count = 8; /*Step 12 & 26*/
/*console.log(count + 1); Step 13 & 14*/
const rows = [];/*Step 15 & 16 & 25 & 26*/
let inverted = false;/*Step 103*/
/*console.log(rows[0]); Step 17*/
/*rows[rows.length - 1] = 10; Step 18 & 19 & 20*/
/*rows.push("freeCodeCamp");Step 21*/
/*let pushed = rows.push();Step 23*/
/*console.log(pushed);Step 23*/
/*let popped = rows.pop();Step 22*/
/*console.log(popped); Step 22 */
/*console.log(rows); Step 18*/
/*function padRow(){
const test = "Testing";
return test; 
}Step 42 & 46 & 47 & 48 & 50 & 51 & 52 & 53 & 54 & 55*/
/*console.log(test); Step 52*/
/*const call = padRow(); Step 43 & 44 & 49 & 56*/
/*console.log(call);Step 45 & 56*/
function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}/*Step 57 & 58 & 59 & 61 & 62 & 63*/
//hallo /*Step 69*/
for (let i = 1; i <= count; i++){ /*Step 29 & 30 & 31 & 64 & 65 & 66 & 68*/
    if (inverted){/*Step 104*/
        rows.unshift(padRow(i, count));/*Step 102 & 105*/
    } else {/*Step 106*/
        rows.push(padRow(i, count));/*Step 107*/
    }
    
} /*Step 28 & 32 & 33 & 39 & 40 & 41 & 59 & 60 & 67 & 70 & 101*/
/*if (""){Step 72 & 73 & 74
    console.log("Condition is true");
} Step 71 */
/*let continueLoop = false; Step 75 & 84*/
/*let done = 0; Step 75 & 88*/ 
/*while (rows.length < count){Step 82 & 85 & 86 & 87
    done ++; Step 88
    rows.push(padRow(rows.length + 1, count));Step 81 & 87
    if (done === count){Step 79
    continueLoop = false; Step 80
    }Step 78 & 83
}Step 76 & 77 & 89*/
/*for (let i = count; i > 0; i--){ Step 91 & 92 & 94 & 95
    rows.push(padRow(i, count)); Step 93
} Step 90 & 96*/
/*const numbers = [1, 2, 3]; Step 97 
const shifted = numbers.shift(); Step 99
console.log(shifted); Step 99
const unshifted = numbers.unshift(5); Step 98
console.log(unshifted); Step 98
console.log(numbers); Step 97 & 100*/
let result = "";/*Step 34*/
for (const row of rows) {
    result = result + "\n" + row;
}/*Step 36 & 37 & 38*/
console.log(result);/*Step 35*/
