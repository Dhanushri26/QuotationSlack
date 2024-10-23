import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Typography,
  InputAdornment,
  MenuItem,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { withStyles } from "@mui/styles";

export default function InventoryItem() {
  const [open, setOpen] = useState(true);
  const [revenueType, setRevenueType] = useState("Lease");
  const [componentBasedOn, setComponentBasedOn] = useState("Amount");
  const [amount, setAmount] = useState("200");
  const [selectedValue, setSelectedValue] = useState("Primary Component");
  const [selectedTax, setSelectedTax] = useState("GST");
  const [quantity, setQuantity] = useState("10");

  const handleTaxChange = (event) => {
    setSelectedTax(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleClose = () => setOpen(false);
  const handleRevenueChange = (event, newType) => setRevenueType(newType);
  const handleComponentBasedChange = (event, newValue) =>
    setComponentBasedOn(newValue);
  const TextOnlyTooltip = withStyles({
    tooltip: {
      color: "grey",
      backgroundColor: "white",
      fontSize: "0.875rem",
      width: "20rem",
      fontFamily: "Nunito Sans",
    },
  })(Tooltip);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          fontFamily: "Nunito Sans",
        },
      }}
      msScrollbarWidth="none"
      scrollbarWidth="none"
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "1.25rem",
          color: "#333",
          paddingBottom: "-1.5rem",
          borderBottom: "1px solid #e0e0e0",
          marginBottom: "0.75rem",
          marginTop: "-1.5rem",
          marginLeft: "-0.5rem",
        }}
      >
        Pricing Table
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          paddingTop: "1rem",
          msScrollbarWidth: "none",
          scrollbarWidth: "none",
        }}
      >
        <Box sx={{ paddingBottom: "1rem" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#FFFAD880",
              color: "#B3A16D",
              textTransform: "none",
              fontWeight: "500",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              marginBottom: "2rem",
              ml: "-1rem",
              mr: "-5rem",
              paddingRight: "0.5rem",
              width: "36rem",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Inventory Item Component
            <IconButton size="small" sx={{ color: "#6d7cb3" }}>
              <TextOnlyTooltip title="Base rent or Monthly rent you can have only one primary pricing table per property">
                <div>
                  <InfoOutlinedIcon sx={{ color: "lightgray" }} />
                </div>
              </TextOnlyTooltip>
            </IconButton>
          </Button>

          <Box display={"flex"}>
            <Box sx={{ marginBottom: "1.5rem", ml: "-1rem", flex: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  ml: "0.5rem",
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Revenue Type
              </Typography>
              <ToggleButtonGroup
                value={revenueType}
                exclusive
                onChange={handleRevenueChange}
                sx={{
                  width: "50%",
                  "& .MuiToggleButton-root": {
                    borderRadius: "5px",
                    padding: "7px 15px",
                    textTransform: "none",
                    fontWeight: "500",
                    borderColor: "#e0e0e0",
                    flex: 1,
                    marginInline: "2px",
                    color: "grey",
                    fontFamily: "Nunito Sans",
                    "&:hover": {
                      backgroundColor: "inherit",
                      color: "inherit",
                    },
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  },
                }}
              >
                <ToggleButton
                  value="Lease"
                  sx={{
                    color: "#1976d2",
                    "&.Mui-selected": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    },
                  }}
                >
                  Lease
                </ToggleButton>
                <ToggleButton value="Sales">Sales</ToggleButton>
                <ToggleButton value="Manage">Manage</ToggleButton>
                <ToggleButton value="Other">Stay</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                marginBottom: "1.5rem",
                ml: "-1rem",
                width: { xs: "100%", md: "45%" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Pricing Component
              </Typography>

              <TextField
                variant="outlined"
                size="small"
                fullWidth
                select
                value={selectedValue}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  fontFamily: "Nunito Sans",
                  "& .MuiSelect-icon": {
                    display: "none",
                  },
                  "& .MuiSelect-select": {
                    fontFamily: "Nunito Sans",
                  },
                  "& ::placeholder": {
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "Nunito Sans",
                    fontSize: "0.5rem",
                  },
                }}
              >
                <MenuItem
                  value="Primary Component"
                  sx={{ fontFamily: "Nunito Sans" }}
                >
                  Primary Component
                </MenuItem>
                <MenuItem
                  value="Secondary Component"
                  sx={{ fontFamily: "Nunito Sans" }}
                >
                  Secondary
                </MenuItem>
                <MenuItem value="Tertiary" sx={{ fontFamily: "Nunito Sans" }}>
                  Tertiary
                </MenuItem>
              </TextField>
            </Box>

            {/* Second Box for Tax Group */}
            <Box
              sx={{
                marginBottom: "1.5rem",
                ml: "-1rem",
                width: { xs: "100%", md: "45%" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Tax Group For Pricing Component
              </Typography>

              <TextField
                variant="outlined"
                size="small"
                fullWidth
                select
                value={selectedTax}
                onChange={handleTaxChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  fontFamily: "Nunito Sans",
                  "& .MuiSelect-icon": {
                    display: "none",
                  },
                  "& .MuiSelect-select": {
                    fontFamily: "Nunito Sans",
                  },
                  "& ::placeholder": {
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "Nunito Sans",
                    fontSize: "0.5rem",
                  },
                }}
              >
                <MenuItem value="GST" sx={{ fontFamily: "Nunito Sans" }}>
                  GST
                </MenuItem>
                <MenuItem value="VAT" sx={{ fontFamily: "Nunito Sans" }}>
                  VAT
                </MenuItem>
                <MenuItem value="Sales Tax" sx={{ fontFamily: "Nunito Sans" }}>
                  Sales Tax
                </MenuItem>
              </TextField>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ marginBottom: "1.5rem", ml: "-0.5rem" }}>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Price Based on
              </Typography>
              <ToggleButtonGroup
                value={componentBasedOn}
                exclusive
                onChange={handleComponentBasedChange}
                sx={{
                  width: "100%",
                  "& .MuiToggleButton-root": {
                    borderRadius: "5x",
                    padding: "7px 15px",
                    textTransform: "none",
                    fontWeight: "500",
                    borderColor: "#e0e0e0",
                    flex: 1,
                    marginInline: "0px",
                    marginRight: "8px",
                    fontFamily: "Nunito Sans",

                    "&:hover": {
                      backgroundColor: "inherit",
                      color: "inherit",
                    },
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  },
                }}
              >
                <ToggleButton value="Amount">Monthly</ToggleButton>
                <ToggleButton value="UOM">Total</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Box sx={{ flex: 1, marginRight: "1rem", width: "50%", ml: -1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  mb: "4px",
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Item Unit Price
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                value={amount}
                onChange={handleAmountChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                        $
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  width: "190%",
                  "& input": {
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  },
                }}
              />
            </Box>

            <Box sx={{ flex: 2, ml: 15 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  mb: "4px",
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Quantity
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                value={quantity}
                onChange={handleQuantityChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                        Qty
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  width: "100%",
                  fontWeight: "bold",
                  "& input": {
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              sx={{
                width: "15%",
                borderRadius: "5px",
                border: "1px solid lightgrey",
                color: "black",
                fontWeight: "500",
                ml: -1,
                textTransform: "none",
                fontFamily: "Nunito Sans",
              }}
              onClick={handleClose}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "48%",
                borderRadius: "3px",
                textTransform: "none",
                fontFamily: "Nunito Sans",
              }}
            >
              Create Pricing Component
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
