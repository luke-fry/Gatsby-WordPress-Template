import React from 'react'
import Layout from '../components/Layout.js';

const Post = ({pageContext}) => (
    <Layout>
        <Seo yoastHead={pageContext.seo.fullHead} />
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
);
export default Post;