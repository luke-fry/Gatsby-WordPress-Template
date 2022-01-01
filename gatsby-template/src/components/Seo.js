import React from 'react';
import Helmet from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

const Seo = (props) => {
    return(
        <Helmet>
            { ReactHtmlParser(props.yoastHead) }
        </Helmet>
    );
}
export default Seo;