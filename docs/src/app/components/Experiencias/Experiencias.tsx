import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Cards from '../Card/Card';


import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoReact, BiLogoJava, BiLogoFigma } from "react-icons/bi"
import { RiJavascriptFill } from "react-icons/ri"
import { IoLogoPython } from "react-icons/io"
import { SiMysql, SiApachecassandra, SiNeo4J, SiStyledcomponents } from "react-icons/si"
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi"
import { DiCss3, DiRedis } from "react-icons/di"
import { FaDocker, FaNodeJs } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { BsGit } from "react-icons/bs"


const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
`;

const Container = styled.div`
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
`;

const Experiencias: React.FC = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { x: -300, opacity: 0 },
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
          <h1>Experiencias Profissionais</h1>
          <Box>  
            <Cards 
                empName='MidAll'
                type='experiencia'
                link="https://midall.com.br/" 
                title='Estágio em Desenvolvimento Front-End'
                text={`• Criação de componentes;\n• Redux (armazenar estados);\n• Styled-Component (estilização de componentes);\n• React-Router-Dom (Criação e manipulação de rotas);\n• Hooks(useState, useEffect...).`}
                tecnologias={
                  <>
                    <IoLogoPython />
                    <RiJavascriptFill />
                    <BiLogoReact />
                    <BiLogoRedux />
                    <SiStyledcomponents /> 
                    <SiMysql />
                    <BiLogoJava />
                  </>
                }
            />
          </Box>
        </Container>
      </motion.div>
    </>
  );
};

export default Experiencias;