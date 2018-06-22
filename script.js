var ask = document.getElementById('ask');
var guess = document.getElementById('answer');
var answer;
var type = document.getElementById('types').value;

function multiply() {
    var one, two;
    one = Math.floor(Math.random() * 13);
    two = Math.floor(Math.random() * 13);
    var ans = one * two;
    return [one, two, ans];
}
function divide() {
    var one, two;
    one = Math.floor(Math.random() * 13);
    two = Math.floor(Math.random() * 13);
    var ans = one * two;
    return [ans, two, one];
}
function add() {
    var one, two;
    one = Math.floor(Math.random() * 13);
    two = Math.floor(Math.random() * 13);
    var ans = one + two;
    return [one, two, ans];
}
function subtract() {
    var one = 1, two = 5;

    while (two <= one) {
        console.log('test');
        one = Math.floor(Math.random() * 13);
        two = Math.floor(Math.random() * 13);
    }
    var ans = one - two;
    return [one, two, ans];
}

function send(tried) {
    if (tried == answer) {
        ask.innerHTML = 'Correct!';
        console.log('Correct!');
    } else {
        ask.innerHTML = 'Wrong!';
    }
    setTimeout(function() {guess.value = '';;asker()}, 1000);
}
function asker() {
    type = document.getElementById('types').value
    var question;
    var num1, num2, nums;
    if (type == 'multiplication') {
        nums = multiply();
        num1 = nums[0], num2 = nums[1];
        answer = nums[2];
        question = 'What is ' + num1 + ' times ' + num2 + '?'
        console.log(question);
    }
    if (type == 'division') {
        nums = divide();
        num1 = nums[0], num2 = nums[1];
        answer = nums[2];
        question = 'What is ' + num1 + ' divided by ' + num2 + '?'
        console.log(question);
    }
    if (type == 'addition') {
        nums = add();
        num1 = nums[0], num2 = nums[1];
        answer = nums[2];
        question = 'What is ' + num1 + ' plus ' + num2 + '?'
        console.log(question);
    }
    if (type == 'subtraction') {
        nums = subtract();
        num1 = nums[0], num2 = nums[1];
        answer = nums[2];
        question = 'What is ' + num1 + ' minus ' + num2 + '?'
        console.log(question);
    }
    ask.innerHTML = question;
}

asker();
