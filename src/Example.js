import React from 'react';
import Helmet from 'react-helmet';

const Example = (props) => {
    const [title, setTitle] = React.useState('');
    React.useEffect(() => {
        setTimeout(() => {
            setTitle('Example Ne');
        }, 250);
    }, []);
    return (
        <div>
            <Helmet>
                <meta name="description" content="Trang Vi du" />
                <title>{title}</title>
            </Helmet>
            <h1>Example</h1>
        </div>
    )
};

export default Example;
