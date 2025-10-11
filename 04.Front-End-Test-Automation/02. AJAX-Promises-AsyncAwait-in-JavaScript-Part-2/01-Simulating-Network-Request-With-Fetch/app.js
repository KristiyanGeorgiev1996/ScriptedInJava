async function fetchData() {
   const url = 'https://swapi.dev/api/people/1';

   const response = await fetch(url)
   const data = await response.json()

   console.log(data); 
}