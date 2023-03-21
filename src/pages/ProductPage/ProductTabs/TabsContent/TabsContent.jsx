import React from 'react';
import classes from './TabsContent.module.css'
import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";
import DocumentationTab from "../DocumentationTab/DocumentationTab";
import DefaultText from "../../../../components/UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const TabsContent = ({tabsFlag, product}) => {
    return (
        <div className={classes.contentTabs}>
            {
                tabsFlag
                    ? product.description
                        ? <DescriptionBlock product_description={product.description}/>
                        : <p>Описание отсутствует</p>
                    : product.acf.doc_file !== null
                        ? <DocumentationTab doc_file={product.acf.doc_file} />
                        : <DefaultText>Документации к данному товару не обнаружено!</DefaultText>
            }
        </div>
    );
};

export default TabsContent;