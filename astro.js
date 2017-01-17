
$(document).ready(function()
{

    var planets = [
                    ['Pluto', 0.06],
                    ['Neptune', 1.148],
                    ['Uranus', 0.917],
                    ['Saturn', 1.139],
                    ['Jupiter', 2.640],
                    ['Mars', 0.3895],
                    ['Moon', 0.1655],
                    ['Earth', 1],
                    ['Venus', 0.9032],
                    ['Mercury', 0.377],
                    ['Sun', 27.9]
                  ];  

    planets.reverse();

    // $.each( planets, function(index, value) {
    //   $('#selectPlanet').append($("<option/>").text(value[0]));

    // -------------------------- ANOTHER METHOD TO USE --------------------- \\

    $('#heading').text("Astro Weight Calculator");


    planets.forEach(function(value)
    {
        $('#selectPlanet').append($("<option/>").text(value[0]).val(value[1]));
    });

    $('#clickon').click(function()
    {
        var weightInput = $('#astroWeight').val();
        var optionSelected = $('#selectPlanet option:selected').text();
        var planetGravity = $('#selectPlanet option:selected').val();
        var result = weightInput * planetGravity;
        $('#resulttext').text("If you were on " + optionSelected + " you would weigh " + result + "lbs");
    });

});

//$('<option/>').val(planets[i][1]).html



// JAVASCRIPT
// for(var i = 0; i < planets.length; i++)
// {
// var planetList = planets[i][0]
// var gravityList = planets[i][1]
// var result = planetList * gravityList

//console.log(planetList)
// console.log(gravityList)
// };
