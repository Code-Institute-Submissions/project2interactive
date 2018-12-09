// Source: https://weeknumber.net/how-to/javascript
// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}
var data1 = [];

d3.csv("data/Accounts.csv", function (data) {
    function print_filter(filter) {
        var f = eval(filter);
        if (typeof (f.length) != "undefined") { } else { }
        if (typeof (f.top) != "undefined") { f = f.top(Infinity); } else { }
        if (typeof (f.dimension) != "undefined") { f = f.dimension(function (d) { return ""; }).top(Infinity); } else { }
        console.log(filter + "(" + f.length + ") = " + JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]"));
    }

    transactions = [];
    function getTransactions(data) {
        for (var j = 0; j < data.length; j++) {
            let a = {};
            a.date = d3.time.format("%d/%m/%Y").parse(data[j]['Date']);
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            a.month = months[new Date(a.date).getMonth()];
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            a.day = days[new Date(a.date).getDay()];
            a.week = +(new Date(a.date).getWeek());
            a.name = data[j]["Account Name"];
            a.amount = +data[j]['Amount Num.'];
            a.id = +data[j]['id'];
            var payments = ['Cash', 'Bank'];
            if (data[j]['Cash'] === 'true') {
                a.payment = 'cash';
            } else {
                a.payment = 'bank';
            }
            month = new Date(a.date).getMonth()
            if (month <= 2) {
                a.quarter = 'Q1';
            } else if (month > 2 && month <= 5) {
                a.quarter = 'Q2';
            } else if (month > 5 && month <= 8) {
                a.quarter = 'Q3';
            } else {
                a.quarter = 'Q4';
            }
            a.year = new Date(a.date).getFullYear();
            //source: https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
            var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            a.dayOfYear = dayCount[new Date(a.date).getMonth()] + new Date(a.date).getDate();
            transactions.push(a);
        }
        return transactions;
    }

    data1 = getTransactions(data);
    var ndx = crossfilter(data1);
    
    var all = ndx.groupAll();
    var ndGroup = all.reduceSum(function (d) { return d.amount });

    var cur = IE.numberFormat("$,.2f");
    
    dc.numberDisplay("#total-amount-display")
        .group(ndGroup)
        .formatNumber(cur)
        .valueAccessor(function (d) { return d });

    dc.renderAll();
});
