import React from 'react'
//import Post from './Post'

export default ({post}) => {
    
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
        </div>
    </div>)
} 