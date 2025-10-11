function multiplePromises() {
      const p1 = new Promise((resolve) => setTimeout(
            ()=> resolve('resolved 1'), 1000)
      )
      const p2 = new Promise((resolve) => setTimeout(
            ()=> resolve('resolved 2'), 2000)
      )
      const p3 = new Promise((resolve, reject) => setTimeout(
            ()=> reject('resolved 3'), 3000)
      )

      Promise.allSettled([p1,p2,p3]).then(result => {
            
            result.forEach(p => console.log(p.status, p.value || p.reason))
            
      })
}