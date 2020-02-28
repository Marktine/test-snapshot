import React from 'react';
import Helmet from 'react-helmet';

const Home = (props) => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Trang home ne" />
                <title>Trang Home Ne</title>
            </Helmet>
            <h1>HomePage</h1>
        </div>
    );
};

export default Home;
