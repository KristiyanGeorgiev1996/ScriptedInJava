function getCircleArea(radius) {
    console.log(typeof radius  !== "number" 
      ? `We can not calculate the circle area, because we received a ${typeof radius}.` 
      : (Math.PI * radius ** 2).toFixed(2))
  }