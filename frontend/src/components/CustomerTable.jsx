import React from "react";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../features/CustomersSlice";
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";

const CustomerTable = ({ customers }) => {
  const dispatch = useDispatch();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell>Membership</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer._id}>
            <TableCell>{customer.firstName} {customer.lastName}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.contactNumber}</TableCell>
            <TableCell>{customer.membership.name}</TableCell>
            <TableCell>{customer.status}</TableCell>
            <TableCell>
              <Button color="secondary" onClick={() => dispatch(deleteCustomer(customer._id))}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomerTable;
