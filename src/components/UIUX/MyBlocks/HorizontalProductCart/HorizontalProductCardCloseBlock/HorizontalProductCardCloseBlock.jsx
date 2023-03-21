import React, {useEffect} from 'react';
import classes from './HorizontalProductCardCloseBlock.module.css'
import close_big from '../../../../../assets/icons/actions/close_big.svg'
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const HorizontalProductCardCloseBlock = ({product}) => {
    const {wishlistRemoveItem} = useActions()
    const {compare} = useTypedSelector(state => state)
    useEffect(() => { localStorage.setItem('compare', JSON.stringify(compare))}, [compare])

    return (
        <img src={close_big} alt="Закрыть" width={25} height={25} className={classes.closeImg} onClick={()=>wishlistRemoveItem(product)}/>
    );
};

export default HorizontalProductCardCloseBlock;