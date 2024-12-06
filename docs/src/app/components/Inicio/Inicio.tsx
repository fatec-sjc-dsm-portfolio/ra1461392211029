import Image from "next/image";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../../media.css';
import selfie from "../../../../public/img/Foto Selfie.jpeg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a1a1a;
  color: #fff;
  @media (max-width: 1100px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
  }

  img {
    border-radius: 10px;
    width: 100%;
    max-width: 450px; /* Ajustando o tamanho máximo da imagem */
    height: auto;
    object-fit: cover; /* Garantindo que a imagem preencha o espaço disponível sem distorcer */
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.p`
  font-family: Lekton;
  font-size: 3.5vw;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Subtitle = styled.p`
  font-family: Lekton;
  font-size: 1.7vw;
  color: rgba(255, 255, 255, 0.6);
  @media (max-width: 1100px) {
    font-size: 3vw;
  }
`;

const Content = styled.p`
  font-family: Jura;
  font-size: 1.7vw;
  padding-top: 5%;
  color: white;
  @media (max-width: 1100px) {
    font-size: 3vw;
  }
`;

const Inicio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src={selfie} alt="Foto do Kévin" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>
          <Typewriter
            cursor={true}
            words={["Olá, eu sou o Kévin", "Bem-vindo ao meu Portfolio"]}
            loop={0}
          />
        </Title>
        <Subtitle>Desenvolvedor de Sistemas</Subtitle>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          variants={animationVariants}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        >
          <Content>
            Bem vindo ao meu Portfólio!<br />Aqui você encontrará informações<br />sobre mim irei expor meus projetos,<br />meu currículo e muito mais!<br />Muito obrigado pelo seu acesso e boa navegação!
          </Content>
        </motion.div>
      </ContentWrapper>
    </Container>
  );
};

export default Inicio;
