export default function numberFormater(number) {
    const subNum = isFinite(number) ? number : +number;
    const result = subNum.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return isFinite(subNum) ? result : 0;
}