import MenuBar from "../Components/MenuBar";
import SideBar from "../Components/SideBar";
// import QuotationSummary from "../Components/QuotationSummary";
import UnitDetails from "../Components/UnitDetails";
import Client from "../Components/Client";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import Lands from "../Components/Lands";
import Navigator from "../Components/Navigator";
import { Button } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
const CreateQuotation = () => {
  return (
    <Box sx={{ overflow: "hidden", maxHeight: "100vh" }}>
      <MenuBar />
      <Box display="flex">
        <SideBar />
        <Box
          sx={{
            flexGrow: 1,
            p: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100vh",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F5F7FA",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              p: 0,
              width: "100%",
              maxWidth: "100%",
              height: "4rem",
              overflow: "auto",
              display: "flex",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "space-between",
              mscrollbarWidth: "none",
              scrollbarWidth: "none",
              pl: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowBackIosNewIcon
                sx={{
                  fontSize: "1rem",
                  backgroundColor: "lightgrey",
                  borderRadius: "50%",
                  padding: "0.5rem",
                  marginRight: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  fontFamily: "Nunito Sans",
                }}
              >
                Create Quotation to Existing Lead
              </Typography>
            </Box>

            <Lands />
          </Box>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pl: 3,
              pt: 2,
              width: "100%",
              maxWidth: "100%",
              height: "100vh",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                pl: 1,
                width: "100%",
                maxWidth: "100%",
                height: "100vh",
                overflow: "hidden",
                borderRadius: "0.5rem",
              }}
            >
              <Box sx={{ width: "100%", height: "100%", ml: -1,pl:1 }}>
                <Navigator />
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    overflow: "hidden",
                    maxHeight: "60vh",
                    ml: -1,
                  }}
                >
                  <Grid2 container spacing={2} sx={{ width: "100%" }}>
                    <Grid2 xs={4}>
                      <Client />
                    </Grid2>
                    <Grid2 xs={8} flex={1}>
                      <UnitDetails />
                    </Grid2>

                    {/* <Grid2 xs={4}>
                      <QuotationSummary />
                    </Grid2> */}
                  </Grid2>
                </Box>
                <Box
                  sx={{
                    mt: "0rem",
                    height: "4rem",
                    color: "blue",
                    width: "93.9%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    zIndex: "1",
                    borderBottomLeftRadius: "0.5rem",
                    borderBottomRightRadius: "0.5rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    padding: "0 1rem 0 1rem",
                    fontFamily: "Nunito Sans",
                    pl: -6,
                  }}
                >
                  <Button
                    sx={{
                      color: "black",
                      boxShadow: "none",
                      border: "1px solid lightgrey",
                      borderRadius: "4px",
                      padding: "0.5rem",
                      height: "2.3rem",
                      textTransform: "none",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    Previous
                  </Button>
                  <Box display="flex" sx={{ pr: 0 }}>
                    <Button
                      sx={{
                        color: "black",
                        backgroundColor: "white",
                        boxShadow: "none",
                        border: "1px solid lightgrey",
                        borderRadius: "4px",
                        padding: "0.5rem",
                        height: "2.3rem",
                        textTransform: "none",
                        fontFamily: "Nunito Sans",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        color: "white",
                        height: "2.3rem",
                        textTransform: "none",
                        backgroundColor: "#0D6EFD",
                        boxShadow: "none",
                        borderRadius: "4px",
                        padding: "0.5rem",
                        marginLeft: "1rem",
                        fontFamily: "Nunito Sans",
                      }}
                    >
                      Create Quotation
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateQuotation;
