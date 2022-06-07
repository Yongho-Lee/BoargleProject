// Redux - Store
// need, index.js -> <Provider> <Provider/>

// import user from './store/userSlice';
// import product from './store/productSlice';

import { configureStore, createSlice } from '@reduxjs/toolkit'



let user = createSlice({
    name: 'user',
    initialState: 'user1'

})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]
})

export default configureStore({
    reducer: {
        // product : product.reducer,
        // user: user.reducer

        user : user.reducer,
        cart : cart.reducer

    }
})