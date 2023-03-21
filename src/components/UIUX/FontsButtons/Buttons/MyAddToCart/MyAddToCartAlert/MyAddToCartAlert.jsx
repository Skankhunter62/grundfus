import React from 'react';
import {Alert, Slide, Snackbar} from "@mui/material";

const MyAddToCartAlert = ({alertOpen, openChange}) => {
    function TransitionLeft(props) { return <Slide {...props} direction="right" /> }
    const handleClose = (event, reason) => { openChange(false)};
    return (
        <Snackbar open={alertOpen} TransitionComponent={TransitionLeft} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Товар добавлен в корзину
            </Alert>
        </Snackbar>
    );
};

export default MyAddToCartAlert;