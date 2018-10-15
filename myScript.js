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