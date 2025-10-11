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

function* taskGenerator() {
    yield createAsyncTask(1, 1000);
    yield createAsyncTask(2, 500);
    yield createAsyncTask(3, 1500);
    yield createAsyncTask(4, 700);
}

async function startAsyncGenerator(gen) {
    const iterator = gen();

    for (let result = iterator.next(); !result.done; result = iterator.next()) {
        try {
            const value = await result.value; 
            console.log(value);
        } catch (err) {
            console.error(err);
        }
    }
}

document.querySelector('button').addEventListener('click', () => {
    console.log('Starting async generator tasks...');
    startAsyncGenerator(taskGenerator);
});
