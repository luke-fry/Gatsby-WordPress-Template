import React from 'react';
import Layout from '../components/Layout.js';
import Seo from '../components/Seo.js';
// import ScriptBlock from '../components/ScriptBlock.js';

const Page = ({ pageContext }) => {
    return (
        <Layout>
            <Seo yoastHead={pageContext.seo.fullHead} />
            {/* <ScriptBlock pageObj={pageContext} /> */}
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Layout>
    );
};
export default Page;