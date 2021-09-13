


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
   
  },
});

export const { clearState } = cartSlice.actions;

export default cartSlice.reducer;
