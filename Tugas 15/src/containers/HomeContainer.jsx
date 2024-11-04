import React, { Component } from 'react'
import About from '../components/About'
import PostList from '../components/PostList'
import Footer from '../components/Footer'
import { getListData } from '../utils/api'
import { Link } from 'react-router-dom'

export default class HomeContainer extends Component {
   state = {
      posts: []
   }

   componentDidMount() {
      this.fetchData();
   }
   
   fetchData = async (page = 1) => {
      try {
         const response = await getListData(page, 3);
         const { data } = response.data;
         this.setState({
            posts: data,
         });
      }catch (error) {
         console.log(error);
      }
   }

   render() {
      return (
         <>
            <main className="min-h-80 bg-color">
               <About />
               <div className="container mt-4">
                  {this.state.posts.map((post) => (
                     <PostList key={post.id} post={post} />
                  ))}
               </div>

               <div className="container d-flex container justify-content-center align-items-center py-5">
                  <Link to={"/posts"} className="btn btn-outline-light">
                     All Posts
                     <i className="bi bi-arrow-right ms-3"></i>
                  </Link>
               </div>
            </main>
            <Footer />
         </>
      )
   }
}

