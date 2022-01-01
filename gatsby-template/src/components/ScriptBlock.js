import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";

const ScriptBlock = () => {
    return (
        <StaticQuery query={graphql`
            {
            wpcontent {
                registeredStylesheets {
                nodes {
                    src
                }
                }
                registeredScripts {
                nodes {
                    src
                }
                }
            }
            }      
        `} render={ props => (
            <Helmet>
            { props.wpcontent.registeredStylesheets.nodes.map((item) => (
                <links rel="stylesheet" href={`.${item.src}`} />
            )) }

            { props.wpcontent.registeredScripts.nodes.map((item) => (
                <script src={`.${item.src}`} />
            )) }
            </Helmet>
        )} />
    );
}
export default ScriptBlock;