
import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState: [
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

            let storage = localStorage.getItem('prodCart')
            storage = JSON.parse(storage)        

            storage.push({id: action.payload.id, name: action.payload.name, stock: 1})
            //  if(storage[0] != null){
            //     state.push([...storage])              
            // }
            // console.log(state[1].stock)
            // // console.log(storage)
            // // console.log(action.payload.id)    
            localStorage.setItem('prodCart', JSON.stringify(storage))
        },

        loadPrvList(state, action){
            // console.log("action.payload")
            // console.log(action.payload)
            // console.log("action payload in function")
            // console.log(action.payload)
            if(state[0] == null && action.payload != null){
                for(let i in action.payload){                
                    state.push(action.payload[i])                    
                }
            }
            // console.log("state in function")
            // console.log(state[0])
        }
    }



})

export let { increaseCount, decreaseCount, addCartList, loadPrvList } = cart.actions;
export default cart