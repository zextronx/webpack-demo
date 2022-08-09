type delimiter = '*' | '@'

export const parseString = (str: string, delimiter: delimiter) => {
    return `${delimiter}${delimiter}${delimiter}${str}`;
}