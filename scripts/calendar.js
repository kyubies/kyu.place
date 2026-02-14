const currentDate = document.querySelector("#month-year");
daysTag = document.querySelector(".calendar-dates");
prevNextIcon = document.querySelectorAll(".leftright button");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(), // first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // last day of month
    lastDateofLastMonth = new Date(currYear, currMonth - 1, 0).getDate(); // last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 7; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag
}
renderCalendar();

prevNextIcon.forEach(button => {
    button.addEventListener("click", () => {
        currMonth = button.id === "prev-month" ? currMonth - 1 : currMonth + 1;
    renderCalendar();
    });
});