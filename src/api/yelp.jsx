import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer oRyQE4jg0D73a_TDqDQ8M7Dhk0fFf5pIVEkWbcgvbtxKLfw8wcVqxJyYU85eipQONx6jtNKaUMkuXAUdxwsPme_Eupvy5YzAklkv0VJpeXjGYNlEx7gGhS57c4NkZHYx'
  }
});