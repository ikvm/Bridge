﻿Bridge.merge(new Bridge.CultureInfo("kok", true), {
    englishName: "Konkani",
    nativeName: "कोंकणी",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3,2],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "₹",
        currencyGroupSizes: [3,2],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 12,
        currencyPositivePattern: 2,
        numberGroupSizes: [3,2],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["आय.","सोम.","मंगळ.","बुध.","बिरे.","सुक्र.","शेन."],
        abbreviatedMonthGenitiveNames: ["जाने","फेब्रु","मार्च","एप्रिल","मे","जून","जुलै","ऑग.","सप्टें.","ऑक्टो.","नोवे.","डिसें",""],
        abbreviatedMonthNames: ["जाने","फेब्रु","मार्च","एप्रिल","मे","जून","जुलै","ऑग.","सप्टें.","ऑक्टो.","नोवे.","डिसें",""],
        amDesignator: "म.पू.",
        dateSeparator: "-",
        dayNames: ["आयतार","सोमार","मंगळार","बुधवार","बिरेस्तार","सुक्रार","शेनवार"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dd MMMM yyyy HH:mm:ss",
        longDatePattern: "dd MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर",""],
        monthNames: ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर",""],
        pmDesignator: "म.नं.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yyyy",
        shortestDayNames: ["आ","स","म","ब","ब","स","श"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
