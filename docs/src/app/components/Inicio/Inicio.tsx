
import Image from "next/image"
import icon from "../../../../public/img/pc.png"
import styled from "styled-components"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../../media.css'


const Field = styled.div`
  @media(max-width: 1100px){    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.p`
    width: 500px;
    height: 200px;
    font-family: Lekton;
    color: white;
    font-size: 3.5vw;
    @media(max-width: 1100px){
      display: none;
    }
`;

const Subtitle = styled.p`
    font-family: Lekton;
    color: rgba(255, 255, 255, 0.60);
    font-size: 1.7vw;
    padding-top: 5%;
    @media(max-width: 1100px){
      font-size: 3vw;
      text-align: center;
    }
`;

const Content = styled.p`
    font-family: Jura;
    color: white;
    font-size: 1.7vw;
    padding-top: 5%;
    padding-bottom: 5%;
    @media(max-width: 1100px){
      font-size: 3vw;
      text-align: center;
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
    <>
      <main>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 80,
          }}
        >
          <Image 
            src={icon} 
            alt="ilustracao" 
            width={586} 
            height={456}
            className="image"
          />
        </motion.div>
        <Field>
            <Title>
              <Typewriter 
                cursor={true} 
                words={[`Olá, eu sou o Kévin`, 'Bem-vindo ao meu Portfolio']} 
                loop={0}
              /> 
            </Title>
            <Subtitle>
              Desenvolvedor de <br/>Sistemas
            </Subtitle>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              exit="hidden"
              variants={animationVariants}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 10,
              }}
            >
              <Content>
                Bem vindo ao meu Portfólio!<br/>Aqui você encontrará informações<br/>sobre mim irei expor meus projetos,<br/>meu currículo e muito mais!<br/>Muito obrigado pelo seu acesso e boa navegação!
              </Content>
            </motion.div>
        </Field>
      </main>
    </>
  )
}
export default Inicio