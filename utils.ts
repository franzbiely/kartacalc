export const romanToArabic = (roman: string) => {
    const romanNumerals: any = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let arabic = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];
        const nextValue = romanNumerals[roman[i + 1]];

        if (nextValue && currentValue < nextValue) {
            arabic -= currentValue;
        } else {
            arabic += currentValue;
        }
    }

    return arabic;
}

export const arabicToRoman = (arabic: number) => {
    if (arabic < 1 || arabic > 3999) {
        return "Invalid input. Roman numerals are only defined for values between 1 and 3999.";
    }

    const romanNumerals: any = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let roman = "";

    for (const key in romanNumerals) {
        while (arabic >= romanNumerals[key]) {
            roman += key;
            arabic -= romanNumerals[key];
        }
    }

    return roman;
}