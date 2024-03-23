import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {AreaHome} from "./styled";
const Home = () => {
    const navigate = useNavigate();
    const usuarioObjct = {
        nome: "",
        sobrenome: "",
        idade: "",
        cpf: "", 
    }
    const [usuario, setUsuario] = useState(usuarioObjct);

    const onChanged = (e) => {
        const {name, value} = e.target;
        setUsuario({...usuario, [name]: value});
    }
    const noClique = () =>{
        navigate('./cracha', {state: {usuario}});
    }

  return(
    <AreaHome>
     <form>
        <label htmlFor="nome">Insira seu nome:</label>
        <input type="text" placeholder="ex: Helder" name="nome" required={true} onChange={onChanged} />
        <label htmlFor="sobrenome">Insira seu sobrenome:</label>
        <input type="text" placeholder="ex: Pestana" name="sobrenome" required={true} onChange={onChanged} />
        <label htmlFor="idade">Insira sua idade:</label>
        <input type="number" placeholder="ex: 18" name="idade" required={true} onChange={onChanged} />
        <label htmlFor="cpf">Insira seu CPF:</label>
        <input type="text" placeholder="ex: 40020010091" name="cpf" required={true} onChange={onChanged} />
        <button type="button" onClick={noClique}>Enviar</button>
     </form>
    </AreaHome>
    );
}

export default Home;