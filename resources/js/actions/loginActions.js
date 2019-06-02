import axios from 'axios'

export function login (credentials) {
  return (dispatch) => {
    return axios.post(`/api/auth`, credentials)
  }
}