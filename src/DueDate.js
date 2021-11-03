import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function DueDate(props) {
  const [date, setDate] = useState(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const confirmDate = () => {
    props.retrieveDueDate(date);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        onChange={handleChange}
        id="date"
        label="Due date"
        type="date"
        value={date}
        defaultValue="2021-10-20"
        sx={{ width: 300 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button sx={{ paddingLeft: "1rem" }} onClick={confirmDate}>
        Confirm
      </Button>
    </Box>
  );
}
