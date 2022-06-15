
import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState: [
      ],


    reducers:{
        increaseCount(state, action){

            // find states info
            let num = state.findIndex((a)=>{
                return a.id === action.payload
            })

            // find storage info
            let storage = localStorage.getItem('prodCart')
            storage = JSON.parse(storage)
            let storageNum = storage.findIndex((a)=>{
                return a.id === action.payload
            })

            // mdf state/storage info
            if(state[num].qty > storage[storageNum].stock || state[num].qty === storage[storageNum].stock) {
                state[num].qty = storage[storageNum].stock;
                storage[storageNum].qty = storage[storageNum].stock;
                
                console.log("storage[storageNum] is max qty")
                console.log(storage[storageNum])
                console.log(storage[storageNum].qty)
            } else{
                state[num].qty++;
                storage[storageNum].qty++;
                
                state[num].totalPrice = +(state[num].totalPrice + state[num].price).toFixed(2);
                storage[storageNum].totalPrice = +(storage[storageNum].totalPrice + storage[storageNum].price).toFixed(2);
                console.log(storage[storageNum].qty)
            }

            // replace storage -> prodCart(localStorage) data
            localStorage.setItem('prodCart', JSON.stringify(storage))
        },

        decreaseCount(state, action){
            let num = state.findIndex((a)=>{
                return a.id === action.payload
            })

            // mdf storage info
            let storage = localStorage.getItem('prodCart')
            storage = JSON.parse(storage)
            let storageNum = storage.findIndex((a)=>{
                return a.id === action.payload
            })

            // console.log("storage[storageNum] in decreaseFun")
            // console.log(storage[storageNum])
            // console.log(storage[storageNum].qty)



            if(state[num].qty === 1 || state[num].qty < 1) {
                state[num].qty = 1;
                storage[storageNum].qty = 1;
                
                console.log("storage[storageNum] in decreaseFun")
                console.log(storage[storageNum])
                console.log(storage[storageNum].qty)
                
                // state[num].totalPrice = 0;
                // storage[storageNum].totalPrice = 0;
            } else{
                state[num].qty--;
                storage[storageNum].qty--;
                console.log(storage[storageNum].qty)
                state[num].totalPrice = +(state[num].totalPrice - state[num].price).toFixed(2);
                storage[storageNum].totalPrice = +(storage[storageNum].totalPrice - storage[storageNum].price).toFixed(2);
                ;
            }

            localStorage.setItem('prodCart', JSON.stringify(storage))
        },

        
        addCartList(state, action){
            let actionId = action.payload.id;
            console.log("actionID: ")
            console.log(actionId)


            let storage = localStorage.getItem('prodCart')
            storage = JSON.parse(storage)        

            if(state.find((x)=>x.id === actionId)){
                console.log("같은 값 존재")
                console.log(actionId)
                // mdf state info
                let stateNum = state.findIndex((a)=>{
                    return a.id === actionId
                })
                state[stateNum].qty++;

                // mdf storage info
                let storageNum = storage.findIndex((a)=>{
                    return a.id === actionId
                })
                storage[storageNum].qty++;

            } else {                
                state.push({id: action.payload.id, name: action.payload.name, stock: action.payload.stock, qty: 1, shortName: action.payload.shortName, price: action.payload.price, totalPrice: action.payload.price})
                storage.push({id: action.payload.id, name: action.payload.name, stock: action.payload.stock, qty: 1,  shortName: action.payload.shortName, price: action.payload.price, totalPrice: action.payload.price })
            }


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
        },

        removeItem(state, action){

            let storage = localStorage.getItem('prodCart')
            storage = JSON.parse(storage) 
            
            let num = state.findIndex((a)=>{
                return a.id === action.payload
            })

            state.splice(num, 1);
            storage.splice(num,1);
            
            

            localStorage.setItem('prodCart', JSON.stringify(storage))


        },

        deleteCart(state, action){

            // delete Cart states(local and redux states) when pay button is clicked.
            // and move to med page. and redirect to home in 5s.
            // nav, dispatch, deleteCart, useEffect, timer.
            // additional works = server (for boardgame List, saving account, sign in, sign up, cart page(instead of local Storage), payment information.)
            


        }



    }



})

export let { increaseCount, decreaseCount, addCartList, loadPrvList, removeItem, deleteCart } = cart.actions;
export default cart