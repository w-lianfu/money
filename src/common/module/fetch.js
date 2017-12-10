let HOST = 'http://127.0.0.1:3000/'

let defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

// 全局对象
let Fetch  = {
  // 使用 fetch + async await 的方式请求接口
  async get(url) {
    try {
      return await fetch(HOST + url, options = defaultOptions).then(response => response.json())
    } catch(err) {
      console.log('\n--- Fetch error:\n' + err + '\n---\n')
    }
  }
}

/*
// 使用 fetch + callback 的方式请求接口
Fetch.get = (url, cb) => {
  fetch(HOST + url, options=defaultOptions).then(response => {
    console.log('response: ', response)
    return response.json()
  }).then(json => {
    console.log('json: ', json)
    cb(json)
  }).catch(err => {
    console.log('\n--- Fetch error:\n' + err + '\n---\n')
  })  
}
*/

export default Fetch
