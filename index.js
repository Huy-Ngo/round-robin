// Check local storage and initialize if not initalized already
if (!localStorage.hasOwnProperty('rr-scheduler')) {
    stored_tasks = [
        {id: 0, name: 'task test', elapsed: 10, total:30, status: false}
    ]
} else {
    stored_tasks = JSON.parse(localStorage['rr-scheduler'])
}

var app = new Vue({ 
    el: '#app',
    data: {
        tasks: stored_tasks
    }
});
