import {useForm} from "react-hook-form";
import {Box, Container, TextField, Typography} from "@mui/material";
import {ValidationConnexion} from "./ValidationConnexion.ts";

interface FormData {
    login: string
    password: string
}

export const Connexion = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>();

    return(
        <Container maxWidth="sm" sx={{mt: 5}}>
            <Box
                sx = {
                {
                    p: 4,
                    boxShadow: 16,
                    borderRadius: 2,
                    bgcolor: "background.paper"
                }
            }>
                <Typography variant={"h4"} gutterBottom align="center">Connexion</Typography>
                <form>
                    <TextField
                        {...register("login", ValidationConnexion.login)}
                        label={"Login"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        error={!!errors.login}
                        helperText={errors.login?.message}></TextField>
                    <TextField
                        {...register("password", ValidationConnexion.password)}
                        label={"Password"}
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        error={!!errors.password}
                        helperText={errors.password?.message}></TextField>

                </form>
            </Box>
        </Container>
    )
}