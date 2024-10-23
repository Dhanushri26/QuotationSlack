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
  LinearProgress,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function PrimaryComponent() {
  const [open, setOpen] = useState(true);
  const [revenueType, setRevenueType] = useState("Lease");
  const [componentBasedOn, setComponentBasedOn] = useState("Amount");
  const [selectedValue, setSelectedValue] = useState("Primary Component");
  const handleClose = () => setOpen(false);
  const handleRevenueChange = (event, newType) => setRevenueType(newType);
  const handleComponentBasedChange = (event, newValue) =>
    setComponentBasedOn(newValue);
  const [amount, setAmount] = useState("200");
  const [max, setMax] = useState("$190");
  const [recom, setRecom] = useState("$120");
  const [min, setMin] = useState("$100");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedTax, setSelectedTax] = useState("GST");
  const handleTaxChange = (event) => {
    setSelectedTax(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value);
  };

  const handleRecomChange = (event) => {
    setRecom(event.target.value);
  };
  const handleMinChange = (event) => {
    setMin(event.target.value);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
    height: 5,
    width: 250,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      width: 165,
      backgroundColor: color || "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: color || "#308fe8",
      }),
    },
  }));
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
          width: "31rem",
        },
      }}
      msScrollbarWidth="none"
      scrollbarWidth="none"
      width="10rem"
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
          fontFamily: "Nunito Sans",
          ml: -1.5,
          width:'30rem'
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
          overflow: "hidden",
        }}
      >
        <Box sx={{ paddingBottom: "1rem" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#FEEAEA80",
              color: "#B3776D",
              textTransform: "none",
              fontWeight: "500",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              marginBottom: "0.6rem",
              ml: "-1rem",
              mr: "-5rem",
              paddingRight: "0.5rem",
              width: "30rem",
              fontFamily: "Nunito Sans",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Primary Pricing Component
            <IconButton size="small" sx={{ color: "#B3776D" }}>
              <TextOnlyTooltip title="Base rent or Monthly rent you can have only one primary pricing table per property">
                <div>
                  <InfoOutlinedIcon sx={{ color: "lightgray" }} />
                </div>
              </TextOnlyTooltip>
            </IconButton>
          </Button>

          <Box display={"flex"} sx={{ fontFamily: "Nunito Sans" ,width:'30rem'}}>
            <Box sx={{ marginBottom: "1.5rem", ml: "-1rem", flex: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  fontFamily: "Nunito Sans",
                  color: "grey",
                }}
              >
                Revenue Type
              </Typography>
              <ToggleButtonGroup
                value={revenueType}
                exclusive
                onChange={handleRevenueChange}
                sx={{
                  width: "30%",
                  "& .MuiToggleButton-root": {
                    borderRadius: "4px",
                    padding: "7px 12px",
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
                <ToggleButton
                  value="Sales"
                  sx={{
                    color: "#1976d2",
                    "&.Mui-selected": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    },
                  }}
                >
                  Sales
                </ToggleButton>
                <ToggleButton
                  value="Manage"
                  sx={{
                    color: "#1976d2",
                    "&.Mui-selected": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    },
                  }}
                >
                  Manage
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box
              sx={{
                marginBottom: "1.5rem",
                ml: "-13rem",
                width: { xs: "10%", md: "52%" },
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
                // variant="outlined"
                size="small"
                // fullWidth
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
          </Box>
          <Box sx={{ display: "flex", flex: 2 }}>
            <Box sx={{ marginBottom: "1.5rem", ml: "-1rem", width: "50%" }}>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  fontFamily: "Nunito Sans",
                  color: "grey",
                }}
              >
                Tax Group For Pricing Component
              </Typography>

              <TextField
                // variant="outlined"
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

            <Box sx={{ marginBottom: "1.5rem", ml: "1.5rem" }}>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  fontFamily: "Nunito Sans",
                  color: "grey",
                }}
              >
                Component Based On
              </Typography>
              <ToggleButtonGroup
                value={componentBasedOn}
                exclusive
                onChange={handleComponentBasedChange}
                sx={{
                  width: "100%",
                  "& .MuiToggleButton-root": {
                    borderRadius: "4px",
                    padding: "7px 6px",
                    textTransform: "none",
                    fontWeight: "500",
                    borderColor: "#e0e0e0",
                    flex: 1,
                    marginInline: "0px",
                    marginRight: "8px",
                    fontFamily: "Nunito Sans",
                    color: "black",
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
                <ToggleButton value="Amount">Amount</ToggleButton>
                <ToggleButton value="UOM">UOM</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
          <Box sx={{ alignItems: "center", marginBottom: "0.5rem" }}>
            <Typography
              variant="body2"
              sx={{
                flexGrow: 1,
                fontWeight: 500,
                ml: "-1rem",
                mb: "4px",
                fontFamily: "Nunito Sans",
                color: "grey",
              }}
            >
              UOM Value
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                width: "120rem",
                ml: "-1rem",
                flex: 1,
              }}
            >
              <TextField
                // variant="outlined"
                size="small"
                width="30rem"
                value={amount}
                onChange={handleAmountChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        variant="body2"
                        sx={{ marginLeft: "0.5rem", fontFamily: "Nunito Sans" }}
                      >
                        SAR / Total
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "25%",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "&input": { fontWeight: "bold", fontFamily: "Nunito Sans" },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
              ml: "-1rem",
              width:'30rem',
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                borderRadius: "8px",
                padding: "0.5rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "grey",
                  fontSize: 15,
                  fontFamily: "Nunito Sans",
                }}
              >
                Maximum
              </Typography>
              <Box sx={{ width: "100%" }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={100}
                  color="red"
                />
              </Box>
              <TextField
                size="small"
                value={max}
                onChange={handleMaxChange}
                sx={{
                  marginTop: "0.5rem",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "& input": {
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: 12,
                  mt: "5px",
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Sq.Yard/Monthly
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                borderRadius: "8px",
                padding: "0.5rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "grey",
                  fontSize: 15,
                  fontFamily: "Nunito Sans",
                }}
              >
                Recommended
              </Typography>
              <Box sx={{ display: "flex", width: "100%" }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={100}
                  color="lightgrey"
                  sx={{ postion: "relative" }}
                />

                <BorderLinearProgress
                  variant="determinate"
                  value={70}
                  color="lightgreen"
                  sx={{ position: "absolute" }}
                />
              </Box>
              <TextField
                // value="$ 120"
                size="small"
                value={recom}
                onChange={handleRecomChange}
                sx={{
                  marginTop: "0.5rem",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "& input": {
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: 12,
                  mt: "5px",
                  color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Sq.Yard/Monthly
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                borderRadius: "8px",
                padding: "0.5rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "grey",
                  fontSize: 15,
                  fontFamily: "Nunito Sans",
                }}
              >
                Minimum
              </Typography>
              <Box sx={{ display: "flex", width: "100%" }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={100}
                  color="lightgrey"
                  sx={{ postion: "relative" }}
                />
                <BorderLinearProgress
                  variant="determinate"
                  value={40}
                  color="orange"
                  sx={{ position: "absolute" }}
                />
              </Box>

              <TextField
                // value="$ 100"
                size="small"
                value={min}
                onChange={handleMinChange}
                sx={{
                  marginTop: "0.5rem",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  fontFamily: "Nunito Sans",
                  fontWeight: "bold",
                  "& input": {
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: 10, mt: "5px", color: "grey" }}
              >
                Sq.Yard/Monthly
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between",width:'30rem' }}>
            <Button
              variant="outlined"
              sx={{
                width: "15%",
                borderRadius: "5px",
                border: "1px solid lightgrey",
                color: "black",
                fontWeight: "800",
                ml: -1,
                textTransform: "none",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                height:'2.5rem'
              }}
              onClick={handleClose}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "%",
                borderRadius: "3px",
                textTransform: "none",
                fontFamily: "Nunito Sans",
                height:'2.5rem'
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
