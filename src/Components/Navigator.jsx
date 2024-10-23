import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PiNumberCircleFourFill } from "react-icons/pi";
import Box from "@mui/material/Box";
// import { Divider } from '@mui/material';
function handleClick(event) {
  event.preventDefault();
}

export default function Navigator() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={{ fontFamily: "Nunito Sans", fontSize: "14px" }}
    >
      Add Contact
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      sx={{ fontFamily: "Nunito Sans", fontSize: "14px" }}
    >
      Lead Details
    </Link>,
    <Typography
      key="3"
      sx={{
        color: "primary",
        fontWeight: "bold",
        fontSize: "14px",
        fontFamily: "Nunito Sans",
      }}
    >
      Preview and Create Lead
    </Typography>,
    <Typography
      key="3"
      sx={{
        color: "primary",
        fontWeight: "bold",
        fontSize: "14px",
        fontFamily: "Nunito Sans",
      }}
    >
      Quotation Details{" "}
    </Typography>,
    <Box display="flex" alignItems="center" mt={0} key="3">
      <PiNumberCircleFourFill
        style={{
          fontSize: "1.2rem",
          marginRight: "8px",
          marginTop: "2px",
          border: "1px solid #dae1f3",
          borderRadius: "50%",
        }}
      />
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "Nunito Sans",
        }}
      >
        Preview and create
      </Typography>
    </Box>,
  ];

  return (
    <>
      <Stack
        spacing={2}
        sx={{ width: "96%", ml: "-1rem", borderBottom: "1px solid #f6f6f6" }}
      >
        <Breadcrumbs
          sx={{
            width: "100%",
            backgroundColor: "white",
            height: "2.5rem",
            color: "blue",
            fontWeight: "bold",
            fontSize: "1rem",
            alignItems: "center",
            pt: "1rem",
            pl: "20px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
