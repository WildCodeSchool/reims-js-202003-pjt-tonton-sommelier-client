import React from 'react';
import QrReader from 'react-qr-reader';
import BorderTopCard from './BorderTopCard';
import './PageScan.css';

class PageScan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };
  }

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <BorderTopCard />
        <div>
          <p className="TextPageScan">Mettez la caméra en face du QR Code</p>
        </div>
        <QrReader
          className="BoxScan"
          delay={300}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <span>{result}</span>
      </div>
    );
  }
}

export default PageScan;
