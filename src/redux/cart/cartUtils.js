export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return {
                cartItems: [],
                totalQuantity: 0,
                totalCost: 0,
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            cartItems: [],
            totalQuantity: 0,
            totalCost: 0,
        };
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        console.error('Could not save state', err);
    }
};
