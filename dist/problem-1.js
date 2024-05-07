"use strict";
{
    const repeatString = (str, numOfTimes) => {
        let value = "";
        for (let i = 0; i < numOfTimes; i++) {
            value = value + str;
        }
        return value;
    };
    const result = repeatString("Hello!", 3);
    console.log(result);
}
