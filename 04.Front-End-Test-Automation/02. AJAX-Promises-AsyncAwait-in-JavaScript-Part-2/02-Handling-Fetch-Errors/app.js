async function fetchDataWithErrorHandling() {

    try {
        const url = 'https://swapi.dev/api/people/1';
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('Response was not ok')
        } 
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.error('Fetch error:', error)
    }
    
}