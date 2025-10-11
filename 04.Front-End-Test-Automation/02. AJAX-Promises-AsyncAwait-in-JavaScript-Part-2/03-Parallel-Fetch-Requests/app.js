async function fetchParallel() {
  const url1 = 'https://swapi.dev/api/people/1'
  const url2 = 'https://swapi.dev/api/people/2'

  const p1 = await fetch(url1).then(res => res.json())
  const p2 = await fetch(url2).then(res => res.json())
  
  const result = await Promise.all([p1, p2])

  console.log(result[0]);
  console.log('================================');
  console.log(result[1]);
}