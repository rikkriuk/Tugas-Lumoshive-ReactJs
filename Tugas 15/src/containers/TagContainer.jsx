import React, { Component } from 'react';
import TagsList from '../components/TagsList';
import Footer from '../components/Footer';

export default class TagContainer extends Component {
  render() {
    return (
      <>
         <main className="container-fluid bg-color min-h-80">
            <TagsList />
         </main>

         <Footer />
      </>
    );
  }
}