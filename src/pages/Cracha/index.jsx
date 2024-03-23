import React from "react";
import {useLocation} from 'react-router-dom';
import { AreaCracha, Container, ContainerP, Imagem } from "./styled";
 const Cracha = () => {
 const location = useLocation();

 const {usuario} = location.state
  return(
    <AreaCracha>
      <ContainerP>
       <Imagem img src="/essapessoanaoexiste.png" alt="EssaPessoaNãoExiste" />
       <Container>
        <h1><b>Nome:  </b>{usuario.nome}</h1>
        <h1><b>Sobrenome:  </b>{usuario.sobrenome}</h1>
        <h1><b>Idade:  </b>{usuario.idade}</h1>
        <h1><b>CPF:  </b>{usuario.cpf}</h1>

       </Container>
      </ContainerP>
    </AreaCracha>
  );
}

export default Cracha;