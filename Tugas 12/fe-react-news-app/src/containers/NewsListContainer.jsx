import React, { Component } from 'react';
import NewsList from '../components/NewsList';
import { fetchGame } from '../utils/api';

export default class NewsListContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         news: [],
         loading: true,
      };
   }

   componentDidMount = () => {
      this.fetchNewsData();
   }

   fetchNewsData = async () => {
      try {
         const data = await fetchGame();
         this.setState({ news: data, loading: false });
      } catch(error) {
         console.log(error);
         this.setState({ loading: false });
      }
   }

   render() {
      const { news, loading } = this.state;
      return (
         <div className="news-list-container">
            <div className="news-list-title">
               <h1>News List Container</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque unde voluptate ad rerum vero numquam aperiam qui, ipsum quidem itaque quasi, praesentium excepturi expedita deleniti laudantium nam dolore quia perspiciatis!</p>

            </div>
            {loading ? (
               <p>Loading...</p>
            ) : (
               <NewsList news={news} onSelect={this.props.onSelect} />
            )}
         </div>
      );
   }
}