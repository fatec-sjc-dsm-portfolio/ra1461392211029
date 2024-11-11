'use client'

import React from 'react';
import styled from "styled-components";
import Cards from "../Card/Card";
import arrayProjetos from './projetos';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  flex-wrap: wrap;
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

const Projetos: React.FC = () => {

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
          <h1>Projetos</h1>
          <Box>  
            {arrayProjetos.map((item, index) => (
              <Cards 
                link={item.link} 
                title={item.title} 
                text={item.text} 
                type='projeto'
                tecnologias={item.tecnologias}
                id={item.id}
                summary={item.summary}
                key={index}
              />
            ))}
          </Box>
        </Container>
      </motion.div>
    </>
  );
};

export default Projetos;