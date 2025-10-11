async function fetchSequential() {
      const url1 = 'https://swapi.dev/api/people/1'
      const url2 = 'https://swapi.dev/api/people/2'

      const p1 = await fetch(url1).then(res => res.json())
      console.log(p1);
      
      const p2 = await fetch(url2).then(res => res.json())
      console.log(p2);
      
}