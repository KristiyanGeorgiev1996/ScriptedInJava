async function fetchWithTimeout(url = "https://swapi.dev/api/people/1", timeout = 2000) {
    
    try {
        const response = await Promise.race([
            fetch(url).then(response => response.json()),
            new Promise(
                (resolve, reject)=> setTimeout(
                    ()=> reject(new Error('Timeout')), timeout
                )
            )
        ])
        console.log(response)
    } catch (error) {
        console.error(error.message)
    }

}