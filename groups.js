const createGroupForm = document.getElementById("create-group-form");
const availableGroups = document.getElementById("available-groups");


createGroupForm.addEventListener("submit",function (ev) {
    ev.preventDefault();

    let nameGroup = document.getElementById("group-name-create").value;
    let linkToNewGroupEl = document.createElement("div");
    linkToNewGroupEl.innerHTML =
        `<div class="text-container group-link">
            <div>
            <a>${nameGroup}</a>
            </div>
            <div>
            →
            </div>
        </div>`;
    linkToNewGroupEl.addEventListener("click",function (){
        window.location.href="calendar.html";
    })
    availableGroups.prepend(linkToNewGroupEl);
});