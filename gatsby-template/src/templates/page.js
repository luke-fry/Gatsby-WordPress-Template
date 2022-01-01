import React from 'react';
import Layout from '../components/Layout.js';
import Seo from '../components/Seo.js';

const Page = ({ pageContext }) => {
    return (
        <Layout>
            <Seo yoastHead={pageContext.seo.fullHead}/>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Layout>
    );
};
export default Page;