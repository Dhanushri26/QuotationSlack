import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PropertyDetails from "./PropertyDetails";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { MenuItem, Select, InputBase } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
const AddDiscount = () => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const CustomInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingRight: "1.5rem",
      fontSize: "0.6rem",
      fontWeight: "600",
      fontFamily: "Nunito Sans",
      backgroundColor: "white",
      color: "black",
    },
  }));

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        scrollbarWidth: "none",
        msScrollbarWidth: "none",
        fontFamily: "Nunito Sans",
        height: "104vh",
        mt: -2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "7px 14px",
        }}
      >
        <DialogTitle sx={{ ml: -2, mt: -1 }}>Add Discount to unit</DialogTitle>
        <CloseOutlined onClick={handleClose} sx={{ mr: 1 }} />
      </Box>
      <Divider sx={{ mt: -2, mb: -1 }} />
      <DialogContent
        sx={{
          overflowY: "auto",
          scrollbarWidth: "none",
          msScrollbarWidth: "none",
          fontFamily: "Nunito Sans",
        }}
      >
        <Box display={"flex"}>
          <PropertyDetails />
          <Box
            sx={{
              paddingLeft: 0,
              flexGrow: 1,
              backgroundColor: "#F8F9FB",
              pt: "1rem",
              borderRadius: "6px",
              pr: "0rem",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontSize: "0.8rem", fontFamily: "Nunito Sans" }}
            >
              &nbsp;&nbsp;&nbsp;UNIT PRICE DETAIL
            </Typography>
            <List style={{ mb: 19, fontSize: "10px" }}>
              {[
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  divider
                  style={{
                    padding: "4px 16px",
                    fontSize: "10px",
                    display: "block",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10px",
                      fontFamily: "Nunito Sans",
                      color: "grey",
                    }}
                  >
                    <ListItemText
                      secondary={item}
                      style={{
                        fontSize: "10px",
                        fontFamily: "Nunito Sans",
                        color: "grey",
                      }}
                    />
                    <ListItemText
                      primary="$1,000"
                      style={{ textAlign: "right", fontSize: "10px" }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "4px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "12px",
                        fontFamily: "Nunito Sans",
                        color: "grey",
                      }}
                    >
                      Discount
                    </Typography>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        style={{
                          fontSize: "10px",
                          fontFamily: "Nunito Sans",
                          color: "grey",
                          backgroundColor: "white",
                          border: "1px solid lightgrey",
                          borderRadius: "5px",
                          padding: "4px 8px",
                        }}
                      >
                        100,000
                      </button>
                      <Select
                        style={{
                          fontSize: "10px",
                          fontFamily: "Nunito Sans",
                          color: "grey",
                          backgroundColor: "white",
                          border: "1px solid lightgrey",
                          borderRadius: "5px",
                          padding: "-1px 8px",
                        }}
                        labelId="custom-select-label"
                        value={selectedValue}
                        onChange={handleChange}
                        displayEmpty
                        IconComponent={null}
                        input={<CustomInput sx={{ paddingRight: 0 }} />}
                        renderValue={(value) => (
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "black",
                              pr: "-2rem",
                            }}
                          >
                            {value ? value : "AED"}
                          </span>
                        )}
                        sx={{
                          height: "0.5rem",
                          width: "3.5rem",
                          padding: 0,
                          margin: 0,
                          maxWidth: "60%",
                          mt: 1,
                        }}
                        onOpen={handleOpen}
                        onClose={handleClose}
                        endAdornment={
                          open ? (
                            <KeyboardArrowUpIcon
                              sx={{ ml: -4, position: "absolute", right: 0 }}
                            />
                          ) : (
                            <KeyboardArrowDownIcon
                              sx={{ ml: -4, position: "absolute", right: 0 }}
                            />
                          )
                        }
                      >
                        <MenuItem
                          value="AED"
                          sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
                        >
                          AED
                        </MenuItem>
                        <MenuItem
                          value="$100,000"
                          sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
                        >
                          $100,000
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
            <Box sx={{ height: "2.5rem", width: "100%" }}></Box>

            <Grid
              container
              justifyContent="space-between"
              style={{
                padding: "5px 10px",
                marginLeft: "0rem",
                backgroundColor: "#E4E8EE",
                paddingLeft: "0.5rem",
                borderRadius: "5px",
                alignItems: "center",
                mt: "9rem",
                pt: "3rem",
              }}
            >
              <Typography variant="body1" sx={{ fontFamily: "Nunito Sans" }}>
                Final Total
              </Typography>
              <Typography
                variant="h6"
                sx={{ mr: "0.3rem", fontFamily: "Nunito Sans" }}
              >
                $1,200
              </Typography>
            </Grid>

            {/* <Divider style={{ margin: "10px 0" }} /> */}

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                textTransform: "none",
                fontFamily: "Nunito Sans",
                pl: 2,
                mt: 1.5,
              }}
            >
              Update & Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscount;
