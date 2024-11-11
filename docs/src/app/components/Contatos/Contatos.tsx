import styled from "styled-components"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TfiEmail } from 'react-icons/tfi'
import { FaBitbucket } from 'react-icons/fa'
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import copy from "copy-to-clipboard"; 

const BlockLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.hr`
  width: 90%;
  height: 50px;
  color: white;
`;

const Text = styled.p<{
  fontSize?: string
  fontWeight?: string
}>`
  font-size: ${(props) => props?.fontSize};
  font-weight: ${(props) => props?.fontWeight};
  color: white;
  text-align: center;
  font-family: Lekton;
`;

const Box = styled.div<{
  flexDirection?: string
  gap?: string
  paddingTop: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props?.flexDirection};
  flex-wrap: wrap;
  gap: ${(props) => props?.gap};
  padding-top: ${(props) => props?.paddingTop};
  font-size: 50px;
  button{
    color: white;
    background-color: #2D2D2D;
    border: none;
  }
  a{
    color: white;
  }
`;

const Contatos: React.FC = () => { 
  
  const copyToClipboard = () => {
      copy("romribkevin@gmail.com");
      alert(`You have copied "romribkevin@gmail.com"`);
  }
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <BlockLine>
        <Line/>
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
          <Box flexDirection="column" gap="5px" paddingTop="30px">
            <Text fontSize="35px" fontWeight="800">Contatos</Text>
            <Text fontSize="25px" fontWeight="600">Entre em contato</Text>
            <Text fontSize="20px">Para mais informações sobre mim!</Text>
            <Box flexDirection="row" gap="80px" paddingTop="30px">
                <button onClick={copyToClipboard}><TfiEmail /></button>
                <a href="https://www.linkedin.com/in/kevinrribeiro/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://www.instagram.com/kevinromrib/" target="_blank"><AiOutlineInstagram /></a>
                <a href="https://github.com/KevinRomRib" target="_blank"><AiFillGithub /></a>
                <a href="..." target="_blank"><FaBitbucket /></a>
            </Box>
          </Box>
        </motion.div>
      </BlockLine>
    </>
  )
}
export default Contatos