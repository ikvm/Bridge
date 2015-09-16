﻿Bridge.merge(new Bridge.CultureInfo("ky", true), {
    englishName: "Kyrgyz",
    nativeName: "Кыргыз",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "терс чексиздик",
        positiveInfinitySymbol: "оң чексиздик",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "сом",
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
        abbreviatedDayNames: ["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],
        abbreviatedMonthGenitiveNames: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""],
        abbreviatedMonthNames: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["жекшемби","дүйшөмбү","шейшемби","шаршемби","бейшемби","жума","ишемби"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dd'-'MMMM yyyy'-ж.' HH:mm:ss",
        longDatePattern: "dd'-'MMMM yyyy'-ж.'",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d'-'MMMM",
        monthGenitiveNames: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],
        monthNames: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d-MMM yy",
        shortestDayNames: ["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy'-ж.'",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
