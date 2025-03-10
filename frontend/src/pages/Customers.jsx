import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../features/CustomersSlice";
import CustomerTable from "../components/CustomerTable";
import CustomerForm from "../components/CustomerForm";
import { Container, Typography, Button, Paper, Box, Stack } from "@mui/material";

const Customers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.list);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 3, bgcolor: "#f9f9f9" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="h4" fontWeight={600} color="primary">
            Customers
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 3,
              py: 1,
            }}
          >
            + Add Customer
          </Button>
        </Stack>
      </Paper>

      {/* Customer Form (Modal) */}
      <CustomerForm open={open} setOpen={setOpen} />

      {/* Customer Table */}
      <Box mt={4} p={2}>
        <CustomerTable customers={customers} />
      </Box>
    </Container>
  );
};

export default Customers;
