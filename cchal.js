bestProfit = arr => {
  const buy = arr[0]
  const sell = 0
  const index = 0
  for(let i=1; i<arr.length; i++) {
    if (sell < arr[i]) {
      sell = arr[i]
      index = i
    }
  }
  for(let i=1; i<index; i++){
    if (buy > arr[i]) {
      buy = arr[i]
    }
  }
  profit = sell - buy
  profit <= 0 ? console.log(`There was no profit`) : console.log(`The max profit is ${profit} if bought at ${buy} and sold at ${sell}`) 
}

const stocks = [100, 10, 20, 22, 1, 9]

bestProfit(stocks)