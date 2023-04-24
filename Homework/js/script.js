const makeRequest = ((method, url, body) => {
    return fetch(url, {
        method,  
        body      
    })
}) 


const makeRequestPut = ((elem, data) => {

    makeRequest('PUT', `https://jsonplaceholder.typicode.com/todos/${elem}`, data)
    .then((data) => {
        if(data.ok){
            return data.json()
        }
    })
    .then((data) => {            
        console.log(data)        
    })    

})


const makeRequestPost = ((data) => {

    makeRequest('POST', 'https://jsonplaceholder.typicode.com/todos/', data)
    .then((data) => {
        if(data.ok){
            return data.json()
        }
    })
    .then((data) => {            
        console.log(data)        
    })    

})


makeRequest('GET', 'https://jsonplaceholder.typicode.com/todos')
.then((data) => {
    if(data.ok){
        return data.json()
    }
})
.then((data) => {        

    createTodosList(data)

})
.catch((e) => {
    console.log(e)
})





const sortTask = ((data) => {

    const{completedTasks , inProgressTasks} = data.reduce((accumulator, item) => {
        if(item.completed){
            accumulator.completedTasks.push(item)
        }else{
            accumulator.inProgressTasks.push(item)
        }

        return accumulator

    },
    {
        completedTasks: [],
        inProgressTasks: []
    })  

    return {completedTasks , inProgressTasks}

})

const pushTaskInTodos = ((tasks, block, checked) => {

    tasks.forEach((item) => {
       
        const element = template.content.cloneNode(true)    
        element.querySelector('.user_id').textContent = `User Id : ${item.userId}`    
        element.querySelector('.task_text').textContent = item.title
        element.querySelector('.task_text').htmlFor = `checkbox_${item.id}` 
        element.querySelector('.checkbox').checked = checked
        element.querySelector('.checkbox').id = `checkbox_${item.id}`       
        element.querySelector('.task').id = item.id

        block.append(element)

    });


})



const createTodosList = ((data) => {   

    const template = document.querySelector('#template');

    const todos = document.createElement('div')    
    todos.classList.add('todos')

    const todosPlanned = document.createElement('div')
    todosPlanned.classList.add('todos_planned')

    const todosPlannedText = document.createElement('h1')
    todosPlannedText.textContent = 'Tasks waiting to be completed'
    todosPlannedText.classList.add('todos_style_text')


    const todosDone = document.createElement('div')
    todosDone.classList.add('todos_done')

    const todosDoneText = document.createElement('h1')
    todosDoneText.textContent = 'Completed tasks'
    todosDoneText.classList.add('todos_style_text')

    const buttonAddTask = document.createElement('button')
    buttonAddTask.textContent = 'Add new task +'
    buttonAddTask.classList.add('button_add_task_style')    
    
    todosPlanned.prepend(todosPlannedText)
    todosDone.prepend(todosDoneText)
    todos.prepend(todosPlanned)
    todos.append(todosDone)
    todos.prepend(buttonAddTask)


    const {completedTasks , inProgressTasks} = sortTask(data);

    pushTaskInTodos(completedTasks, todosDone, 'checked');

    pushTaskInTodos(inProgressTasks, todosPlanned);


    todos.addEventListener('click', function(event){

        if(event.target.classList == 'btn_close'){

            removeTask(event, data)

        }else if(event.target.classList == 'checkbox'){

            checkTask(event, data, todosDone, todosPlanned)

        }
               
    })


    buttonAddTask.addEventListener('click', function(){

        addTask(data, template, todosPlanned)

    })


    document.body.prepend(todos)

})





const addTask = ((data, template, todosPlanned) => {
    
    const title = prompt('Enter task:')

    if(title !== '' && title !== null){        

        const newTask = JSON.stringify({

            "userId": 15,
            "id": data.length + 1,
            "title": title,
            "completed": false

        })

        data.push(JSON.parse(newTask))

        const element = template.content.cloneNode(true)  
        element.querySelector('.user_id').textContent = `User Id : ${Math.floor(Math.random() * (15 - 1) + 1)}`
        element.querySelector('.task_text').textContent = title
        element.querySelector('.task_text').htmlFor = `checkbox_${data.length}`
        element.querySelector('.checkbox').id = `checkbox_${data.length}`
        element.querySelector('.task').id = data.length
        
        todosPlanned.append(element)

        
        makeRequestPost(newTask)
        
    }else if(title == ''){
        alert('Empty line, please try again')
    }else{
        alert('Cancel')
    }

})




const removeTask = ((event, data) => {
    
    const elem = data[event.target.closest('.task').id - 1]

    makeRequest('DELETE', `https://jsonplaceholder.typicode.com/todos/${elem.id}`)
    .then((data) => {
        if(data.ok){
            return data.json()
        }
    })
    .then((data) => {            
        console.log(data)        
    })    

    event.target.closest('.task').remove()    

})

const checkTask = ((event, data, todosDone, todosPlanned) => {       

    const elem = data[event.target.closest('.task').id - 1];
    let newElem = {};
        
    if(event.target.checked){   

        setTimeout(() => {

            todosDone.append(event.target.closest('.task')) 
            
        }, 500);
        
        
   
        newElem = JSON.stringify({
            
            "userId": elem.userId,
            "id": elem.id,
            "title": elem.title,
            "completed": true
        
        })

        

    }else{

        setTimeout(() => {

            todosPlanned.append(event.target.closest('.task')) 

        }, 500);

        

        newElem = JSON.stringify({
            
            "userId": elem.userId,
            "id": elem.id,
            "title": elem.title,
            "completed": false
        
        })

        

    }   
    
    makeRequestPut(elem.id, newElem)

 
})




