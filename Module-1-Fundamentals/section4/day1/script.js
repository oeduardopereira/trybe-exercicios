const header = document.getElementById("header-container");
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
  }

const nonEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
nonEmergencyTasks[0].style.backgroundColor = 'rgb(165, 0, 243)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
  }

const footerm = document.getElementById('footer-container');
footerm.style.backgroundColor = 'rbg(0, 53, 51)';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';