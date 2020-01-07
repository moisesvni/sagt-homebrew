import axios from 'axios'

const client = axios.create({
  // baseURL: 'https://pochetemax.herokuapp.com/',
  baseURL: 'http://localhost:3024/',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
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
    return this.execute('get', `/${collection}/list`)
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