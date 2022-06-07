
import { createSlice } from '@reduxjs/toolkit'



let user = createSlice({
    name: 'user',
    initialState: [{name:'kim',age:20},{name:'lee',age:10}],
    reducers : {
        changeName(state, a){
            state[a.payload].name = 'john'
        },
        changeAge(state, a){
            state[1].age += a.payload
        }


    }

})

export let { changeName, changeAge } = user.actions;
export default user
