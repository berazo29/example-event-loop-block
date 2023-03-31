function callClick () {
  console.log('Clicked btn click me!')
  document.getElementById('clicked').innerText = 'clicked pressed!'
  document.getElementById('btn-clicked').disabled = true

  setTimeout(() => {
    document.getElementById('clicked').innerText = ''
    document.getElementById('btn-clicked').disabled = false
  }, 2000)
}

function wasteTimer () {
  const TIME = 3000000000
  
  console.log(`I am wasting ${TIME} ms ...`)
  for (let i = 0; i < TIME; i++) {
  }
  console.log(`Wasted ${TIME} ms.`)
}

function yieldingLoop(count, chunksize, callback, finished) {
  let i = 0;
  (function chunk() {
      let end = Math.min(i + chunksize, count);
      for ( ; i < end; ++i) {
          callback.call(null, i);
      }
      if (i < count) {
          setTimeout(chunk, 0);
      } else {
          finished.call(null);
      }
  })();
}

function wasteTimerImproved () {
  const TIME = 300000000
  document.getElementById('btn-wasted2').disabled = true
  console.log(`I will waste ${TIME} ms without blocking ...`)
  yieldingLoop(TIME, 1000000, (i) => {}, () => {
    console.log(`Done wasting ${TIME} of your without blocking`)
    document.getElementById('btn-wasted2').disabled = false
  })
}
