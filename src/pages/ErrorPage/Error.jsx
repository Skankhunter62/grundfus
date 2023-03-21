import React from 'react';
import {Helmet} from "react-helmet";

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Grundfos-Moscow.ru</title>
                <meta name="og::type" content="website"/>
                <meta name="google" content="notranslate"/>
            </Helmet>
            404
        </div>
    );
};

export default Error;