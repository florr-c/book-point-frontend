import { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { TabContainer } from "react-bootstrap";

function User() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const saveUserContact = async () => {
    // mongoDB
  };

  return (
    <>
      <Container>
        <FormContainer>
          <h3>Acceso</h3>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            id="name"
            type="input"
            placeholder="Ingresa tu nombre"
            required
            onChange={({ target }) => setName(target.value)}
            style={{border:"2px solid #202335"}}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            onChange={({ target }) => setEmail(target.value)}
            style={{border:"2px solid #202335"}}
            
          />
          <Form.Label>Contrasena</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Ingresa tu contrasena"
            onChange={({ target }) => setPassword(target.value)}
            style={{border:"2px solid #202335"}}

          />
          <TabsContainer style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <Button variant="primary" type="submit" style={{backgroundColor:'#202335', border:'none', width:'200px'}}>
              Ingresar
            </Button>
          </TabsContainer>
          {/* button and onClick -> saveUserContact */}
        </FormContainer>

        <img width="50%" src="/public/assets/usuario/Group 710.png" />
      </Container>

      <img
        width="100%"
        src="/public/assets/contacto/banner footer.png"
        alt="banner"
      />
    </>
  );
}

export default User;

// *** Styles ***
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  background-color: #FAF8F6;
  padding: 34px;
  padding-top: 43px;
  padding-bottom: 25px;
  border-radius: 18px 0px 0px 18px;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8rem;
  padding-top: 35px;
  padding-bottom: 80px;

  `;
