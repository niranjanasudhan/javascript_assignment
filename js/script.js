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
        document.getElementById('result1').innerHTML = "First Element value is  <b style='color:pink;'> not a Prime Number</b>";
    } else {
        document.getElementById('result1').innerHTML = "First Element value is  a <b style='color:pibk;'>Prime Number</b>";
    }


}

//2
function print_most_frequent() {
    var str = document.getElementById('array_most_val').value;
    var arr = str.split(",");
    var most = 1;
    var flg = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j])
                flg++;
            if (most < flg) {
                most = flg;
                item = arr[i];
            }
        }
        m = 0;
    }
    document.getElementById('result2').innerHTML = "Most frequent item " + item;

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

//1