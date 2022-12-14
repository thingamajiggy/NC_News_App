# Setup Instructions

- To get the backend project for this app, clone this github url.

```
git@github.com:thingamajiggy/My_first_backend_project_newHosting.git
```

- After cloning this url, npm install. 

```
npm i 
```

If you want to know what npm packages you are going to be installed, check 'pacakge.json'file.

```
"axios": "^0.27.2",
"cors": "^2.8.5",
"react": "^18.2.0",
"react-router-dom": "^6.4.1",
```

# Introduction to this app

This is a mock-news website. Articles are sorted by topics and authors. Existing comments from the backend are displayed below each article, but also you can add your own new comments. 

A very simple user system exists, without proper authentication. Instead, the user is held in as state in `User` context - you can see the file name `User.jsx` in the folder name `context`. Therefore, only existing users who are in the user database(in the backend) can login. 

