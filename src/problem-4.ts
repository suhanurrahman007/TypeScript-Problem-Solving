{
    const reverseArray = <T>(array: T[]): T[] =>{

        const reverseArray: T[] = [];

        for (let i = array.length -1; i >= 0; i--) {
           reverseArray.push(array[i]);
        }

        return reverseArray;

        //or
        // return array.reverse()
    }

    const result1 = reverseArray(["apple", "banana", "cherry"])
    const result2 = reverseArray([10, 20, 30]);

    console.log(result1);
    console.log(result2);


}