import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {ValidationConnexion} from "./ValidationConnexion.ts";
import {useEffect, useState} from "react";
import {ServiceCheckServeurOnline} from "../../services_REST/serveur/ServiceCheckServeurOnline.ts";
import {useNavigate} from "react-router";
import {TokenJWT} from "../../services_REST/serveur/TokenJWT.ts";
import {useAuthentificationJWTStore} from "../../store/AuthenticationJWT.ts";

interface FormData {
    login: string
    password: string
}

export const Connexion = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>();
    const [message, setMessage] = useState<string>("Connexion...")
    const navigate = useNavigate()
    const {setToken} = useAuthentificationJWTStore()

    const onSubmit:SubmitHandler<FormData>=data=>{
        TokenJWT(data.login, data.password)
            .then(token => {
                if (token != null) {
                    console.log(token)
                    setToken(token)
                    navigate('/home')
                }
            })
        console.log(data)
    }

    useEffect(() => {
        const repeter = setInterval(()=> {
            ServiceCheckServeurOnline()
                .then((etat:boolean)=>{
                    if(etat){
                        setMessage(`⚙️ Serveur distant fonctionnel`)
                    }else{
                        setMessage(`⛓️‍💥 Le serveur distant ne répond pas.Veuillez vous reconnecter plus tard!`)
                    }
                })
        },3500)

        return()=>clearInterval(repeter)
    }, []);


    const setMessageColor = (message: string) => {
        if(message.includes(`⚙️`)){
            return 'success'
        }else if (message.includes(`⛓️‍💥`)){
            return 'error'
        }
        return 'text.secondary'
    };

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

                <Typography
                    variant="subtitle1"
                    sx={{fontWeight: 'bold'}}
                    color={setMessageColor(message)}
                >
                    {message}
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        fullWidth
                    >
                        Submit
                    </Button>

                </form>
            </Box>
        </Container>
    )
}