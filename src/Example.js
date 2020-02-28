import React from 'react';
import Helmet from 'react-helmet';

const Example = (props) => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Trang Vi du" />
                <title>Trang vi du ne</title>
            </Helmet>
            <h1>Example</h1>
        </div>
    )
};

export default Example;
