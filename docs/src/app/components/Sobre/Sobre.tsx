import styled from "styled-components"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import Image from "next/image"
import sobreSvg from '../../../../public/img/sobre.svg';
import '../../media.css'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Box = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  h1{
    color: white;
    font-weight: bold;
    font-family: Lekton;
  }
  p{
    color: white;
    font-family: Lekton;
    font-size: 20px;
  }

  @media(max-width: 1100px){
      width: 70%;
  }
`;


const Sobre: React.FC = () => { 
  
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
        <Container>    
            <Box>
              <h1>Sobre</h1>
              <p>
                  Curioso!
                  Gosto de sempre estar aprendendo coisas novas, contribuindo com minhas habilidades e competências e sem faltar responsabilidade!
                  <br/>
                  <br/>
                  Amo tudo relacionado a TI (Tecnologia da Informação), por isso procuro pesquisar e aprender cada vez mais sobre. Gosto de estar sempre junto de alguém realizando trabalhos em equipe, e também, gosto de novos desafios no dia a dia.
                  <br/>
                  <br/>
                  Sou Musico, e por isso procuro sempre ser criativo tanto em composições quanto em todas as áreas da minha vida. E por fim, tenho como objetivo na vida ajudar na construção de um mundo melhor, deixando assim a minha marca.
              </p>
            </Box>
            <Image 
                src={sobreSvg} 
                alt="ilustracao" 
                width={500} 
                height={370} 
                className="image"
            />
        </Container>
      </motion.div>
    </>
  )
}
export default Sobre