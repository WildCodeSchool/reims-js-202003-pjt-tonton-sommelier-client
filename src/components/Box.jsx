import React from 'react';
import {
  Link,
  // useParams,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';

function Box() {
  // const { boxId } = useParams();
  return (
    <div>
      <Link to="/">
        <BorderTopCard />
      </Link>
      <Link className="button" to="/descriptions/1">
        Tannin
      </Link>
      <Link className="button" to="/descriptions/2">
        Raisin
      </Link>
      <Link className="button" to="/descriptions/3">
        Tonneau
      </Link>
      <Link className="button" to="/descriptions/4">
        Diner
      </Link>
      <Link className="button" to="/descriptions/5">
        Region
      </Link>
      <Link className="button" to="/descriptions/6">
        Histoire
      </Link>
      <Link className="button1" to="/descriptions/7">
        Goût
      </Link>
      <Link className="button1" to="/descriptions/8">
        Vue
      </Link>
      <Link className="button1" to="/descriptions/9">
        Nez
      </Link>
    </div>
  );
}

export default Box;
