document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        selectable: true,
        initialView: 'timeGridWeek', headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Tex',
                start: '2022-03-05'
            },
            {
                title: 'Honey',
                start: '2022-03-07',

            },],
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
            console.log(body)
        }
    });
    calendar.render();
});