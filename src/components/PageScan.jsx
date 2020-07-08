import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCategory } from '../redux/Reducer';

import BorderTopCard from './BorderTopCard';
import './PageScan.css';

const PageScan = ({ dispatch }) => {
  const [result, setResult] = useState(null);
  const history = useHistory();

  useEffect(() => {
    dispatch(changeCategory(result));
  }, [result]);

  const handleScan = (data) => {
    if (data) {
      setResult(
        data,
      );
      history.push('/debutjeu');
    }
  };

  return (
    <div>
      <Link to="/home"><BorderTopCard /></Link>
      <div>
        <p className="TextPageScan">Mettez la caméra en face du QR Code</p>
      </div>
      <QrReader
        className="BoxScan"
        delay={300}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <span>{result}</span>
      <Link to="/debutjeu">yoyoyo</Link>
    </div>
  );
};

export default connect()(PageScan);
