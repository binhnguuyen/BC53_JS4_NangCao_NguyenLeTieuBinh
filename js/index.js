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
    else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
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

    if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
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
    else if ((month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
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

    if (statusForNext == 0) {
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

    if (statusForLast == 0) {
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


// Bài 2
function calcDays() {
    var monthToDays = +document.getElementById("monthToDays").value;
    var yearToDays = +document.getElementById("yearToDays").value;
    var result3 = document.getElementById("result3");

    // Cách viết khác để gom những kết quả giống nhau
    switch (monthToDays) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayOfMonth = 31;
            break;
        case 2:
            if (yearToDays % 4 == 0 && yearToDays % 100 != 0) {
                dayOfMonth = 29;
            }
            else {
                dayOfMonth = 28;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dayOfMonth = 30;
            break;
        default:
            result3.innerHTML = ` Xin nhập tháng hợp lệ từ 1-12`
            break;
    }

    result3.innerHTML = `
<div>
    <span>
    Tháng ${monthToDays}
    </span>
    <span>
    có ${dayOfMonth} ngày
    </span>
</div> 
`;
}


// Bài 3
function spellNumber() {
    var integerNumber = document.getElementById("integerNumber").value;
    var result4 = document.getElementById("result4");

    if (integerNumber > 999) {
        result4.innerHTML = `
                <div>
                    Xin nhập số nguyên với 3 chữ số
                </div> 
                `;
    }
    else {
        var num_string = integerNumber.split("");
        for (var i = 0; i < integerNumber.length; i++) {
            num_string[i] = num_string[i] * 1;
        }
    }
    var hundredDig;
    var tenDig;
    var unitDig;

    // Hàng trăm
    switch (num_string[0]) {
        case 0:
            hundredDig = "Không";
            break;
        case 1:
            hundredDig = "Một";
            break;
        case 2:
            hundredDig = "Hai";
            break;
        case 3:
            hundredDig = "Ba";
            break;
        case 4:
            hundredDig = "Bốn";
            break;
        case 5:
            hundredDig = "Năm";
            break;
        case 6:
            hundredDig = "Sáu";
            break;
        case 7:
            hundredDig = "Bảy";
            break;
        case 8:
            hundredDig = "Tám";
            break;
        case 9:
            hundredDig = "Chín";
        default:
            result4.innerHTML = `
                <div>
                    Xin nhập số nguyên với 3 chữ số
                </div> 
                `;
            break;
    }
    // Hàng chục
    switch (num_string[1]) {
        case 0:
            tenDig = "Lẻ";
            break;
        case 1:
            tenDig = "Mười";
            break;
        case 2:
            tenDig = "Hai";
            break;
        case 3:
            tenDig = "Ba";
            break;
        case 4:
            tenDig = "Bốn";
            break;
        case 5:
            tenDig = "Năm";
            break;
        case 6:
            tenDig = "Sáu";
            break;
        case 7:
            tenDig = "Bảy";
            break;
        case 8:
            tenDig = "Tám";
            break;
        case 9:
            tenDig = "Chín";
        default:
            result4.innerHTML = `
                <div>
                    Xin nhập số nguyên với 3 chữ số
                </div> 
                `;
            break;
    }
    // Hàng đơn vị
    switch (num_string[2]) {
        case 0:
            unitDig = "Không";
            break;
        case 1:
            unitDig = "Một";
            break;
        case 2:
            unitDig = "Hai";
            break;
        case 3:
            unitDig = "Ba";
            break;
        case 4:
            unitDig = "Bốn";
            break;
        case 5:
            unitDig = "Năm";
            break;
        case 6:
            unitDig = "Sáu";
            break;
        case 7:
            unitDig = "Bảy";
            break;
        case 8:
            unitDig = "Tám";
            break;
        case 9:
            unitDig = "Chín";
        default:
            result4.innerHTML = `
                <div>
                    Xin nhập số nguyên với 3 chữ số
                </div> 
                `;
            break;
    }

    if (num_string[1] == 0) {
        if (num_string[2] == 0) {
            result4.innerHTML = `
            <div>
                Cách đọc số ${integerNumber} là: 
                ${hundredDig} Trăm
            </div> 
            `;
        }
        else {
            result4.innerHTML = `
            <div>
                Cách đọc số ${integerNumber} là: 
                ${hundredDig} Trăm Lẻ ${unitDig}
            </div> 
            `;
        }


    }
    else if (num_string[1] == 1) {
        if (num_string[2] == 0) {
            result4.innerHTML = `
            <div>
                Cách đọc số ${integerNumber} là: 
                ${hundredDig} Trăm ${tenDig}
            </div> 
            `;
        }
        else {
            result4.innerHTML = `
            <div>
                Cách đọc số ${integerNumber} là: 
                ${hundredDig} Trăm ${tenDig} ${unitDig}
            </div> 
            `;
        }
    }
    else {
        if (num_string[2] == 0) {
            result4.innerHTML = `
            <div>
                Cách đọc số ${integerNumber} là: 
                ${hundredDig} Trăm ${tenDig} Mươi
            </div> 
            `;
        }
        else {
            result4.innerHTML = `
            <div>
                Cách đọc số ${integerNumber} là: 
                ${hundredDig} Trăm ${tenDig} Mươi ${unitDig}
            </div> 
            `;
        }
    }
}


// Bài 4
function calcMostFarStudent() {
    // SV1
    var studentName1 = document.getElementById("studentName1").value;
    var coorStu1_X = +document.getElementById("coorStu1_X").value;
    var coorStu1_Y = +document.getElementById("coorStu1_Y").value;

    // SV2
    var studentName2 = document.getElementById("studentName2").value;
    var coorStu2_X = +document.getElementById("coorStu2_X").value;
    var coorStu2_Y = +document.getElementById("coorStu2_Y").value;

    // SV3
    var studentName3 = document.getElementById("studentName3").value;
    var coorStu3_X = +document.getElementById("coorStu3_X").value;
    var coorStu3_Y = +document.getElementById("coorStu3_Y").value;

    // Toạ độ trường
    var coorSch_X = +document.getElementById("coorSch_X").value;
    var coorSch_Y = +document.getElementById("coorSch_Y").value;

    var result5 = document.getElementById("result5");

    var distanceSV1;
    var distanceSV2;
    var distanceSV3;
    var mostFarStuName = "";
    var mostFarStuNum;
    var resContent = "";

    // Tính toán
    distanceSV1 = Math.sqrt((coorStu1_X - coorSch_X) ** 2 + (coorStu1_Y - coorSch_Y) ** 2);
    distanceSV1 = distanceSV1.toFixed(1);
    distanceSV2 = Math.sqrt((coorStu2_X - coorSch_X) ** 2 + (coorStu2_Y - coorSch_Y) ** 2);
    distanceSV2 = distanceSV2.toFixed(1);
    distanceSV3 = Math.sqrt((coorStu3_X - coorSch_X) ** 2 + (coorStu3_Y - coorSch_Y) ** 2);
    distanceSV3 = distanceSV3.toFixed(1);

    mostFarStuNum = Math.max(distanceSV1, distanceSV2, distanceSV3);
    mostFarStuNum = mostFarStuNum.toFixed(1);
    // console.log(distanceSV1);
    // console.log(distanceSV2);
    // console.log(distanceSV3);
    // console.log(mostFarStuNum);

    // switch (mostFarStuNum) {
    //     case distanceSV1:
    //         if (mostFarStuNum == distanceSV2 || ) {
               
    //         }
    //         else {

    //         }
    //         if () {
    //             mostFarStuName += studentName1;
    //         }
    //         else {

    //         }
    //         break;
    //     case distanceSV2:
    //         mostFarStuName += studentName2;
    //         break;
    //     case distanceSV3:
    //         mostFarStuName += studentName3;
    //         break;
    //     default:
    //         break;
    // }

    if ( mostFarStuNum == distanceSV1 ) {
        mostFarStuName += " " + studentName1;
    }
    if ( mostFarStuNum == distanceSV2 ) {
        mostFarStuName += " " + studentName2;
    }
    if ( mostFarStuNum == distanceSV3 ) {
        mostFarStuName += " " + studentName3;
    }

    resContent =
        `<div>
        <span>
            Sinh viên có nhà xa trường nhất là ${mostFarStuName} với khoảng cách từ trường là ${mostFarStuNum}
        </span>
    </div>`

    result5.innerHTML = resContent;
}
