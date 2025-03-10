import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

// Async Thunks for CRUD operations
export const fetchCustomers = createAsyncThunk("customers/fetchAll", async () => {
  const response = await api.get("/customers");
  return response.data;
});

export const addCustomer = createAsyncThunk("customers/add", async (customer) => {
  const response = await api.post("/customers", customer);
  return response.data;
});

export const updateCustomer = createAsyncThunk("customers/update", async ({ id, customer }) => {
  const response = await api.put(`/customers/${id}`, customer);
  return response.data;
});

export const deleteCustomer = createAsyncThunk("customers/delete", async (id) => {
  await api.delete(`/customers/${id}`);
  return id;
});

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.list.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.list = state.list.filter((c) => c._id !== action.payload);
      });
  },
});

export default customersSlice.reducer;
