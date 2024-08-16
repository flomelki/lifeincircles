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

var BG1 = '#FF8C9E';  	// pink
var BG2 = '#D6EFD8';	// water green
var BG3 = '#1679AB';	// nice blue
var BG4 = '#C40C0C';	// severe orange
var BG5 = '#F6EACB';	// kind of sand
