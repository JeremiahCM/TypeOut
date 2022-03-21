import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Connect.css';

const Connect = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="connectOuterContainer">
            <div className="joinInnterContainer">
                <h1 className="typeOutHeading">TypeOut</h1>
                <h2 className="connectHeading">Connect to a Room</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="insert username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formRoom">
                        <Form.Label>Room</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="insert room code"
                            value={room}
                            onChange={(event) => setRoom(event.target.value)}
                        />
                    </Form.Group>
                    <Link onClick={event => (!username || !room) ? event.preventDefault() : null} to={{ pathname: "/chat", state: { username, room} }}>
                        <Button className="button" variant="success" type="submit">
                            Connect
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default Connect;