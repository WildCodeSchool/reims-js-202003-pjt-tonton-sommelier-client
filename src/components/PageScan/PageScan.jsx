import React from 'react';
import QrReader from 'react-qr-reader';
import BorderTopCard from '../BorderTop/BorderTopCard';
import './PageScan.css';

class PageScan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 'No result' };
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
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>
          {result}
        </p>
      </div>
    );
  }
}

export default PageScan;
