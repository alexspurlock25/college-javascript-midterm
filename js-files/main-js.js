let meetings = [];
class techClubMeeting {
    constructor(speaker, session, date) {
        this.speaker = speaker;
        this.session = session;
        this.date = date;
    }

    // getters and setters

}
function addDateSessionSpeaker() { // get values from HTML
    // IDs == speakerName, sessionTitle, meetingDate

    let speakerName = document.getElementById('speaker').value;
    let sessionTitle = document.getElementById('session').value;
    let meetingDate = document.getElementById('date').value;

    let dateOptions = { // date formatter
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        weekday:'short',
        month:'short',
        day:'numeric',
        year:'numeric',
        timeZone:'UTC'

    }

    meetings.push({ 

            speaker:speakerName,
            session:sessionTitle,
            date:new Date(meetingDate)

        }
    );

    let sorted = meetings.sort((a, b) =>  a.date - b.date);

    let outputToHTML = document.getElementById('orderedList');
    document.getElementById('form').reset();


    let orderList = '<h2 id="meetingsHeading" style="text-align:center; display:block;">Meeting Schedule</h2><ul>';


                sorted.forEach(function(item, index) {

                orderList = orderList + '<li>'+ item.date.toLocaleDateString('en-US', dateOptions) + ': ' + item.session + ', ' + 
                item.speaker + '<button id=' + index + ' class="removeMeetingButton" onclick="removeDateSessionSpeaker(this.id)">Delete</button></li>';

                });

            orderList = orderList + '</ul>';

            outputToHTML.innerHTML = orderList;
    

            
            
    return false;

}

function removeDateSessionSpeaker(index) {

    meetings.splice(index, 1);

    let dateOptions = {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        weekday:'short',
        month:'short',
        day:'numeric',
        year:'numeric',
        timeZone:'UTC'

    }
    let outputToHTML = document.getElementById('orderedList');

    let orderList = '<h2 id="meetingsHeading style="text-align:center;">Meeting Schedule</h2><ul>';

            meetings.forEach(function(item, index) {

            orderList = orderList + '<li>'+ item.date.toLocaleDateString('en-US', dateOptions) + ': ' + item.session + ', ' + 
            item.speaker + '<button id=' + index + ' class="removeMeetingButton" onclick="removeDateSessionSpeaker(this.id)">Delete</button></li>';
        

            });

            orderList = orderList + '</ul>';

            outputToHTML.innerHTML = orderList;
        

    return false;

}