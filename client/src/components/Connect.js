import { Box, Button, Container, Input, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white',
                    textAlign: "center",
                },
                h2: {
                    color: 'blueviolet',
                },
            },
        },
    },
});

const Connect = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    return (
        <ThemeProvider theme={theme}>
        <Box className="connectOuterContainer">
            <Box className="connectInnerContainer">
                <Container className="connectHeader">
                    <Typography variant="h2">TypeOut</Typography>
                </Container>
                <Typography variant="h4" sx={{ mt: 5 }} className="heading">Connect to a Room</Typography>
                <Box className="connectInput">
                    <Typography variant="h6" sx={{ mt: 5 }}>Username</Typography>
                    <Input placeholder="insert username" className="connectInput" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </Box>
                <Box className="connectInput">
                    <Typography variant="h6" sx={{ mt: 5 }}>Room Code</Typography>
                    <Input placeholder="insert room code" className="chatInput" type="text" value={room} onChange={(event) => setRoom(event.target.value)} />
                </Box>
                <Link onClick={event => (!username || !room) ? event.preventDefault() : null} to={{ pathname: "/chat", state: { username, room } }}>
                    <Button className="submitButton" sx={{ mt: 5, mb: 5 }} color="success" variant="contained">Join Room</Button>
                </Link>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default Connect;