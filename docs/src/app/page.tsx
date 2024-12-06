'use client'

import { motion, useScroll } from "framer-motion"
import "./global.css"

import Inicio from "./components/Inicio/Inicio"
import Sobre from "./components/Sobre/Sobre"
import Projetos from "./components/Projetos/page"
import Qualificacoes from "./components/Qualificacoes/Qualificacoes"
import Experiencias from "./components/Experiencias/Experiencias"
import Contatos from "./components/Contatos/Contatos"
import Spinner from "./components/Spinner/Spinner"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { hotjar } from "react-hotjar"


const App = () => {

  const { scrollYProgress } = useScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#1a1a1a";
    setTimeout(() => {
      setLoading(false);
      document.body.style.backgroundColor = "#2D2D2D";
    }, 1000);
  }, []);

  useEffect(() => {
    hotjar.initialize(3745008, 6)
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <body>  
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
            <Inicio />
            <Sobre />
            <Projetos />
            <Qualificacoes />
            <Experiencias />
            <Contatos />
          </body>
        </>
      )}
    </>
  )
}
export default App