export  const ACTION_MAP={
    TOGGLEBUTTON:"TOGGLEBUTTON"
}
console.log([ACTION_MAP.TOGGLEBUTTON])
const actions:any={
    [ACTION_MAP.TOGGLEBUTTON]:(state:any)=>{

    }
    
}
export const appReducer = (state: any, action: {types:any}) => {
    
console.log(ACTION_MAP.TOGGLEBUTTON)
};
