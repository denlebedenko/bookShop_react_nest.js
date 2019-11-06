import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import TokenStorage from '../../services/token.storage';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const tokenStorage = new TokenStorage();

interface Props {
    title: string;
    price: number;
    _id: string | undefined;
    addedBook: Function;
    removedBookFromCart: Function;
}
  
const  bookCountLength = (_id: string | undefined) => {
    const bookList: Array<String> = JSON.parse(tokenStorage.getBooks()) || [];
    const countBooksChoice = bookList.filter(book => book === _id).length;
    return countBooksChoice;
}

const CartItem:React.FC<Props> = ({title, price, _id, addedBook, removedBookFromCart}) => {

    const amount: number = bookCountLength(_id);
    const priceTotal: number = price * amount;

    return (
        <div>
            <Grid container direction="row" justify="space-between" className="cart_item">
                <p className="book_title">{title}</p>
                <Grid item className="categories">
                    <Grid container direction="row" justify="space-between">
                        <p className="amount">{amount}</p>  
                        <p className="price">{price}$</p>
                        <p className="price_total_count">{priceTotal}$</p>
                    </Grid>
                 </Grid>
                 <Grid>
                    <IconButton aria-label="delete" onClick={() => {addedBook(_id)}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={()=> {removedBookFromCart(_id)}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                 </Grid>
            </Grid>
        </div>
    );
};  

export default CartItem;
