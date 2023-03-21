import React from 'react';
import classes from './DocumentationTab.module.css'
import SingleDocument from "./SingleDocument/SingleDocument";

const DocumentationTab = ({doc_file}) => {
    console.log(doc_file)
    return (
        <div className={classes.documentsBlock}>
            <SingleDocument document={doc_file}/>
        </div>
    );
};

export default DocumentationTab;