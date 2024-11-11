import styled from "styled-components"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
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

const Box = styled.div`
  font-size: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 100px;
  width: 60%;
  flex-wrap: wrap;
  @media(max-width: 750px){
    gap: 30px;
    
  }
  @media(max-width: 520px){
    gap: 20px;
    font-size: 4rem;
  }
  @media(max-width: 410px){
    gap: 10px;
    font-size: 3rem;
  }
`;


const Qualificacoes: React.FC = () => { 
  
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
            <h1>Qualificações</h1>
            <Box>
              <BiLogoReact />
              <BiLogoRedux /> 
              <SiStyledcomponents /> 
              <RiJavascriptFill />
              <AiFillHtml5 />
              <DiCss3 />
              <FaNodeJs /> 
              <BiLogoJava />
              <IoLogoPython />
              <SiMysql />
              <BiLogoMongodb />
              <DiRedis />
              <SiApachecassandra /> 
              <SiNeo4J /> 
              <FaDocker />
              <GrOracle /> 
              <BsGit /> 
              <BiLogoFigma /> 
            </Box>
        </Container>
      </motion.div>
    </>
  )
}
export default Qualificacoes