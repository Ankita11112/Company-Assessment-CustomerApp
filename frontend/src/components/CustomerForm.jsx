import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/CustomersSlice";
import { Dialog, DialogTitle, DialogContent, TextField, Button, MenuItem } from "@mui/material";

const CustomerForm = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({ firstName: "", lastName: "", email: "", contactNumber: "", membership: "", status: "Gold" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer(customer));
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Add Customer</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="First Name" margin="normal" onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} required />
          <TextField fullWidth label="Last Name" margin="normal" onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} required />
          <TextField fullWidth label="Email" type="email" margin="normal" onChange={(e) => setCustomer({ ...customer, email: e.target.value })} required />
          <TextField fullWidth label="Contact Number" margin="normal" onChange={(e) => setCustomer({ ...customer, contactNumber: e.target.value })} required />
          <TextField fullWidth select label="Status" margin="normal" onChange={(e) => setCustomer({ ...customer, status: e.target.value })}>
            <MenuItem value="Gold">Gold</MenuItem>
            <MenuItem value="Diamond">Diamond</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerForm;
