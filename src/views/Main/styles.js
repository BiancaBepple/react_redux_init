import styled from 'styled-components';
import { Button, TextField, Paper } from '@material-ui/core';



export const Title = styled.h1`
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700&display=swap');
font-family: Yanone Kaffeesatz;
font-size: 50px;
`;

export const Card = styled.div`
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700&display=swap');
font-family: Yanone Kaffeesatz;
    padding: 20px;
    background:#fff;
    border-radius: 20px;
    min-height: 400px;
    width: 90%;
    margin: 50px auto;
`;

export const SendButton = styled(Button)`
        &&
        {
            @import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700&display=swap');
font-family: Yanone Kaffeesatz;   
        background-color: #2cd923;
        color: #fff;
        border-radius: 20px;
        padding: 7px 14px;
        margin-left: 10px};
`;

export const Nome = styled.span`
color: black;
font-size: 20px`;

export const DeleteButton = styled(Button)`
&&{
    @import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700&display=swap');
    font-family: Yanone Kaffeesatz;
    background-color: red;
    color: white;
    margin-right: 0px;
    margin-left: 5px;
    border-radius: 20px;
    float: right;
}`;

export const MyInput = TextField;

export const PaperNome = styled(Paper)`
&&{
    display: inline-block;
    padding: 20px 10px;
    background: #fff;
    border-radius: 20px;
    min-height: 20px;
    width: 22%;
    margin: 7px;
}`;