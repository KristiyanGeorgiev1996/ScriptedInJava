async function retryPromise(promiseFunc, retries = 3) {
    for (let index = 0; index < retries; index++) {
      console.log(`Attempt ${index + 1} of ${retries}`)
      
      try {
        const result = await promiseFunc()
        console.log('Success!')
        return result
      } catch (error) {
        console.log(`Attempt ${index + 1} failed: ${error}`)
        if(index === retries-1){
          throw error
        }
      }
    }
}



function unstablePromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Success')
    } else {
      reject('Fail')
    }
  })
}

function startRetry() {

  retryPromise(unstablePromise)
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error.message}`))

}

window.startRetry = startRetry;