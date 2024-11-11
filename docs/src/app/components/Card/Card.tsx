import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  font-size: 50px;
  gap: 10px;
`;

const Link = styled.a`
  cursor: pointer;
`;

const Container = styled.div`
  width: 500px;
  @media(max-width: 1120px){
    width: auto;
  }
  @media(max-width: 490px){
    width: 450px;
  }
  @media(max-width: 470px){
    width: 400px;
  }
  @media(max-width: 400px){
    width: 350px;
  }
`;

interface CardProps {
  link?: string;
  text?: string;
  title?: string;
  type?: string;
  empName?: string;
  summary?: string;
  tecnologias?: React.ReactNode;
  id?: number;
}

const Cards: React.FC<CardProps> = ({ link, text, title, type, tecnologias, empName, id, summary }) => {
  const [showModal, setShowModal] = useState(false);

  const redirecionarParaSiteExterno = (link: any) => {
    const siteExternoURL = link;
    window.open(siteExternoURL, '_blank');
  };

  const handleOpenModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <Container>
      <Card
        style={{
          background: '#2D2D2D',
          color: 'white',
          border: '1px solid white',
          margin: '20px',
        }}
        >
        <Card.Body
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
          }}
          >
          {type !== 'projeto' && <h4>{empName}</h4>}
          <Card.Title>{title}</Card.Title>
          {text && (
            <Card.Text>
              {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Card.Text>
          )}
          {type === 'projeto' && <Link onClick={handleOpenModalClick}>Ver Mais</Link>}
          <Field>{tecnologias}</Field>
          <Button
            variant="primary"
            onClick={() => redirecionarParaSiteExterno(link)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {type === 'projeto' ? (
              <>
                <AiFillGithub />
                "Repositório"
              </>
            ) : (
              'Site da empresa'
            )}
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Resumo do Projeto</h5>
          <p>{summary}</p>
          <h5>Contribuições</h5>
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cards;
