var getDate = function(dt)
{
    dt = new Date(dt);
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
}

var getTime = function(dt)
{
    dt = new Date(dt);
    return dt.getHours() * 60 + dt.getMinutes();
}


var getDateWithOffset = function(d)
{
    return new Date(new Date(d).getTime() + new Date(d).getTimezoneOffset() * 60000)
}

var BLACK1 = '#282828';
var BLACK2 = '#051118';
var BLACK3 = '#0F1B20';
var BLACK4 = '#222022';
var BLACK5 = '#0C0C0C';
