// Redux - Store
// need, index.js -> <Provider> <Provider/>

import { configureStore } from '@reduxjs/toolkit'

import user from './store/userSlice.js'
import cart from './store/cartSlice.js'




export default configureStore({
    reducer: {
        // product : product.reducer,
        // user: user.reducer

        user : user.reducer,
        cart : cart.reducer,

    }
})