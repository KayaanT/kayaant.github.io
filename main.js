document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var todaysHours = document.querySelector('.opening-days tr:nth-child(' + today.getDay() + ')');
    todaysHours.classList.add('bold')
});

function showDiv() {
    document.getElementById('form').style.display = "block";
}