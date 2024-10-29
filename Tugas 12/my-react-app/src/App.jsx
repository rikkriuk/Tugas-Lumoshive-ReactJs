import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Komponen telah dimuat dan ditampilkan');
  }

  componentDidUpdate() {
    console.log(this.props.message)
    console.log('Komponen telah diperbarui');
  }

  componentWillUnmount() {
    console.log('Komponen dihapus dari DOM');
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!',
      showHello: true,
    }

    console.log('Constructor dipanggil dan komponen sudah siap');
  }

  changeMessage = () => {
    this.setState({ message: 'Hello, World!' });
  }

  showHideHello = () => {
    this.setState({ showHello: !this.state.showHello });
  }

  render() {
    return (
      <div>
        
        <button onClick={this.changeMessage}>Change Message</button>
        <button onClick={this.showHideHello}>Show Hello</button>
        {
          this.state.showHello && <Hello message={this.state.message} />
        }
      </div>
    );
  }
}

export default App;