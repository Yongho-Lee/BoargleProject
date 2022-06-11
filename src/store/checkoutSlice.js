
import { createSlice } from '@reduxjs/toolkit'



let checkout = createSlice({
    name: 'checkout',
    initialState: [],
    reducers : {
        // changeName(state, a){
        //     state[a.payload].name = 'john'
        // },
        // changeAge(state, a){
        //     state[1].age += a.payload
        // }
        toCheckOut(state, action) {
            let checkOutStorage = action.payload;
            

        }

    }

})

export let { toCheckOut } = checkout.actions;
export default checkout;