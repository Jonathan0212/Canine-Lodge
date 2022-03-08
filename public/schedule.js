document.addEventListener('DOMContentLoaded', async function () {
    var dogs = await callApi("api/forum", "GET")


    var dogObj = {}
    var idToName = {}
    dogs.forEach(dog => {
        dogObj[dog.pet_Name] = dog.id
        idToName[dog.id] = dog.pet_Name
    })
    console.log(dogObj)
    var events = await callApi("api/forum/schedule", "GET")
    events= events.map(event =>{
        event.title=idToName[event.dog_id]
        event.start= event.start_time
        event.end= event.end_time
        return event
    })
    console.log(events)
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        selectable: true,
        initialView: 'timeGridWeek', headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        },
        events
        ,
        select: async function (info) {
            const { value } = await Swal.fire({
                title: 'Enter the pets name',
                input: 'text',
                inputLabel: 'Pets Name',
                inputValue: "",
                showCancelButton: true,
                inputValidator: (value) => {
                    //   if (!value) {
                    //     return 'You need to write something!'
                    //   }
                }
            })


            var pName = value

            var start = info.startStr
            var end = info.endStr
            var body = {
                pName, start, end
            }
            var id = dogObj[body.pName]
            if(!id){
                return
            }
            body.id = id
            console.log(body)
            const data = await callApi("api/forum/schedule", "POST", body)
            console.log(data)
            calendar.addEvent({ ...body, title: body.pName });
        }
    });
    calendar.render();
});