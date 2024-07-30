module.exports = function toReadable (number) {
    const arr = number.toString().split('');;
    const smallNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    const hundreds = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',
    }

    if (number < 20) return smallNumbers[number]

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) return dozens[arr[0]]

        if (number % 10 !== 0) {
            return dozens[arr[0]] + ' ' + smallNumbers[arr[1]]
        }
    }

    if (number >= 100 && number < 1000) {
        const delRemain = number % 100
        if (delRemain >= 1 && delRemain <= 9) {
            return hundreds[arr[0]] + ' ' + smallNumbers[arr[2]]
        }

        if (delRemain >= 10 && delRemain <= 19) return hundreds[arr[0]] + ' ' + smallNumbers[arr[1] + arr[2]]

        if (number % 100 === 0) return hundreds[arr[0]]

        if (delRemain >= 20) {
            if (number % 10 === 0) {
                return hundreds[arr[0]] + ' ' + dozens[arr[1]]
            } else {
                return hundreds[arr[0]] + ' ' + dozens[arr[1]] + ' ' + smallNumbers[arr[2]]
            }
        }
    }
}




