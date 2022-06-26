import axios from 'axios'

export const api = axios.create({
  baseURL: "https://app-message-api.herokuapp.com/api/v1"
})