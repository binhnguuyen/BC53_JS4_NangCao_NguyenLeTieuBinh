// Bài 1
function findNextAndLastDay() {
    var day = +document.getElementById("day").value;
    var month = +document.getElementById("month").value;
    var year = +document.getElementById("year").value;
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");

    var nextDay = 0;
    var nextMonth = 0;
    var nextYear = 0;
    var lastDay = 0;
    var lastMonth = 0;
    var lastYear = 0;
    var statusForNext;
    var statusForLast;

    if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10)) {
        if (day == 31) {
            statusForNext = 1;
            nextDay = 1;
            nextMonth = month + 1;
            nextYear = year;
        }
        else if (day > 31) {
            statusForNext = 0;
        }
        else {
            statusForNext = 1;
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    }
    else if (month == 12) {
        if (day == 31) {
            statusForNext = 1;
            nextDay = 1;
            nextMonth = 1;
            nextYear = year + 1;
        }
        else if (day > 31) {
            statusForNext = 0;
        }
        else {
            statusForNext = 1;
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    }
    else if (month == 2) {
        if (day <= 28) {
            statusForNext = 1;
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
        else if (day == 29) {
            statusForNext = 1;
            nextDay = 1;
            nextMonth = month + 1;
            nextYear = year;
        }
        else if (day >= 30) {
            statusForNext = 0;
        }
        else {
            // do nothing
        }
    }
    else if ( (month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        if (day == 30) {
            statusForNext = 1;
            nextDay = 1;
            nextMonth = month + 1;
            nextYear = year;
        }
        else if (day >= 31) {
            statusForNext = 0;
        }
        else {
            statusForNext = 1;
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    }
    else {
        statusForNext = 0;
    }

    if ( (month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        if (day == 1) {
            statusForLast = 1;
            lastDay = 31;
            lastMonth = month - 1;
            lastYear = year;
        }
        else if (day > 30) {
            statusForLast = 0;
        }
        else {
            statusForLast = 1;
            lastDay = day - 1;
            lastMonth = month;
            lastYear = year;
        }
    }
    else if (month == 1) {
        if (day == 1) {
            statusForLast = 1;
            lastDay = 31;
            lastMonth = 12;
            lastYear = year - 1;
        }
        else if (day > 31) {
            statusForLast = 0;
        }
        else {
            statusForLast = 1;
            lastDay = day - 1;
            lastMonth = month;
            lastYear = year;
        }
    }
    else if (month == 2) {
        if (day == 1) {
            statusForLast = 1;
            lastDay = 31;
            lastMonth = month - 1;
            lastYear = year;
        }
        else if (day > 29) {
            statusForLast = 0;
        }
        else {
            statusForLast = 1;
            lastDay = day - 1;
            lastMonth = month;
            lastYear = year;
        }
    }
    else if ((month == 3)) {
        if (day == 1) {
            statusForLast = 1;
            lastDay = 29;
            lastMonth = month - 1;
            lastYear = year;
        }
        else if (day > 31) {
            statusForLast = 0;
        }
        else {
            statusForLast = 1;
            lastDay = day - 1;
            lastMonth = month;
            lastYear = year;
        }
    }
    else if ( (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12) ) {
        if (day == 1) {
            statusForLast = 1;
            lastDay = 30;
            lastMonth = month - 1;
            lastYear = year;
        }
        else if (day > 31) {
            statusForLast = 0;
        }
        else {
            statusForLast = 1;
            lastDay = day - 1;
            lastMonth = month;
            lastYear = year;
        }
    }
    else {
        statusForLast = 0;
    }

    if ( statusForNext == 0 ) {
        result1.innerHTML = `
            <span>
            Không tính được ngày tiếp theo. 
            Xin nhập ngày hợp lệ
            </span>
        `;
    }
    else {
        result1.innerHTML = `
    <div>
        <span>
        Ngày bạn nhập là ngày ${day}/${month}/${year} cho nên ngày tiếp theo sẽ là ${nextDay}/${nextMonth}/${nextYear}
        </span>
    </div> 
    `;
    }

    if ( statusForLast == 0 ) {
        result2.innerHTML = `
            <span>
                Không tính được ngày trước đó. 
                Xin nhập ngày hợp lệ
            </span>
        `;
    }
    else {
        result2.innerHTML = `
    <div>
        <span>
        Và ngày trước đó sẽ là ${lastDay}/${lastMonth}/${lastYear}
        </span>
    </div> 
    `;
    }
}