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
        duration: 60,
        last: -1,
        status: false,
        current: stored_tasks.filter(task => task.status = true)[0].id
    },
    methods: {
        /**
         * Add a new task to the queue
         */
        add_task: function() {
            for (task of this.tasks)
                if (task.id > this.last) this.last = task.id
            console.log(this.last)
            this.tasks.push({
                id: this.last + 1,
                name: this.name,
                total: this.duration,
                elapsed: 0,
                status: false
            })
            localStorage.setItem('rr-scheduler', JSON.stringify(this.tasks))
        },
        /**
         * Reset the scheduler, set everything to default value.
         */
        reset_all: function() {
            this.tasks = []
            this.last = -1
            this.duration = 60
            localStorage.setItem('rr-scheduler', '[]')
            console.log('Reset everything.')
        },
        /**
         * Remove a task when the remove button is clicked.
         * @param {MouseEvent} event 
         */
        remove_task: function(event) {
            task_id = event.target.id.split('-')[1]
            this.tasks = this.tasks.filter(task => task.id != task_id)
            localStorage.setItem('rr-scheduler', JSON.stringify(this.tasks))
        },
        /**
         * Run or stop the scheduler.
         */
        toggle_status: function() {
            this.status = !this.status
            if (this.status) {
                
            }
            else stop()
        }
    }
});
