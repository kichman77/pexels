export default {
  _query: '',
  page: 1,
  per_page: 8,
  get query(){
    return this._query
  },
  set query(value){
    return this._query = value
  }
}