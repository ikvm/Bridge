﻿Bridge.merge(new Bridge.CultureInfo("bn", true), {
    englishName: "Bangla",
    nativeName: "বাংলা",

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
        percentNegativePattern: 1,
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
        abbreviatedDayNames: ["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],
        abbreviatedMonthGenitiveNames: ["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""],
        abbreviatedMonthNames: ["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dd MMMM yyyy HH.mm.ss",
        longDatePattern: "dd MMMM yyyy",
        longTimePattern: "HH.mm.ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],
        monthNames: ["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yy",
        shortestDayNames: ["র","স","ম","বু","বৃ","শু","শ"],
        shortTimePattern: "HH.mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
