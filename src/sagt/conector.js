import axios from 'axios'
const port = normalizaPort(process.env.PORT || '3099');

const client = axios.create({
  baseURL: `http://localhost:${port}/api`,
  json: true
})

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  return false;
}

export default {
  async execute (method, resource, data) {
    // let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`
    //   }
    }).then(req => {
      return req.data.data
    })
  },
  list (collection) {
    return this.execute('get', `/${collection}`)
  },
  get (collection, id) {
    return this.execute('get', `/${collection}/${id}`)
  },
  save (collection, data) {
    if (data.id) return this.execute('put', `/${collection}/${data.id}`, data) 
    else return this.execute('post', `/${collection}`, data)
  },
  delete (collection, id) {
    return this.execute('delete', `/${collection}/${id}`)
  }
}