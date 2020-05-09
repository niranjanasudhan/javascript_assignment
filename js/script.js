function show_div(val) {

    // document.querySelector('[id^="answerhide_"]').style.display = "none";
    // var dates = document.querySelectorAll('*[id^="answerhide_"]');
    //dates.style.display = "none";
    // document.getElementsByClassName('answer_section').style.display = "none";

    // while (dates.length) {
    //     dates[0].className.style.display = "none";
    // }
    var elems = document.getElementsByClassName("answer_section");
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.display = "none";
        console.log(elems);
    }
    document.getElementById('answerhide_' + val).style.display = "block";

}

//1
function check_prime() {
    let result9 = "";
    let str = document.getElementById('array_val').value;
    var str_conv = str.split(",");

    var flag = 0;
    var arr = str_conv;
    var n = arr[0];
    for (i = 2; i <= n / 2; ++i) {
        if (n % i == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        document.getElementById('result1').innerHTML = "First Element is  <b style='color:pink;'> not a Prime Number</b>";
    } else {
        document.getElementById('result1').innerHTML = "First Element is  a <b style='color:pibk;'>Prime Number</b>";
    }


}

//2
function print_most_frequent() {
    var str = document.getElementById('array_most_val').value;
    var arr = str.split(",");
    var mfrq = {};
    var mostEle = arr[0],
        maxCount = 1;
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        if (mfrq[el] == null)
            mfrq[el] = 1;
        else
            mfrq[el]++;
        if (mfrq[el] > maxCount) {
            mostEle = el;
            maxCount = mfrq[el];
        }
    }
    document.getElementById('result2').innerHTML = "Most frequent item " + mostEle;

}

//3
function print_case() {

    var str = document.getElementById('array_case').value;

    var str_arr = str.split("");
    var str_conv = [];
    for (var i = 0; i < str_arr.length; i++) {
        if (str_arr[i] == str_arr[i].toUpperCase()) {

            str_conv[i] = str_arr[i].toLowerCase()
        } else if (str_arr[i] == str_arr[i].toLowerCase()) {
            str_conv[i] = str_arr[i].toUpperCase()
        }

    }


    var result_conv = str_conv.join("");
    document.getElementById('result3').innerHTML = result_conv;

}

//4
function find_square() {
    var flag = 0;
    var sum = 0;
    var str = document.getElementById('array_val_square').value;
    var res = 0;
    var str_arr = str.split(",");
    for (var i = 0; i < str_arr.length; i++) {

        if (isNaN(str_arr[i])) {
            flag = 1;
            document.getElementById('result4').innerHTML = "Invalid Input";
        } else {

            sum = sum + (str_arr[i] * str_arr[i]);

        }


    }
    if (flag == 1) {
        document.getElementById('result4').innerHTML = "Invalid Input";
    } else {
        document.getElementById('result4').innerHTML = sum;

    }




}
//5
function find_even_odd() {
    var ext = "";
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    for (var i = from; i <= to; i++) {
        if ((i % 2) == 0) {
            ext = ext + "<br>" + i + " is Even";
        } else {
            ext = ext + "<br>" + i + " is Odd";
        }
    }
    document.getElementById('result5').innerHTML = ext;
}

//6
function find_sub() {
    var ext = "";
    var sub = document.getElementById('sub').value;
    var limit = document.getElementById('limit').value;
    ext = sub.substring(0, limit);
    document.getElementById('result6').innerHTML = ext;
}
//7
function findLarge() {
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    if (!isNaN(first) && !isNaN(second)) {
        if (first > second) {
            document.getElementById('result7').innerHTML = "Largest Number is " + first;
        } else {
            document.getElementById('result7').innerHTML = "Largest Number is " + second;
        }
    }
}


//9
function show_pattern_string() {
    let result9 = "";
    let str = document.getElementById('pattern_string_count').value;
    var str_conv = str.split("");
    document.getElementById('result9').innerHTML = "";
    for (x of str_conv) {
        {
            result9 = result9 + x;
            document.getElementById('result9').innerHTML = document.getElementById('result9').innerHTML + "<br>" + result9;
        }
    }
}

//10
function show_pattern() {
    let result10 = "";
    let level = document.getElementById('pattern_count').value;

    for (var i = 0; i <= level - 1; i++) {
        for (var j = 0; j <= i; j++) {
            result10 = result10 + "* ";
        }
        result10 = result10 + "<br>";
    }

    document.getElementById('result10').innerHTML = result10;
}

//8
function add() {
    var i = $('.countcls').length + 1;
    var table = document.getElementById("hidetab");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = '<td><input class="countcls" name="sname[]" id="sname" type="text"/></td>';
    cell2.innerHTML = '<td><input  name="sno[]" id="sno type="number" /></td>';
    cell3.innerHTML = '<td><input  name="smark[]" id="smark" type="number" /></td>';
    cell4.innerHTML = '<td><img class="cross" src="images/cross.png" onclick="remove(this)"> </td>';
    // document.getElementById('cnt').value=i;                          
    i++;

}

function remove(el) {
    // $( el ).click(function(event) {
    $(el).closest("tr").remove();
    // });
}

function sort() {

    var data = [];
    var sname = document.querySelectorAll("#myform input[name='sname[]']");
    var sno = document.querySelectorAll("#myform input[name='sno[]']");
    var smark = document.querySelectorAll("#myform input[name='smark[]']");
    for (i = 0; i < sname.length; i++) {
        var element = {};
        element.name = sname[i].value;
        element.rollno = sno[i].value;
        element.mark = smark[i].value;
        data.push(element);
        // console.log(data);
    }
    var std = [];
    for (x in data) {
        std.push(data[x].name);
    }
    var sorted = std.sort();
    console.log(sorted);

    var ext = "";
    for (var i = 0; i < sorted.length; i++) {
        ext = ext + (i + 1) + ". " + sorted[i] + "<br>";
    }

    document.getElementById('result8').innerHTML = ext;

}