import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router";

export const Home = () => {
    return (
        <Container maxWidth="sm" sx={{mt: 5}}>
          <Box sx = {{
              p: 4,
              boxShadow: 16,
              borderRadius: 2,
              background: "background.paper"
          }}>
              <Typography variant={"h3"} align={"center"}>
                  HOME
              </Typography>
              <Typography variant={"h5"} align={"center"}>
                  <Link to = {"/lienPage1"}>
                      Page 1
                  </Link>
              </Typography>
              <Typography variant={"h5"} align={"center"}>
                  <Link to = {"/lienPage2"}>
                      Page 2
                  </Link>
              </Typography>
          </Box>
        </Container>
    )
}