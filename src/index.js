module.exports = function toReadable (num) {
    let tens;
    let ones;
    let hundreds;

    let strNum = String(num);

    if (strNum.length === 2){
        tens = strNum[0];
        ones = strNum[1];
    }

    if (strNum.length === 3){
        hundreds = strNum[0];
        tens = strNum[1];
        ones = strNum[2];
    }

    const arr_1_9 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten"
    ]

    const arr_10_19 = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]

    const arr_10_90 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred"
    ]
        if (num <= 10){
            return arr_1_9[num];
        }
        
        if (num < 20 && num > 10){
            return arr_10_19[num - 11];
        }

        if (num > 19 && num < 100){
            if (ones === "0"){
                return arr_10_90[Number(tens - 2)];
            }

            return arr_10_90[Number(tens - 2)] + " " + arr_1_9[ones];
        }

        if (num >= 100 && num <= 999){
            if (ones == "0" && tens == "0"){
                return arr_1_9[hundreds] + " " + arr_10_90[8];
            }
            if (ones == "0" && tens != "0"){
                if (tens === '1'){
                    return arr_1_9[hundreds] + " " + arr_10_90[8] + " " + "ten";
                }
                return arr_1_9[hundreds] + " " + arr_10_90[8] + " " + arr_10_90[tens - 2];
            }
            if (ones != "0" && tens != "0" && tens != '1'){
                return arr_1_9[hundreds] + " " + arr_10_90[8] + " " + arr_10_90[tens - 2] + " " + arr_1_9[ones];
            }
            if (ones != "0" && tens != "0" && tens === '1'){
                return arr_1_9[hundreds] + " " + arr_10_90[8] + " " + arr_10_19[ones - 1];
            }
            if (ones !== "0" && tens === "0"){
                return arr_1_9[hundreds] + " " + arr_10_90[8] + " " + arr_1_9[ones];
            }
        }

        else{
            return "Введи норм число!";
        }

}
