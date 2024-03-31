let calendarEl = document.getElementById('calendar');

const taskModalCreate = document.getElementById('task-modal-create');
let taskFormCreate = document.getElementById("task-form-create");
const taskModal = document.getElementById('task-modal');
let taskForm = document.getElementById("task-form");

let calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: 'dayGridMonth',
    themeSystem:'bootstrap5',
    selectable: true,

    headerToolbar: {
        left: 'prev today',
        center: 'title',
        right: 'next'
    },
    locale: 'uk',
    droppable: true,

    eventStartEditable: true,
    expandRows:true,
    showNonCurrentDates: false,
    fixedWeekCount:false,
    navLinks: true,
    nowIndicator: false,
    eventTextColor: 'white',

    select: function(info) {
        let startDate = document.getElementById('start-date-create');
        let endDate = document.getElementById('end-date-create');

        taskFormCreate.reset();

        const startDateFormatted =
            info.start.getFullYear() + '-' +
            ('0' + (info.start.getMonth() + 1)).slice(-2) + '-' +
            ('0' + info.start.getDate()).slice(-2) + 'T' +
            ('0' + info.start.getHours()).slice(-2) + ':' +
            ('0' + info.start.getMinutes()).slice(-2);

        const endDateFormatted =
            info.end.getFullYear() + '-' +
            ('0' + (info.end.getMonth() + 1)).slice(-2) + '-' +
            ('0' + info.end.getDate()).slice(-2) + 'T' +
            ('0' + info.end.getHours()).slice(-2) + ':' +
            ('0' + info.end.getMinutes()).slice(-2);

        startDate.value = startDateFormatted;
        endDate.value = endDateFormatted;

        taskModalCreate.style.display = 'block';
    },
    eventClick: function (info){
        const event = info.event;
        console.log(event);
        taskForm.reset();

        taskModal.style.display = 'block';
        displayTaskInfo(event.title,event.extendedProps.description,event.start,event.end);
    }
});
calendar.render();
taskFormCreate.addEventListener("submit", function (e){
    e.preventDefault();
    create();
});
function create(){
    let taskDescription = document.getElementById("task-description-create").value;
    let taskTitle = document.getElementById("task-title-create").value;
    let startDate = document.getElementById('start-date-create');
    let endDate = document.getElementById('end-date-create');


    calendar.addEvent({
        title: taskTitle,
        start: new Date(startDate.value),
        end: new Date(endDate.value),
        description: taskDescription,
        allDay: true,
        backgroundColor: 'green',
        textColor: 'white',
    });

    taskModalCreate.style.display = 'none';
}
function displayTaskInfo(title,description,start,end){

    let titleEl = document.getElementById("task-title");
    let descriptionEl = document.getElementById("task-description");
    let startEl = document.getElementById("start-date");
    let endEl = document.getElementById("end-date");
    titleEl.textContent = title;
    descriptionEl.textContent =description;
    startEl.textContent = formatDateForTaskModal(start);
    endEl.textContent = formatDateForTaskModal(end);
}


document.querySelectorAll(".close").forEach(span=>{
    span.onclick = function() {
        taskModalCreate.style.display = 'none';
        taskModal.style.display = 'none';
    }
});

function formatDateForTaskModal(date) {
    const months = [
        "січня",
        "лютого",
        "березня",
        "квітня",
        "травня",
        "червня",
        "липня",
        "серпня",
        "вересня",
        "жовтня",
        "листопада",
        "грудня"
    ];

    const currentDate = new Date();
    const messageDate = new Date(date);

    const day = messageDate.getDate();
    const month = months[messageDate.getMonth()];
    const year = messageDate.getFullYear();

    if (currentDate.getFullYear() === year) {
        return `${day} ${month}`;
    } else {
        return `${day} ${month}, ${year}`;
    }
}
