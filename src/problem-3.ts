{
    const filterEvenNumbers = (value: number[]): number[] =>{

        let evenNumber: number[] = [];

        for (let i = 0; i < value.length; i++) {
           if (value[i] % 2 === 0) {
            evenNumber.push(value[i])
           }
        }

        return evenNumber;

        //Or
        // return value.filter(num => num % 2 === 0 )

    }

    const result = filterEvenNumbers([1, 2, 3, 4, 5, 6])
    console.log(result);
}