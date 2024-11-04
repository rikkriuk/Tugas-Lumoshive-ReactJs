import React, { Component } from "react";
import Footer from "../components/Footer";
import DetailPost from "../components/DetailPost";
import { getDetailData, getAllData } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const DetailPostWrapper = () => {
   const params = useParams();
   const navigate = useNavigate();

   return <DetailPostContainer params={params} navigate={navigate} />;
}

class DetailPostContainer extends Component {
   state = {
      post: {},
      prev: {},
      next: {}
   }

   componentDidMount() {
      const { id } = this.props.params;
      this.fetchData(id);
   }

   fetchData = async (id) => {
      try {
         this.getPrevNextPost(id);
         const response = await getDetailData(id);
         const { data } = response;
         this.setState({
            post: data,
         });
      } catch (error) {
         console.log(error);
      }
   }

   getPrevNextPost = async (id) => {
      try {
         const response = await getAllData();
         const { data } = response;
         const currentIndex = data.findIndex((item) => item.id === id);
         
         const prevPost = currentIndex > 0 ? data[currentIndex - 1] : null;
         const nextPost = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;

         this.setState({
            prev: prevPost,
            next: nextPost,
         });
      } catch (error) {
         console.log(error);
      }
   }

   render() {
      return (
         <>
            <main className="bg-color min-h-80">
               <DetailPost 
               post={this.state.post} 
               navigate={this.props.navigate}
               prev={this.state.prev}
               next={this.state.next}
               fetchData={this.fetchData}
                />
            </main>
            <Footer />
         </>
      );
   }
}

export default DetailPostWrapper;
