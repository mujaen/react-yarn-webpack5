const person = (name: string, age: number) => {
    return {
        name,
        age
    }
};

const range = (start: number ,end: number) => {
    let result: number[] = [];
    for(let i = start; i <= end; i++) {
        result.push(i);
    };
    return result;
}

const isToBeNull = () => {
    return null;
}

const initServer = ({}): number => {
    return 2;
}

export {person, range, isToBeNull};