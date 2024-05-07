{
    const findLargestNumber = (value: number[]): number =>{

        let largestNumber = value[0];

        for (let i = 0; i < value.length; i++) {
            if (largestNumber < value[i]) {
                 largestNumber = value[i];
            }
        }

        return largestNumber;

        //Or
        // return Math.max(...value);

    }

    const result = findLargestNumber([10, 5, 8, 20, 3])
    console.log(result);
}