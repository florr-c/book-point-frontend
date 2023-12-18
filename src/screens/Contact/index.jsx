import { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { TabContainer } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const saveUserContact = async () => {
    console.log('asd');
    const apiUrl = "http://localhost:8000";
    const response = await axios.post(
      `${apiUrl}/api/contact`,
      {
        name:name,
        lastName:lastName,
        password:password,
        message:message
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    document.getElementById('response').innerHTML=response.data;
    return response
  };

  const deleteUserContact = async () => {
    const apiUrl = "http://localhost:8000";
    const response = await axios.post(
      `${apiUrl}/api/contact/delete`,
      {
        name:name
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    document.getElementById('response').innerHTML=response.data;
    return response;
  };
  const updateUserContact = async () => {
    const apiUrl = "http://localhost:8000";
    const response = await axios.post(
      `${apiUrl}/api/contact/update`,
      {
        name:name,
        lastName:lastName,
        password:password,
        message:message
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    document.getElementById('response').innerHTML=response.data;
    return response;
    
  };
  return (
    <>
      <Container>
        <FormContainer>
          <h3>Deja tu Review del libro aqui</h3>
          <h6>Escribe tu reseña y nosotros recibiremos el comentario y compartiremos la review con el autor</h6>

          <Form.Control
            id="name"
            type="input"
            placeholder="Ingresa tu nombre"
            required
            onChange={({ target }) => setName(target.value)}
            style={{border:"2px solid #202335"}}

          />
          <Form.Control
            id="last-name"
            type="input"
            placeholder="Ingresa tu apellido"
            onChange={({ target }) => setLastName(target.value)}
            style={{border:"2px solid #202335"}}

          />
          <Form.Control
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña de bookstore"
            onChange={({ target }) => setPassword(target.value)}
            style={{border:"2px solid #202335"}}

          />
          <Form.Control
            id="message"
            type="password"
            placeholder="Escribe aqui tu review del libro"
            as="textarea"
            rows={5}
            onChange={({ target }) => setMessage(target.value)}
            style={{border:"2px solid #202335"}}

          />
          <TabsContainer>
            <Button 
            variant="primary" 
            type="submit" 
            style={{backgroundColor:'#202335', border:'none', width:'100px'}}
            onClick={({ e }) => saveUserContact()}
            >
              Enviar
            </Button>
            <Button variant="primary" type="submit" style={{backgroundColor:'#FF9900', border:'none', width:'150px', color:'#202335'}}
            onClick={({e})=> deleteUserContact()}>
              Borrar review
            </Button>
            <Button variant="primary" type="submit" style={{backgroundColor:'#FF9900', border:'none', width:'150px', color:'#202335'}}
            onClick={({e})=> updateUserContact()}>
              Actualiza datos
            </Button>
          </TabsContainer>
          <div id="response" class="alert alert-dark" role="alert" style={{backgroundColor:"#ff9900ae", border:'none'}}>
          <i class="bi-chat-heart" style={{color:'#ff9900', display:'flex',flexDirection:'row-reverse'}}></i>
          </div>
        </FormContainer>

        <img width="50%" src="/assets/contacto/formulario.png" />
      </Container>
      
      <img
        width="100%"
        src="/public/assets/contacto/banner footer.png"
        alt="banner"
      />
    </>
  );
}

export default Contact;

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
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8rem;
  padding-top: 35px;
  padding-bottom: 80px;

  `;