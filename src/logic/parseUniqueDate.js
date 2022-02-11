/**
 * 
 * @param {string("month"/"*")} type 
 * @param {*} arr 
 * @returns Unique date numbers from all elements from the arr. Returns arr
 */

export const parseUniqueDate = (type, arr) =>
    arr.map(elem => type === "month"
        ? (new Date(elem.transactionDate)).getUTCMonth() + 1
        : (new Date(elem.transactionDate)).getFullYear()
    )
        .reduce((acc, elem) => {
            if (!acc.includes(elem)) {
                acc.push(elem);
            }
            return acc;
        }, [])
        .sort((a, b) => a - b);