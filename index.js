require('dotenv').config() // Import dotenv and configure it
const express = require('express') // Import express
const app = express(); // Make an express app
const port = 3000; // Port number

// If there is a request at '/' then we send a response of Hello World
const data = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 92,
    "public_gists": 4,
    "followers": 30384,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-08-30T23:09:51Z"
  }

app.get('/' ,(req,res) => {
    res.send('Hello World');
})

app.get('/twitter',(req,res) => {
    res.send('hiteshjdotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please login at Chai aur Code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github',(req,res) => {
    res.json(data);
})

app.listen(process.env.PORT,() => {
    console.log(`Example app listening at ${process.env.PORT}`)
})

