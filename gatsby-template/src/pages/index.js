import React, { useEffect } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout.js';

const Index = () => {
    useEffect()
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
                        }
                    }
                }
            }
        `} render={ props => (
            <Layout>
                <h1>{props.allWpPage.edges[0].node.title}</h1>
                <div dangerouslySetInnerHTML={{__html: props.allWpPage.edges[0].node.content}} />
            </Layout>
        )} /> 
    );
};
export default Index;