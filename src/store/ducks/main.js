export const RESET_STORE = 'custom-bet/main/resetStore';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const resetStore = () => ({
  type: RESET_STORE,
});
