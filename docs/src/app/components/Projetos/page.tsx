'use client'

import React from 'react';
import styled from "styled-components";
import Cards from "../Card/Card";
import arrayProjetos from './projetos';
import arrayProjetosPessoais from './projetos_pessoais';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importar os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  gap: 50px;

  h1 {
    font-family: Lekton;
    font-weight: bold;
    margin-bottom: 20px;
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

const Projetos: React.FC = () => {
  return (
    <Container>
      <h1>Projetos Academicos</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
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
        {arrayProjetos.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards 
              link={item.link} 
              title={item.title} 
              text={item.text} 
              type='projeto'
              tecnologias={item.tecnologias}
              id={item.id}
              summary={item.summary}
              subTitle={item.subTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1>Projetos Pessoais</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
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
        {arrayProjetosPessoais.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards 
              link={item.link} 
              title={item.title} 
              text={item.text} 
              type='projeto'
              tecnologias={item.tecnologias}
              id={item.id}
              summary={item.summary}
              subTitle={item.subTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Projetos;
