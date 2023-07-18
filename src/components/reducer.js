export const initialState={
    basket:[],
};
const reducer=(state,action)=>
{
    console.log(action);
    if(action.type==="ADD_TO_BASKET")
    {
        return{
            ...state,
            basket:[...state.basket,action.item]
        };
    }

    return state;
}
export default reducer;