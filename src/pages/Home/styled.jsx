import styled from 'styled-components';

export const AreaHome = styled.div`

 form{
    display: flex;
    flex-direction: column;
 }
 input{
    width:20rem;
    height:2rem;
    border-radius: 2rem;
    margin-bottom: 1rem;
 }
 button{
    width:20rem;
    height: 5rem;
    font-size:3rem;
    color:white;
    background-color: green;
    transition: 0.6s;
    border-radius: 1.5rem;
    &:hover{
        transition: 0.6s;
        background-color: white;
        color:green;
        cursor:pointer;
    }
 }
`;