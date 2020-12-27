import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import FetchedPosts from '../components/FetchedPosts'
import PostForm from '../components/PostForm'
import Post_s from '../components/Post_s' 
import '../pages/StyleN.css'

 export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '1100px'}}>  
                   {<div className="container pt-3">
                    <div className="row">
                        <div className="col"> 
                              <PostForm/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"> 
                             <h3>current event</h3>
                             <Post_s/>
                         </div>
                         <div className="col"> 
                            <h3>past events</h3>
                            <FetchedPosts/>
                        </div>
                    </div>
                </div> }       
            </Container>
        )
    }
}  

