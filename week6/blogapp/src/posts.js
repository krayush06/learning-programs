import React, { Component } from 'react';
//import Post from './post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

loadPosts = () => {
  // Use your own custom English posts instead of fetching from the internet
  const posts = [
    {
      id: 1,
      title: "React Basics",
      body: "This post explains the basics of React including components, JSX, and rendering."
    },
    {
      id: 2,
      title: "Component Lifecycle",
      body: "Lifecycle methods like componentDidMount and componentDidCatch help you manage data and errors."
    },
    {
      id: 3,
      title: "State vs Props",
      body: "State is managed within the component, while props are passed from parent to child."
    },
    {
      id: 4,
      title: "Using JSX",
      body: "JSX allows you to write HTML in React. It makes your code cleaner and more readable."
    },
    {
      id: 5,
      title: "React Developer Tools",
      body: "React DevTools is a Chrome extension that lets you inspect your React component hierarchy in the browser."
    }
  ];

  // Directly update state with these posts
  this.setState({ posts });
};


  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
