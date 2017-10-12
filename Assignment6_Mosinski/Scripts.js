///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function createTeamAsObject() {
    var team = new Object();
    team.city = "Cleveland";
    team.name = "Browns";

    var kenny = new Object();
    kenny.firstName = "Kenny";
    kenny.lastName = "Britt";
    kenny.position = "WR";

    var rashard = new Object();
    rashard.firstName = "Rashard";
    rashard.lastName = "Higgins";
    rashard.position = "WR";

    var jordan = new Object();
    jordan.firstName = "Jordan";
    jordan.lastName = "Payton";
    jordan.position = "WR";

    var randall = new Object();
    randall.firstName = "Randall";
    randall.lastName = "Telfar";
    randall.position = "TE";

    var seth = new Object();
    seth.firstName = "Seth";
    seth.lastName = "DeValve";
    seth.position = "TE";

    var david = new Object();
    david.firstName = "David";
    david.lastName = "Njoku";
    david.position = "TE";

    var joe = new Object();
    joe.firstName = "Joe";
    joe.lastName = "Thomas";
    joe.position = "LT";

    var zach = new Object();
    zach.firstName = "Zach";
    zach.lastName = "Banner";
    zach.position = "LT";

    var joel = new Object();
    joel.firstName = "Joel";
    joel.lastName = "Bitonio";
    joel.position = "LG";

    var marcus = new Object();
    marcus.firstName = "Marcus";
    marcus.lastName = "Martin";
    marcus.position = "LG";

    var jc = new Object();
    jc.firstName = "JC";
    jc.lastName = "Tretter";
    jc.position = "C";

    var austin = new Object();
    austin.firstName = "Austin";
    austin.lastName = "Reiter";
    austin.position = "C";

    var kevin = new Object();
    kevin.firstName = "Kevin";
    kevin.lastName = "Reiter";
    kevin.position = "RG";

    var spencer = new Object();
    spencer.firstName = "Spencer";
    spencer.lastName = "Drango";
    spencer.position = "RG";

    var shon = new Object();
    shon.firstName = "Shon";
    shon.lastName = "Coleman";
    shon.position = "RT";

    var zach2 = new Object();
    zach2.firstName = "Zach";
    zach2.lastName = "Banner";
    zach2.position = "RT";

    var ricardo = new Object();
    ricardo.firstName = "Ricardo";
    ricardo.lastName = "Louis";
    ricardo.position = "WR";

    var deshone = new Object();
    deshone.firstName = "DeShone";
    deshone.lastName = "Kizer";
    deshone.position = "QB";

    var kevin2 = new Object();
    kevin2.firstName = "Kevin";
    kevin2.lastName = "Hogan";
    kevin2.position = "QB";

    var cody = new Object();
    cody.firstName = "Cody";
    cody.lastName = "Kessler";
    cody.position = "QB";

    var dan = new Object();
    dan.firstName = "Dan";
    dan.lastName = "Vitale";
    dan.position = "FB";

    var isaiah = new Object();
    isaiah.firstName = "Isaiah";
    isaiah.lastName = "Crowell";
    isaiah.position = "RB";

    var duke = new Object()
    duke.firstName = "Duke";
    duke.lastName = "Johnson Jr.";
    duke.position = "RB";

    var matthew = new Object();
    matthew.firstName = "Matthew";
    matthew.lastName = "Dayes";
    matthew.position = "RB";

    team.roster = new Array(kenny,
        rashard,
        jordan,
        randall,
        seth,
        david,
        joe,
        zach,
        joel,
        marcus,
        jc,
        austin,
        kevin,
        spencer,
        shon,
        zach,
        ricardo,
        deshone,
        kevin2,
        cody,
        dan,
        isaiah,
        duke,
        matthew);

    return team;

}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function CreateTeamAsJSON() {
    return {

        "city" : "Cleveland",
        "name" : "Browns",
        "roster" : [

            {
                "firstName": "Kenny",
                "lastName": "Britt",
                "position": "WR"
            },

            {
                "firstName": "Rashard",
                "lastName": "Higgins",
                "position": "WR"
            },

            {
                "firstName": "Jordan",
                "lastName": "Payton",
                "position": "WR"
            },

            {
                "firstName": "Randall",
                "lastName": "Telfer",
                "position": "TE"
            },

            {
                "firstName": "Seth",
                "lastName": "DeValve",
                "position": "TE"
            },

            {
                "firstName": "David",
                "lastName": "Njoku",
                "position": "TE"
            },

            {
                "firstName": "Joe",
                "lastName": "Thomas",
                "position": "LT"
            },

            {
                "firstName": "Zach",
                "lastName": "Banner",
                "position": "LT"
            },

            {
                "firstName": "Joel",
                "lastName": "Bitonio",
                "position": "LG"
            },

            {
                "firstName": "Marcus",
                "lastName": "Martin",
                "position": "LG"
            },

            {
                "firstName": "JC",
                "lastName": "Tretter",
                "position": "C"
            },

            {
                "firstName": "Austin",
                "lastName": "Reiter",
                "position": "C"
            },

            {
                "firstName": "Kevin",
                "lastName": "Zeitler",
                "position": "RG"
            },

            {
                "firstName": "Spencer",
                "lastName": "Drango",
                "position": "RG"
            },

            {
                "firstName": "Shon",
                "lastName": "Coleman",
                "position": "RT"
            },

            {
                "firstName": "Zach",
                "lastName": "Banner",
                "position": "RG"
            },

            {
                "firstName": "Ricardo",
                "lastName": "Louis",
                "position": "WR"
            },

            {
                "firstName": "DeShone",
                "lastName": "Kizer",
                "position": "QB"
            },

            {
                "firstName": "Kevin",
                "lastName": "Hogan",
                "position": "QB"
            },

            {
                "firstName": "Cody",
                "lastName": "Kessler",
                "position": "QB"
            },

            {
                "firstName": "Dan",
                "lastName": "Vitale",
                "position": "FB"
            },

            {
                "firstName": "Isaiah",
                "lastName": "Crowell",
                "position": "RB"
            },

            {
                "firstName": "Duke",
                "lastName": "Johnson Jr.",
                "position": "RB"
            },

            {
                "firstName": "Matthew",
                "lastName": "Dayes",
                "position": "RB"
            }
        ]

    };
}

//team.prototype.toString = function teamToString(team) {
//    var teamString = this.firstName + " " + this.lastName + " " + this.position;
//    return teamString;
//}

function displayTeam(team) {

    for (var i = 0; i < team.roster.length; i++) {
        var player = team.roster[i];
        alert(player.firstName + " " + player.lastName + " " + player.position + ".");

        document.write(JSON.stringify(team.roster[i]));

    }
}

//displayTeam(teamToString(team));

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

//document.body.innerHTML(team.prototype.toString());

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    $(".button").mouseover(function() {
        $(this).css("border", "2px solid lime");
    });

    $(".button").mouseout(function () {
        $(this).css("border", "2px solid black");
    });

    $(".button1").click(function () {
        var team = createTeamAsObject();
        displayTeam(team);
    });
});