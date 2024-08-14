import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',

  }
})
