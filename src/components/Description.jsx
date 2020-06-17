import React from 'react';
import {
    Link,
    useParams,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';


const Description = () => {
    const { descriptionId } = useParams();
    
    return (
        <div>
            <Link to="/boxes/1">
                <BorderTopCard />
            </Link>
            <h1>
                hello from { descriptionId }
            </h1>
        </div>
    )
}

export default Description;
