var courseApi = "http://localhost:3000/courses";

function start(){
    getCourses(handleRenderCourses);
    handleCreateForm();
}

start();


//function 

function getCourses(callback){
    fetch(courseApi)
        .then((response)=>{
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback){
    fetch(courseApi, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
            //or //'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
        .then(function(response){
            return response.json();
        })
        .then(callback);
}


function handleDeleteCourse(id){
    fetch(courseApi + '/' + id, {
        method: 'DELETE'
    })
        .then(function(response){
            response.json();
        })
        .then(()=>{
            var courseItem = document.querySelector(".course-item-" + id);
            if(courseItem){
                courseItem.remove();
            }
        });
}

function handleRenderCourses(courses){
    var listCoursesBlock = document.querySelector(".list-courses");
    var htmls = courses.map((course)=>`
        <li class="course-item-$${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">xóa</button>
        </li>
    `);
    listCoursesBlock.innerHTML = htmls.join('');
}


function handleCreateForm(){
    var createBtn = document.querySelector("#btn-create");
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name,
            description
        };
        createCourse(formData, ()=>{
            getCourses(handleRenderCourses);
        });
    }
}

