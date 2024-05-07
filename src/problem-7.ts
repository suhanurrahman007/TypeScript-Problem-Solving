{
    const logString = (params: unknown): void =>{
        
        if (typeof params === "string") {
            console.log(params);
        } else {
            console.log("Input is not a string.");
        }
    }

    logString("Hello, TypeScript!");
    logString(42);


}