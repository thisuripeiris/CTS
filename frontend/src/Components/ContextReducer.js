// import React, { createContext, useContext, useReducer } from 'react';

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ADD":
//             return [...state, {
//                 id: action.vehicleItem._id,
//                 code: action.vehicleItem.code,
//                 price: action.vehicleItem.price,
//                 qty: action.qty
//             }];
//         case "REMOVE":
//             let newArr = [...state];
//             newArr.splice(action.index, 1);
//             return newArr;
//         case "UPDATE":
//             return state.map(item => {
//                 if (item.id === action.id) {
//                     return { ...item, qty: action.qty };
//                 } else {
//                     return item;
//                 }
//             });
//         case "DROP":
//             return [];
//         default:
//             console.log("Error in Reducer!");
//             return state;
//     }
// }

// export const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, []);

//     return (
//         <CartDispatchContext.Provider value={dispatch}>
//             <CartStateContext.Provider value={state}>
//                 {children}
//             </CartStateContext.Provider>
//         </CartDispatchContext.Provider>
//     );
// }

// export const useDispatchCart = () => useContext(CartDispatchContext);
// export const useCart = () => useContext(CartStateContext);

import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.vehicleItem._id,
                code: action.vehicleItem.code,
                price: action.vehicleItem.price,
                qty: action.qty
            }];
        case "REMOVE":
            let newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case "UPDATE":
            return state.map(item => {
                if (item.id === action.id) {
                    return { ...item, qty: action.qty };
                } else {
                    return item;
                }
            });
        case "DROP":
            return [];
        case "CLEAR_CART": // Added new action type to clear the cart
            return [];
        default:
            console.log("Error in Reducer!");
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
}

export const useDispatchCart = () => useContext(CartDispatchContext);
export const useCart = () => useContext(CartStateContext);
