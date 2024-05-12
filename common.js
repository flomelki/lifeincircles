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
