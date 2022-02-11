/**
 * Create object if whether year or month given or both
 * @param {number} year 
 * @param {number} month 
 * 
 */

export default function updateUrl(year, month) {
    if (year && month) {
        return {
            "year": year,
            "month": month,
        }
    }
    else if (year) {
        return {
            "year": year,
        }
    }
}