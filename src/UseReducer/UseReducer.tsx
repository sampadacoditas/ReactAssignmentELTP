import React, { useReducer, useState } from 'react'
import {ACTION_MAP, appReducer } from './app.Reducer'

export const UseReducer = () => {
   const [appState,dispatch]= useReducer<any>(appReducer,{status:"ON"})
//    const  useReducer=(callback:any,initstate:any)=>
//    {
//     const [state,setState]=useState(initstate)
//     const dispatch=(action:any)=>{
//         const value=callback(initstate,action);
//         setState(value)
//     }
//     return [state,dispatch];
//    }
  return (
    <>
    {/* {appState} */}

   
    {/* //ts-ignore */}
    {/* <button onClick={dispatch({type:ACTION_MAP.TOGGLEBUTTON})}>Click me</button> */}
    </>
  )
}

