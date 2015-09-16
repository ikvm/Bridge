﻿Bridge.merge(new Bridge.CultureInfo("sk", true), {
    englishName: "Slovak",
    nativeName: "slovenčina",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "Nie je číslo",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-nekonečno",
        positiveInfinitySymbol: "+nekonečno",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "EUR",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ne","po","ut","st","št","pi","so"],
        abbreviatedMonthGenitiveNames: ["1","2","3","4","5","6","7","8","9","10","11","12",""],
        abbreviatedMonthNames: ["1","2","3","4","5","6","7","8","9","10","11","12",""],
        amDesignator: "dop.",
        dateSeparator: ".",
        dayNames: ["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d. MMMM yyyy H:mm:ss",
        longDatePattern: "d. MMMM yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra",""],
        monthNames: ["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december",""],
        pmDesignator: "odp.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy",
        shortestDayNames: ["ne","po","ut","st","št","pi","so"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
