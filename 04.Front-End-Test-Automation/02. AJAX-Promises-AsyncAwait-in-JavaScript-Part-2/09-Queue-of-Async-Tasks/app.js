function createAsyncTask(id, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`Task ${id} failed`);
            } else {
                resolve(`Task ${id} completed after ${delay}ms`);
            }
        }, delay);
    });
}

class AsyncQueue {
    constructor() {
        this.queue = [];
        this.running = false;
    }

    enqueue(task) {
        this.queue.push(task);
        this.run();
    }

    async run() {
        if (this.running) return; 

        this.running = true;

        while (this.queue.length > 0) {
            const task = this.queue.shift(); 

            try {
                const result = await task();
                console.log(result); 
            } catch (err) {
                console.error(err); 
            }
        }

        this.running = false;
    }
}

const queue = new AsyncQueue();

document.querySelector('button').addEventListener('click', () => {
    console.log('Enqueuing async tasks...');

    queue.enqueue(() => createAsyncTask(1, 1000));
    queue.enqueue(() => createAsyncTask(2, 500));
    queue.enqueue(() => createAsyncTask(3, 1500));
    queue.enqueue(() => createAsyncTask(4, 700));
});
