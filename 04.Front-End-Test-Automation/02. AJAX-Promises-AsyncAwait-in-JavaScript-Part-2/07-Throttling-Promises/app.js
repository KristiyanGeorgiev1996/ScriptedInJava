function createPromise(id, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise ${id} resolved after ${delay}ms`);
        }, delay);
    });
}

function throttlePromises(promises, concurrency = 2) {
    return new Promise((resolve) => {
        const results = [];
        let inProgress = 0;
        let index = 0;

        function next() {
            if (index >= promises.length && inProgress === 0) {
                resolve(results);
                return;
            }

            while (inProgress < concurrency && index < promises.length) {
                const currentIndex = index;
                const promise = promises[currentIndex]();
                index++;
                inProgress++;

                promise
                    .then((result) => {
                        results[currentIndex] = result;
                    })
                    .catch((err) => {
                        results[currentIndex] = `Error: ${err}`;
                    })
                    .finally(() => {
                        inProgress--;
                        next(); 
                    });
            }
        }

        next();
    });
}

const promisesArray = [
    () => createPromise(1, 2000),
    () => createPromise(2, 1000),
    () => createPromise(3, 1500),
    () => createPromise(4, 500),
    () => createPromise(5, 1200)
];

document.querySelector('button').addEventListener('click', async () => {
    console.log('Starting throttled promises...');
    const results = await throttlePromises(promisesArray, 2);
    console.log('All promises resolved:');
    console.log(results);
});
