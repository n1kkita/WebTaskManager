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

        startDate.value = info.start.toISOString().split('T')[0];
        endDate.value = info.end.toISOString().split('T')[0];

        taskModalCreate.style.display = 'block';

        localStorage.setItem("start", info.start);
        localStorage.setItem("end", info.end);
    },
    eventClick: function (info){
        const event = info.event;
        console.log(event);
        taskForm.reset();

        taskModal.style.display = 'block';
        displayTaskInfo(event.title,event.extendedProps.description,event.startStr,event.endStr);
    }
});
calendar.render();
taskFormCreate.addEventListener("submit", function (e){
    e.preventDefault();
    create(new Date(localStorage.getItem("start")), new Date(localStorage.getItem("end")));
});
function create(start,end){
    let taskDescription = document.getElementById("task-description-create").value;
    let taskTitle = document.getElementById("task-title-create").value;

    console.log(start);
    console.log(end);
    calendar.addEvent({
        title: taskTitle,
        start: start,
        end: end,
        description: taskDescription,
        allDay: true,
        backgroundColor: 'green',
        textColor: 'white',
    });
    // Hide the modal
    taskModalCreate.style.display = 'none';
}
function displayTaskInfo(title,description,start,end){

    let titleEl = document.getElementById("task-title");
    let descriptionEl = document.getElementById("task-description");
    let startEl = document.getElementById("start-date");
    let endEl = document.getElementById("end-date");
    titleEl.textContent = title;
    descriptionEl.textContent =description;
    startEl.textContent = start;
    endEl.textContent = end;
}


document.querySelectorAll(".close").forEach(span=>{
    span.onclick = function() {
        taskModalCreate.style.display = 'none';
        taskModal.style.display = 'none';
    }
});


