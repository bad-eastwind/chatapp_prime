import {io} from 'socket.io-client';

function socketclient()
{
    const socket = io('http://localhost:3010');

    socket.on('connect', () => {
    console.log('Connected to server');
    });

    socket.on('disconnect', ()=> {
    console.log('disconnected from server');
    });
};

export default socketclient();