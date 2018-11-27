function temperatureBug()
{
    var temp = Number(document.project1.temp1.value);

    if (temp >= 80)
    {
        document.getElementById('weather').src="img/beach.jpg";
        return "it is summer"
    }
    else if (temp >= 60)
    {
        document.getElementById('weather').src="img/flower.jpg";
        return "it is spring"
    }
    else if (temp >= 45)
    {
        document.getElementById('weather').src="img/pumpkin.jpg";
        return "it is fall"
    }
    else
    {
        document.getElementById('weather').src="img/snowman.jpg";
        return "it is winter"

    }
}

function calorieCounter()
{
    var activity = document.getElementById('activities').value;
    var time = document.getElementById('time').value;

    if (activity == "soccer")
    {
        if (time == "30min")
        {
            return "you have burned " + 30 * 8.6 + " calories"
        }
        else if (time == "60min")
        {
            return "you have burned " + 60 * 8.6 + " calories"
        }
        else if (time == "90min")
        {
            return "you have burned " + 90 * 8.6 + " calories"
        }
        else if (time == "120min")
        {
            return "you have burned " + 120 * 8.6 + " calories"
        }
    }
    else if (activity == "videogames")
    {
        if (time == "30min")
        {
            return "you have burned " + 30 * 1.36 + " calories"
        }
        else if (time == "60min")
        {
            return "you have burned " + 60 * 1.36 + " calories"
        }
        else if (time == "90min")
        {
            return "you have burned " + 90 * 1.36 + " calories"
        }
        else if (time == "120min")
        {
            return "you have burned " + 120 * 1.36 + " calories"
        }
     else if (activity == "videogames")
    {
        if (time == "30min")
        {
            return "you have burned " + 30 * 1.36 + " calories"
        }
        else if (time == "60min")
        {
            return "you have burned " + 60 * 1.36 + " calories"
        }
        else if (time == "90min")
        {
            return "you have burned " + 90 * 1.36 + " calories"
        }
        else if (time == "120min")
        {
            return "you have burned " + 120 * 1.36 + " calories"
        }
    }
    else if (activity == "pingpong")
        {
            if (time == "30min")
            {
                return "you have burned " + 30 * 2 + " calories"
            }
            else if (time == "60min")
            {
                return "you have burned " + 60 * 2 + " calories"
            }
            else if (time == "90min")
            {
                return "you have burned " + 90 * 2 + " calories"
            }
            else if (time == "120min")
            {
                return "you have burned " + 120 * 2 + " calories"
            }
        }
    }
}

function assignGrade()
{
    var score = Number(document.project3.score.value);
    var x = score
    if (x >= 90)
    {
        return "The grade for this test is an A";
    }
    else if (x >= 80)
    {
        return "The grade for this test is a B";
    }
    else if (x >= 70)
    {
        return "The grade for this test is a C";
    }
    else if (x >= 60)
    {
        return "The grade for this test is a D";
    }
    else if (x <= 59)
    {
        return "The grade for this test is a F";
    }
}

function tenToSmall(num, base)
{
    num = document.getElementById('num1').value;
    base = document.getElementById('base1').value;
    smallNum = "";

    while (num > 0)
    {
        smallNum = num%base + smallNum;
        num = Math.floor(num/base);
        alert(smallNum);
        alert(num);
    }

    return smallNum;
}

function smallToTen(num, base)
{
    num = document.getElementById('binaryNum').value;
    base = document.getElementById('base').value;
    tenNum = 0;
    numLength = num.toString().length;

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        num = num%denominator;
        numLength--;
    }
    return tenNum;
}

function baseToBase()
{
    num = document.getElementById('num').value;
    base = document.getElementById('baseOfNum').value;
    newBase = document.getElementById('newBase').value;
    tenNum = 0;
    numLength = num.toString().length;
    smallNum = "";

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        num = num%denominator;
        numLength--;
    }

    while (tenNum > 0)
    {
        smallNum = tenNum%newBase + smallNum;
        tenNum = Math.floor(tenNum/newBase);
    }
    return smallNum
}

function calculate(expression)
{
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);
    var secondNum=Number(expression.substr(2,2));

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerOf(firstNum, secondNum);
    }
}

function addNums(p1,p2)
{
    return p1+p2;
}

function subNums(p1,p2)
{
    return p1-p2;
}

function multiplyNums(p1,p2)
{
    return p1*p2;
}

function divideNums(p1,p2)
{
    return p1/p2;
}

function powerOf(p1,p2)
{
    return Math.pow(p1,p2);
}

function array()
{
    var inputs = [];
    inputs.push(document.getElementById('adj1').value);
    inputs.push(document.getElementById('adj2').value);
    inputs.push(document.getElementById('adj3').value);
    inputs.push(document.getElementById('adv1').value);
    inputs.push(document.getElementById('noun1').value);
    inputs.push(document.getElementById('noun2').value);
    inputs.push(document.getElementById('noun3').value);
    inputs.push(document.getElementById('noun4').value);
    inputs.push(document.getElementById('noun5').value);
    inputs.push(document.getElementById('noun6').value);
    inputs.push(document.getElementById('plNoun1').value);
    return "Driving a car can be fun if you follow this " + inputs[0].bold() + " advice:" +
        " When approaching a " + inputs[4].bold() + " on the right, always blow your " + inputs[5].bold() +
        " Before making a " + inputs[1].bold() + " turn, always stick your " + inputs[6].bold() + " out of the window." +
        " Every 2000 miles, have your " + inputs[7].bold() + " inspected and your " + inputs[8].bold() + " checked" +
        " When approaching a school, watch out for " + inputs[2].bold() + "" + inputs[10].bold() +
        " Above all, drive " + inputs[3].bold() + ". The " + inputs[9].bold() + " you save may be your own!"
    //story from redkid.net
}