
import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState: [
        //{id : 2, name : 'Grey Yordan', stock : 1}
      ],


    reducers:{
        increaseCount(state, action){
            let num = state.findIndex((a)=>{
                return a.id === action.payload
            })
            state[num].stock++;
        },

        decreaseCount(state, action){
            let num = state.findIndex((a)=>{
                return a.id === action.payload
            })
            if(state[num].stock === 0 || state[num].stock < 0) {
                state[num].stock = 0;
            } else{
                state[num].stock--;
            }

        },

        addCartList(state, action){
            state.push({id: action.payload.id, name: action.payload.name, stock: 1})
            //console.log(state[1].stock)
            console.log(action.payload.id)            
        }
    }



})

export let { increaseCount, decreaseCount, addCartList } = cart.actions;
export default cart