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
        window.location.href=`calendar.html?name=${nameGroup}`;
    });
    linkToNewGroupEl.addEventListener("click", function () {
        // Получить значение параметра name из URL
        const urlParams = new URLSearchParams(window.location.search);
        const nameGroup = urlParams.get('name');

        // Теперь вы можете использовать значение nameGroup
        // например, отправить его в следующий запрос или выполнить какие-то действия с ним
        console.log(nameGroup); // Для примера, выведем его в консоль
    });
    availableGroups.prepend(linkToNewGroupEl);
});