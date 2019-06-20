import React from 'react'

const API_URL = (process.env.NODE_ENV !== 'production')
 ? 'http://localhost:5000/cms-demo-a72bb/asia-northeast1/helloWorld'
 : 'https://asia-northeast1-cms-demo-a72bb.cloudfunctions.net/helloWorld'

const Blog = () => {
  (async() => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log( data );
  })();

  return (
    <div>何かコンテンツ置く</div>
  );
};

export default Blog;

