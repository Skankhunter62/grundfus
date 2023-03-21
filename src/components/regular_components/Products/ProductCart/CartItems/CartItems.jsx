import React, {useState, useEffect} from 'react';
import CartProductCard from "../../../../UIUX/MyBlocks/CartProductCard/CartProductCard";
import TotalPriceBlock from "./TotalPriceBlock/TotalPriceBlock";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../../store/hooks/useActions";
import MyRemoveAllItems from "../../../../UIUX/MyFunctionalComponents/MyRemoveAllItems/MyRemoveAllItems";
import OrderComponent from "../../../../UIUX/MyForms/OrderComponent/OrderComponent";
import MySuccessOrder from "../../../../UIUX/MyForms/MySuccessOrder/MySuccessOrder";

const CartItems = ({backSetOrderAnswer, orderAnswer}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const getTotal = (totalNew) => { setTotalPrice(totalNew) };

    const [selected, setSelected] = useState(false)
    const checkSelected = () => { setSelected(!selected) }

    const {cartRemove, cart} = useTypedSelector(state => state)
    const {removeCartList, removeItem, addCartItems, massRemoveCartItems, masRemoveItems} = useActions()
    const [isOrderVisible, setIsOrderVisible] = useState(false)
    const [products, setProducts] = useState([])
    const stateName = 'cart'

    const [loading, setLoading] = useState(false)
    const changeSetLoading = () => setLoading(true)

    const [isEmptyFields, setIsEmptyFields] = useState(false)
    const changeEmptyFields = () => setIsEmptyFields(true)

    useEffect(() => { if (cart.length !== 0) { cart.map(cartItem => setProducts(oldArray => [...oldArray, {product_id: cartItem.id, quantity: cartItem.quantity}])) } }, [])

    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [deliveryMethod, setDeliveryMethod] = useState('local_pickup')
    const [orderObject, setOrderObject] = useState({ name: '',  surname: '',  patronymic: '',  phone: '',  email: '',  address: '',  customer_note: ''})

    const newOrder = {
        payment_method: paymentMethod,
        billing: {
            first_name: orderObject.name + ' ' + orderObject.patronymic || 'Иван',
            address_1: orderObject.address || 'г. Москва',
            last_name: orderObject.surname || 'Иванов',
            country: "RU",
            email: orderObject.email || 'ivanov@mail.ru',
            phone: orderObject.phone || '89299999999'
        },
        shipping: {
            first_name: orderObject.name + ' ' + orderObject.patronymic || 'Иван',
            address_1: orderObject.address || 'г. Москва',
            last_name: orderObject.surname || 'Иванов',
            country: "RU",
            email: orderObject.email || 'ivanov@mail.ru',
            phone: orderObject.phone || '89299999999'
        },
        customer_note: orderObject.customer_note,
        line_items: products,
        shipping_lines: [
            {
                method_title: deliveryMethod === 'local_pickup' ? 'Самовывоз' : 'Доставка курьером',
                method_id: deliveryMethod,
                total: '0',
                total_tax: '0'
            }
        ]
    }

    useEffect(() => {
        if(orderAnswer.id){
            setLoading(false)
            cart.map(product => masRemoveItems(product))
            localStorage.removeItem(stateName)
        }
    }, [orderAnswer])

    return (
        <div>
            <MyRemoveAllItems
                checkSelected={checkSelected}
                stateName={stateName}
                stateObject={cart}
                stateRemoveObject={removeItem}
                stateMassObject={cartRemove}
                stateMassRemoveObject={removeCartList}
                stateMassAddItemsObject={addCartItems}
                stateMassRemoveAllObject={massRemoveCartItems}
            />
            {
                orderAnswer.status !== 'pending'
                    ?
                        <>
                            <>
                                {cart.map(product => <CartProductCard selected={selected} product={product} key={product.id} getTotal={getTotal}/>)}
                            </>
                            <>
                            {isOrderVisible ? (
                                <OrderComponent
                                    isEmptyFields={isEmptyFields}
                                    setPaymentMethod={setPaymentMethod}
                                    paymentMethod={paymentMethod}
                                    setDeliveryMethod={setDeliveryMethod}
                                    deliveryMethod={deliveryMethod}
                                    setOrderObject={setOrderObject}
                                    orderObject={orderObject}
                                    loading={loading}
                                />) : <></>}
                            </>
                            <>
                                <TotalPriceBlock changeEmptyFields={changeEmptyFields} changeSetLoading={changeSetLoading} backSetOrderAnswer={backSetOrderAnswer} totalPrice={totalPrice} setIsOrderVisible={setIsOrderVisible} newOrder={newOrder} order={isOrderVisible}/>
                            </>
                        </>
                    : <MySuccessOrder orderId={orderAnswer.id} />
            }
        </div>
    );
};

export default CartItems;