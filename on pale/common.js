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

var BG1 = '#282828';
var BG2 = '#051118';
var BG3 = '#0F1B20';
var BG4 = '#222022';
var BG5 = '#0C0C0C';
