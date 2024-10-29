import React, { Component } from 'react';
import { fetchGameDetail } from '../utils/api';
import NewsDetail from '../components/NewsDetail';

export default class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchGameDetail()
  }

  async fetchGameDetail() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      this.setState({ detail: data.results, loading: false });
    } catch(err) {
      console.log(err);
      this.setState({ loading: false });
    }
  }


  render() {
    return (
      <div className="news-detail-container">
        <div className="news-detail-header">
          <h1>NewsDetailContainer</h1>
          <button onClick={this.props.onBack}>Back</button>
        </div>
        {
          this.state.loading ?
          <p>Loading...</p> :
          <NewsDetail detail={this.state.detail} />
        }
      </div>
    );
  }
}