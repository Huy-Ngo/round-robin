// Check local storage and initialize if not initalized already
if (!localStorage.hasOwnProperty('rr-scheduler')) {
    stored_tasks = []
} else {
    stored_tasks = JSON.parse(localStorage['rr-scheduler'])
}

const app = new Vue({ 
    el: '#app',
    data: {
        tasks: stored_tasks,
        name: '',
        duration: 0
    },
    methods: {
        add_task: function(event) {
            this.tasks.push({
                name: this.name,
                total: this.duration,
                elapsed: 0,
                status: false
            })
            localStorage.setItem('rr-scheduler', JSON.stringify(stored_tasks))
            console.log('Successful.')
        }
    }
});
