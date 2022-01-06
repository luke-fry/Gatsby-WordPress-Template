import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout.js';
import Seo from '../components/Seo.js';
import ScriptBlock from '../components/ScriptBlock.js';

const Index = () => {
    return (
        <StaticQuery query={graphql`
            {
                allWpPage(filter: {isFrontPage: {eq: true}}) {
                    edges {
                        node {
                            content
                            date(formatString: "Do MMMM YYYY")
                            title
                            uri
                            slug
                            status
                            template {
                                templateName
                            }
                            isFrontPage
                            databaseId
                            featuredImage {
                                node {
                                    sourceUrl
                                    altText
                                    uri
                                    title
                                    template {
                                        templateName
                                    }
                                }
                            }
                            link
                            seo {
                                fullHead
                            }
                        }
                    }
                }
            }
        `} render={ props => (
            <Layout>
                <Seo yoastHead={props.allWpPage.edges[0].node.seo.fullHead}/>
                {/* <ScriptBlock pageObj={props.allWpPage.edges[0].node} /> */}
                <h1>{props.allWpPage.edges[0].node.title}</h1>
                <div dangerouslySetInnerHTML={{__html: props.allWpPage.edges[0].node.content}} />
            </Layout>
        )} /> 
    );
};
export default Index;