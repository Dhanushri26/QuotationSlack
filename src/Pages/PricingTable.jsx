import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import PrimaryComponent from "../Components/PrimaryComponent";
import { Tooltip } from "@mui/material";
import Secondary from "../Components/Secondary";
import OneTimeChange from "../Components/OneTimeChange";
import Refundables from "../Components/Refundables";
import InventoryItem from "../Components/InventoryItem";
import ParkingSlot from "../Components/ParkingSlot";
import { withStyles } from "@material-ui/core/styles";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  maxWidth: 900,
  height: 35,
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center",
  borderRadius: 5,
}));

const itemsData = [
  { message: "Primary", backgroundColor: "#FEEAEA80", color: "#B3776D" },
  { message: "Secondary", backgroundColor: "#EDE4FE80", color: "#896DB3" },
  {
    message: "One time Charges",
    backgroundColor: "#DBF0F180",
    color: "#6DAFB3",
  },
  { message: "Refundables", backgroundColor: "#E4EDFF80", color: "#6D80B3" },
  { message: "Inventory Item", backgroundColor: "#FFFAD880", color: "#B3A16D" },
  { message: "Parking Slot", backgroundColor: "#FEEAEA80", color: "#B3776D" },
];

const avatarColors = [
  "#B3776D",
  "#896DB3",
  "#6DAFB3",
  "#6D80B3",
  "#B3A16D",
  "#B3776D",
];

export default function PricingTable() {
  const [open, setOpen] = useState(true);
  const [dialogComponent, setDialogComponent] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = (component) => {
    setDialogComponent(component);
  };

  const handleDialogClose = () => {
    setDialogComponent(null);
  };

  const formatIndex = (index) => (index < 9 ? `0${index + 1}` : `${index + 1}`);

  const TextOnlyTooltip = withStyles({
    tooltip: {
      color: "black",
      backgroundColor: "white",
      border: "1px solid lightgrey",
      width: "15rem",
      fontFamily: "Nunito Sans",
    },
  })(Tooltip);

  return (
    <>
      <Dialog
        open={open}
        sx={{
          height: "97%",
          "& .MuiDialog-paper": {
            height: "90vh",
            scrollbarWidth: "none",
            width: "30rem",
            mt:8,
          },
        }}
      >
        <DialogTitle
          sx={{
            borderBottom: "1px solid lightgrey",
            width: "100%",
            pl: "2rem",
            fontWeight: "bold",
            fontFamily: "Nunito Sans",
          }}
        >
          Pricing Table
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 20,
              top: 13,
              color: (theme) => theme.palette.grey[500],
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, mt: 1 }}>
            {itemsData.map((item, index) => (
              <Item
                key={index}
                sx={{
                  my: 1,
                  mx: "auto",
                  p: 2,
                  backgroundColor: item.backgroundColor,
                  pt: "1rem",
                  width: "25rem",
                  ml: -3,
                }}
                onClick={
                  item.message === "Primary"
                    ? () => handleDialogOpen(<PrimaryComponent />)
                    : item.message === "Secondary"
                    ? () => handleDialogOpen(<Secondary />)
                    : item.message === "One time Charges"
                    ? () => handleDialogOpen(<OneTimeChange />)
                    : item.message === "Refundables"
                    ? () => handleDialogOpen(<Refundables />)
                    : item.message === "Inventory Item"
                    ? () => handleDialogOpen(<InventoryItem />)
                    : item.message === "Parking Slot"
                    ? () => handleDialogOpen(<ParkingSlot />)
                    : null
                }
              >
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ justifyContent: "space-between",width:'100%' }}
                >
                  <Box sx={{ display: "flex", alignItems: "start", mt: "-0.5rem" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "start" }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: avatarColors[index % avatarColors.length],
                        height: "1.5rem",
                        width: "1.5rem",
                        fontSize: "0.75rem",
                      }}
                    >
                      {formatIndex(index)}
                    </Avatar>
                    <Typography
                      noWrap
                      sx={{
                        color: item.color,
                        pt: "0.2rem",
                        fontFamily: "Nunito Sans",
                        fontSize: "16px",
                      }}
                    >
                      {item.message}
                    </Typography>
                  </Stack>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ color: "lightgrey" }}
                  >
                    <TextOnlyTooltip
                      title="Base rent or Monthly rent you can have only one primary pricing table per property"
                      placement="top"
                      sx={{
                        "& .MuiTooltip-tooltip": {
                          backgroundColor: "#ffffff",
                          color: "grey",
                          border: "1px solid lightgrey",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        },
                        "& .MuiTooltip-arrow": {
                          color: "white",
                        },
                      }}
                    >
                      <InfoOutlinedIcon
                        sx={{ cursor: "pointer", color: "lightgrey" }}
                      />
                    </TextOnlyTooltip>

                    <ArrowForwardIosOutlinedIcon />
                  </Stack>
                </Stack>
              </Item>
            ))}
          </Box>
        </DialogContent>
      </Dialog>

      <Box open={Boolean(dialogComponent)} onClose={handleDialogClose}>
        {dialogComponent}
      </Box>
    </>
  );
}
