import React, { Component } from 'react'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'

export default class NotFoundContainer extends Component {
  render() {
    return (
      <>
         <main className="container-fluid min-h-80 bg-color">
            <NotFound />
         </main>
         <Footer />
      </>
    )
  }
}