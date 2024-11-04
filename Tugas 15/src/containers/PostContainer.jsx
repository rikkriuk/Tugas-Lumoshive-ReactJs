import React, { Component } from 'react';
import PostList from '../components/PostList';
import Footer from '../components/Footer';
import { getListData } from '../utils/api';
import { Link } from 'react-router-dom';

export default class PostContainer extends Component {
   state = {
      posts: [],
      next: null,
      prev: null,
      currentPage: 1,
      totalPage: null,
   }

   componentDidMount() {
      this.fetchData();
   }
   
   fetchData = async (page = 1) => {
      try {
         const response = await getListData(page, 4);
         const { data, next, prev, pages } = response.data;
         this.setState({
            posts: data,
            next,
            prev,
            totalPage: pages,
         });
      }catch (error) {
         console.log(error);
      }
   }

   handlePrevButton = () => {
      const { prev } = this.state;
      if (prev) {
         this.fetchData(prev);
         this.setState({
            currentPage: this.state.currentPage - 1,
         });
      }
   }

   handleNextButton = () => {
      const { next } = this.state;
      if (next) {
         this.fetchData(next);
         this.setState({
            currentPage: this.state.currentPage + 1,
         });
      }
   }

   
  render() {
    return (
      <>
         <main className="container-fluid bg-color min-h-80">
            <div className="container">
               <p className="text-secondary"><Link className="text-decoration-none text-secondary" to={"/"}>Home</Link> &gt; Post (Page 1)</p>
               <h2 className="text-light fs-1">Posts</h2>
               <p className="text-light">All the articles I've posted</p>
               <div>
                  {this.state.posts.map((post) => (
                     <PostList key={post.id} post={post} />
                  ))}
               </div>
            </div>

            <div className="d-flex container justify-content-center align-items-center py-5 gap-4">
               <div>
                  <button onClick={this.handlePrevButton} disabled={this.state.prev === null} className="btn btn-outline-light">
                     <i className="bi bi-arrow-left me-3"></i>
                     Prev
                  </button>
               </div>
               <div>
                  <p className="text-light m-0">{this.state.currentPage} / {this.state.totalPage}</p>
               </div>
               <div>
                  <button onClick={this.handleNextButton} disabled={this.state.next === null} className="btn btn-outline-light">
                     Next
                     <i className="bi bi-arrow-right ms-3"></i>
                  </button>
               </div>
            </div>
         </main>
         <Footer />
      </>
    );
  }
}