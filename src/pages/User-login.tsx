import {Container, Grid2} from "@mui/material";
import {Connexion} from "../components/formulaires/Connexion.tsx";

export const UserLogin = () => {
    return(
        <Container>
            <Grid2 container
                   justifyContent = "center"
                   alignItems="center"
                   padding={5}
                   spacing={3}
                   direction={'row'}
                   sx={{width: '100%'}}>
                <Connexion/>
            </Grid2>
        </Container>
    )
}