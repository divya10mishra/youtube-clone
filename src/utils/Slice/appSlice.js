import { createSlice } from '@reduxjs/toolkit'

const app = createSlice({
   name : "app",
   initialState : {
       flag : false
   },
   reducers:{
     toggleMenu : (state)=>{
        state.flag = !state.flag
     }
   }
})

export const { toggleMenu } = app.actions
export default app.reducer