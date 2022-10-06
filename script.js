function getAvailableCourses() {
    return fetch('https://golf-courses-api.herokuapp.com/courses/').then(
      function (response) {
        return response.json();
      }
    );
}
   
const lists = {
1: {name: 'Shopping list'},
2: {name: 'Honey do list'},
...
}

let courseOptionsHtml = '';
courses.forEach((course) => {
 courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
});

document.getElementById('course-select').innerHTML = courseOptionsHtml;