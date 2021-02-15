import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7aFhvTlFnL4AoxW8yqdIYV8Lyr6V1aYlQBRaF6LtPU8'
    }  
})