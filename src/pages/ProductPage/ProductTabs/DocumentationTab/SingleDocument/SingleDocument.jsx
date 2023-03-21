import React from 'react';
import classes from './SingleDocumnet.module.css'
import document_icon from '../../../../../assets/icons/document_icon.svg.png'

const SingleDocument = ({document}) => {
    return (
        <a target='_blank' rel="noreferrer" href={document.url} className={classes.documentBlock}>
            <div className={classes.imgBlock}>
                <img src={document_icon} className={classes.img} alt=''/>
            </div>
            <div className={classes.documentTitle}>
                {document.title}
            </div>
        </a>
    );
};

export default SingleDocument;