
/*  ******************* Captchar Functionality ***************************
  *********************************************************************  */
var finalCap;

function captcha() {
    let random_num = Math.random() * 10000;
    let floor_num = Math.floor(random_num);

    let digit = (num, c = 0) => {
        if (num) {
            return digit(Math.floor(num / 10), ++c);
        };
        return c;
    };

    let count = digit(floor_num);

    if (count == 3) {
        finalCap = floor_num + "0";
    }
    else if (count == 2) {
        finalCap = "0" + floor_num + "0";
    }
    else {
        finalCap = floor_num;
    }

    document.getElementById('capch').value = finalCap;

}

/*  ******************* Start Button Functionality ***************************
  *********************************************************************  */
function start() {
    document.getElementById("startbtn").style = "visibility:hidden;";
    document.getElementsByClassName('question')[0].style = "visibility:visible;";
    document.getElementById("opt1").style = "visibility:visible;";
    document.getElementById("opt2").style = "visibility:visible;";
    document.getElementById("opt3").style = "visibility:visible;";
    document.getElementById("opt4").style = "visibility:visible;";
    document.getElementById("currAns").style = "visibility:visible;";
    document.getElementsByClassName('timevisibility')[0].style = "visibility:visible;";
    document.getElementById("btnmargin").style = "visibility:visible;";
}


/*  ******************* Next Button Functionality ***************************
  *********************************************************************  */

let i = -1;
function nextfunction() {
    countDownTime = 15000;

    if (i < 10) {
        i++;
        fetch("content/api").then(function (response) {
            return response.json();
        }).then(function (result) {
            document.getElementsByClassName('myid')[0].innerText = ` ${i + 1} : ${result[i].question}`;

            document.getElementById('opt1').innerHTML = `${result[i].option.opt1}`;
            document.getElementById('opt2').innerHTML = `${result[i].option.opt2}`;
            document.getElementById('opt3').innerHTML = `${result[i].option.opt3}`;
            document.getElementById('opt4').innerHTML = `${result[i].option.opt4}`;

        });

    }
    if (i == 10) {
        subfunction();
        disable();
        document.getElementById('nextbtn').disabled = true;
        document.getElementById('nextbtn').style.backgroundColor = "rgb(87, 152, 218)";
    }


    clearAllRadios();
    scoreing();
    enable();
}

/*  ******************* Timer Functionality ***************************
  *********************************************************************  */

var countDownTime = 15000;  // seconds in miliseconds

function time() {
    setInterval(function () {
        countdownfun();
    }, 1000);
}
function countdownfun() {
    var seconds = countDownTime / 1000;

    if (seconds > 9) {
        document.getElementById("countdown").innerHTML = seconds;
    }
    else {
        document.getElementById("countdown").innerHTML = "0" + seconds;
        if (seconds < 11 && seconds > 4) {
            document.getElementById("timer").style = "background-color: rgb(250, 135, 0);";
        }
        else if (seconds < 4 && seconds >= 0) {
            document.getElementById("timer").style = "background-color: rgb(250, 58, 0);";
        }
    }

    if (countDownTime > 0) {
        enable();
        countDownTime = countDownTime - 1000;
    }

    else {
        nextfunction();
        disable();
        document.getElementById("timer").style = "background-color: green;";
    }
}



function disable() {
    var radlist = document.getElementsByName('same');

    for (var j = 0; j < radlist.length; j++) {
        radlist[j].disabled = true;
    }
}

function enable() {
    var radlist = document.getElementsByName('same');

    for (var j = 0; j < radlist.length; j++) {
        radlist[j].disabled = false;
    }
}

function clearAllRadios() {
    var radlist = document.getElementsByName('same');
    for (var j = 0; j < radlist.length; j++) {
        if (radlist[j].checked) {
            radlist[j].checked = false;
        }
    }
    document.getElementById('opt1').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
    document.getElementById('opt2').style.backgroundColor = "rgba(131, 236, 255, 0.555) ";
    document.getElementById('opt3').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
    document.getElementById('opt4').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
}



/*  ************** Options CSS (For Yellow Color) Functionality ****************
  *********************************************************************  */

var leave = 0, ansgiven = 0, correct = 0, wrong = 0;
var ans1 = "";

function ansfunction() {

    var type = document.getElementsByName('same');
    if (type[0].checked) {
        ans1 = document.getElementById('opt1').innerText;
        document.getElementById('opt1').style.backgroundColor = "yellow";
        document.getElementById('opt2').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt3').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt4').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
    }
    else if (type[1].checked) {
        ans1 = document.getElementById('opt2').innerText;
        document.getElementById('opt2').style.backgroundColor = "yellow";
        document.getElementById('opt1').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt3').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt4').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
    }
    else if (type[2].checked) {
        ans1 = document.getElementById('opt3').innerText;
        document.getElementById('opt3').style.backgroundColor = "yellow";
        document.getElementById('opt1').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt2').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt4').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
    }
    else if (type[3].checked) {
        ans1 = document.getElementById('opt4').innerText;
        document.getElementById('opt4').style.backgroundColor = "yellow";
        document.getElementById('opt1').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt2').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
        document.getElementById('opt3').style.backgroundColor = "rgba(131, 236, 255, 0.555)";
    }
}



/*  ******************* Submit Functionality ***************************
  *********************************************************************  */

function subfunction() {
    hiddenBeforeSubmit();
    document.getElementById('submitbtn').disabled = true;
    document.getElementById('nextbtn').disabled = true;
    document.getElementById('nextbtn').style.backgroundColor = "rgb(87, 152, 218)";
    disable();


    // ********* Score Card *********

    fetch("content/api").then(function (response) {
        return response.json();
    }).then(function (result) {
        document.getElementById('totalquestion').innerHTML = `${result.length}`;
        document.getElementById('percent').innerHTML = `${((correct * 10) / 100) * 100}%`;
        document.getElementById('totalscore').innerHTML = `${(correct * 10)} / ${(result.length * 10)}`;

    });

    document.getElementById('attempt').innerHTML = `${ansgiven + wrong}`;
    document.getElementById('correct').innerHTML = `${correct}`;
    document.getElementById('leave').innerHTML = `${leave + (10 - i)}`;
    document.getElementById('wrong').innerHTML = `${wrong}`;

    if (correct == 10) {
        document.getElementById('status').style.color = "rgb(24, 141, 24)";
        document.getElementById('status').innerHTML = "<b>Condition &nbsp;&nbsp;: </b>" + "Awesome";
    }
    else if (correct > 7 && correct < 10) {
        document.getElementById('status').innerHTML = "<b>Condition &nbsp;&nbsp;: </b>" + "Very Good";
    }
    else if (correct > 4 && correct < 8) {
        document.getElementById('status').style.color = "rgb(243, 111, 4)";
        document.getElementById('status').innerHTML = "<b>Condition &nbsp;&nbsp;: </b>" + "Good";
    }
    else if (correct > 2 && correct < 5) {
        document.getElementById('status').style.color = "blue";
        document.getElementById('status').innerHTML = "<b>Condition &nbsp;&nbsp;: </b>" + "You Need to Hard Work";
    }
    else {
        document.getElementById('status').style.color = "red";
        document.getElementById('status').innerHTML = "<b>Condition &nbsp;&nbsp;: </b>" + "Poor";
    }

    document.cookie="attempt=" + `${ansgiven + wrong}`;
    document.cookie="correct=" + `${correct}`;
    document.cookie="wrong=" + `${wrong}`;
    document.cookie="leave=" + `${leave + (10 - i)}`;
    document.cookie="score=" + `${(correct * 10)}`;
    window.location.href = "quiz.php";
   
}

function scoreing() {
    ansfunction();

    fetch("content/api").then(function (response) {
        return response.json();
    }).then(function (result) {
        if (ans1 == result[i - 1].ans) {
            ansgiven++;
            correct++;
            ans1 = "";
        }
        else if (ans1 == "") {
            leave++;
            ans1 = "";
        }
        else {
            wrong++;
            ans1 = "";
        }
        document.getElementById('ansgive').innerHTML = `${(ansgiven + wrong)} / 10`;

    });

}


/*  ******************* View Answer Functionality ***************************
  *********************************************************************  */

function viewans() {
    fetch("content/api").then(function (response) {
        return response.json();
    }).then(function (result) {

        document.getElementById('idnum').innerHTML = `${result[0].id}`;
        document.getElementById('ques').innerHTML = `${result[0].question}`;
        document.getElementById('answ').innerHTML = `${result[0].ans}`;

        document.getElementById('idnum1').innerHTML = `${result[1].id}`;
        document.getElementById('ques1').innerHTML = `${result[1].question}`;
        document.getElementById('answ1').innerHTML = `${result[1].ans}`;

        document.getElementById('idnum2').innerHTML = `${result[2].id}`;
        document.getElementById('ques2').innerHTML = `${result[2].question}`;
        document.getElementById('answ2').innerHTML = `${result[2].ans}`;

        document.getElementById('idnum3').innerHTML = `${result[3].id}`;
        document.getElementById('ques3').innerHTML = `${result[3].question}`;
        document.getElementById('answ3').innerHTML = `${result[3].ans}`;

        document.getElementById('idnum4').innerHTML = `${result[4].id}`;
        document.getElementById('ques4').innerHTML = `${result[4].question}`;
        document.getElementById('answ4').innerHTML = `${result[4].ans}`;

        document.getElementById('idnum5').innerHTML = `${result[5].id}`;
        document.getElementById('ques5').innerHTML = `${result[5].question}`;
        document.getElementById('answ5').innerHTML = `${result[5].ans}`;

        document.getElementById('idnum6').innerHTML = `${result[6].id}`;
        document.getElementById('ques6').innerHTML = `${result[6].question}`;
        document.getElementById('answ6').innerHTML = `${result[6].ans}`;

        document.getElementById('idnum7').innerHTML = `${result[7].id}`;
        document.getElementById('ques7').innerHTML = `${result[7].question}`;
        document.getElementById('answ7').innerHTML = `${result[7].ans}`;

        document.getElementById('idnum8').innerHTML = `${result[8].id}`;
        document.getElementById('ques8').innerHTML = `${result[8].question}`;
        document.getElementById('answ8').innerHTML = `${result[8].ans}`;

        document.getElementById('idnum9').innerHTML = `${result[9].id}`;
        document.getElementById('ques9').innerHTML = `${result[9].question}`;
        document.getElementById('answ9').innerHTML = `${result[9].ans}`;
    });
}


function hiddenBeforeSubmit() {
    // document.getElementById("startbtn").style = "visibility:hidden;";
    document.getElementsByClassName('question')[0].style = "visibility:hidden;";
    document.getElementById("opt1").style = "visibility:hidden;";
    document.getElementById("opt2").style = "visibility:hidden;";
    document.getElementById("opt3").style = "visibility:hidden;";
    document.getElementById("opt4").style = "visibility:hidden;";
    document.getElementById("currAns").style = "visibility:hidden;";
    document.getElementsByClassName('timevisibility')[0].style = "visibility:hidden;";
    document.getElementById("btnmargin").style = "visibility:hidden;";
}
// **************************************************************************************
