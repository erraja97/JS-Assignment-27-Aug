/*Question 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement. */

    let r1 = 4 > 3 ? true : false;
    console.log("Result 1: " + r1);

    let r2 = 4 >= 3 ? true : false;
    console.log("Result 2: " + r2);

    let r3 = 4 < 3 ? true : false;
    console.log("Result 3: " + r3);

    let r4 = 4 <= 3 ? true : false;
    console.log("Result 4: " + r4);

    let r5 = 4 == 4 ? true : false;
    console.log("Result 5: " + r5);

    let r6 = 4 === 4 ? true : false;
    console.log("Result 6: " + r6);

    let r7 = 4 != 4 ? true : false;
    console.log("Result 7: " + r7);

    let r8 = 4 !== 4 ? true : false;
    console.log("Result 8: " + r8);

    let r9 = 4 != '4' ? true : false;
    console.log("Result 9: " + r9);

    let r10 = 4 == '4' ? true : false;
    console.log("Result 10: " + r10);

    let r11 = 4 === '4' ? true : false;
    console.log("Result 11: " + r11);

    let s1 = "Python";
    let s2 = "jargon";

    if(s1.length == s2.length){
        console.log(`length of ${s1} and ${s2} are equal`);
    }
    else{
        console.log(`length of ${s1} and ${s2} are not equal`);
    }


