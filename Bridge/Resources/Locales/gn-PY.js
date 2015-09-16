﻿Bridge.merge(new Bridge.CultureInfo("gn-PY", true), {
    englishName: "Guarani (Paraguay)",
    nativeName: "Guarani (Paraguái)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "ndaha’éi papaha",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinito",
        positiveInfinitySymbol: "Infinito",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "₲",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["teĩ","kõi","apy","ndy","po","oteĩ","okõi"],
        abbreviatedMonthGenitiveNames: ["jteĩ","jkõi","japy","jrun","jpo","jpot","jpok","jpoa","jpor","jpa","jpat","jpak",""],
        abbreviatedMonthNames: ["jteĩ","jkõi","japy","jrun","jpo","jpot","jpok","jpoa","jpor","jpa","jpat","jpak",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["arateĩ","arakõi","araapy","ararundy","arapo","arapoteĩ","arapokõi"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, dd MMMM, yyyy HH:mm:ss",
        longDatePattern: "dddd, dd MMMM, yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["jasyteĩ","jasykõi","jasyapy","jasyrundy","jasypo","jasypoteĩ","jasypokõi","jasypoapy","jasyporundy","jasypa","jasypateĩ","jasypakõi",""],
        monthNames: ["jasyteĩ","jasykõi","jasyapy","jasyrundy","jasypo","jasypoteĩ","jasypokõi","jasypoapy","jasyporundy","jasypa","jasypateĩ","jasypakõi",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["A1","A2","A3","A4","A5","A6","A7"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
