import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // Add item or update quantity if item already exists
        addItem: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.card.info.id === action.payload.card.info.id
            );

            if (index === -1) {
                // Item not in cart, add new item with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
            } else {
                // Item already in cart, increase quantity
                state.items[index].quantity += 1;
            }
        },

        // Remove item or decrease quantity
        removeItem: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.card.info.id === action.payload.card.info.id
            );

            if (index !== -1) {
                // Decrease quantity if more than 1
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    // Remove item from cart if quantity is 1
                    state.items.splice(index, 1);
                }
            }
        },

        // Clear the entire cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
