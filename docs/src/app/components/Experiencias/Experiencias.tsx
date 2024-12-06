'use client'

import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Cards from '../Card/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact, BiLogoJava, BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io";
import { SiMysql, SiSwagger, SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  flex-wrap: wrap;

  @media (max-width: 1372px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  width: 100%;

  @media (max-width: 520px) {
    width: 200px;
    padding: 15px;
  }

  h1 {
    font-family: Lekton;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;

    @media (max-width: 520px) {
      font-size: 12px;
    }
  }

  .tecnologias {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 20px;

    @media (max-width: 520px) {
      font-size: 16px;
    }
  }

  a {
    text-decoration: none;
    color: #00acee;
    font-weight: bold;
    font-size: 14px;

    @media (max-width: 520px) {
      font-size: 12px;
    }
  }

  .swiper {
    width: 100%;
    padding: 10px 0 40px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background: #00acee;
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
    <Container>
      <h1>Experiências Profissionais</h1>
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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1800: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
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
                  <SiSwagger />
                  <SiMysql />
                  <BiLogoJava />
                </>
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Cards 
              empName='SPC Grafeno'
              type='experiencia'
              link="https://spcgrafeno.com.br/" 
              title='Estágio em Desenvolvimento Back-End'
              text={`• Linguagem Ruby;\n• Framework Ruby on Rails;\n• Documentação de aplicações com Swagger;\n`}
              tecnologias={
                <>
                  <DiRuby />
                  <SiRubyonrails />
                  <BiLogoPostgresql />
                  <SiSwagger />
                </>
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Cards 
              empName='SPC Grafeno'
              type='experiencia'
              link="https://spcgrafeno.com.br/" 
              title='Desenvolvimento Back-End Jr. (Atual)'
              text={`• Linguagem Ruby;\n• Framework Ruby on Rails;\n• Documentação de aplicações com Swagger;\n`}
              tecnologias={
                <>
                  <DiRuby />
                  <SiRubyonrails />
                  <BiLogoPostgresql />
                  <SiSwagger />
                </>
              }
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </Container>
  );
};

export default Experiencias;
  