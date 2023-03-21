import React from 'react';
import DefaultText from "../../../../UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const MyCompareProductAttributes = ({sliderCounter, subarray, attributeName}) => {

    return (
        <React.Fragment>
            {
                subarray.length !== 0
                    ? (
                        subarray[sliderCounter].map((item, index) => (
                            item.attributes.map(itemAttr => (
                                itemAttr.name === attributeName
                                    ?  <DefaultText column={index+1} key={Math.random()}>{itemAttr.options[0]}</DefaultText>
                                    :  null
                            ))
                        ))
                    ) : <p>Характеристик или товаров для сравнения не обнаружено</p>
            }
        </React.Fragment>
    );
};

export default MyCompareProductAttributes;