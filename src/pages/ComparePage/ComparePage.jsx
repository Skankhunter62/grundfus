import React from 'react';
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import MyEmptyComponent from "../../components/UIUX/MyBlocks/MyEmptyComponent/MyEmptyComponent";
import FullCompareList from "./FullCompareList/FullCompareList";
import {Helmet} from "react-helmet";

const ComparePage = () => {
    const {compare} = useTypedSelector(state => state)
    return (
        <>
            <Helmet>
                <title>Grundfos-Moscow.ru</title>
                <meta name="theme-color" content="#FFFFFF"/>
                <meta property="og:title" content="Grundfos-Moscow.ru"/>
                <meta property="og:url" content="https://rusgetter.store/compare" />
            </Helmet>
            { compare.length !== 0 ? <FullCompareList /> : <MyEmptyComponent pageTitle='Список сравнения пуст' />}
        </>
    );
};

export default ComparePage;