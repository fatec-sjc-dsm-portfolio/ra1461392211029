import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact, BiLogoJava, BiLogoFigma, BiLogoRedux, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io";
import { SiMysql, SiApachecassandra, SiNeo4J, SiStyledcomponents, SiRubyonrails, SiSwagger } from "react-icons/si";
import { DiCss3, DiRedis, DiRuby } from "react-icons/di";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { BsGit } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;

  h1 {
    color: white;
    font-weight: bold;
    font-family: Lekton;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 100px;
  width: 60%;
  flex-wrap: wrap;
  a {
    font-weight: bold;
    font-size: 16px;
    margin-top: 8px;
    transition: color 0.3s;
  }
  @media (max-width: 750px) {
    gap: 30px;
  }
  @media (max-width: 520px) {
    gap: 20px;
  }
  @media (max-width: 410px) {
    gap: 10px;
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 80px;

  a {
    text-decoration: none;
    color: #00acee;
    font-size: 16px;
    margin-top: 8px;
    transition: color 0.3s;
  }

  a:hover {
    color: #1da1f2;
  }

  @media (max-width: 520px) {
    font-size: 4rem;

    a {
      font-size: 14px;
    }
  }
  @media (max-width: 410px) {
    font-size: 3rem;

    a {
      font-size: 12px;
    }
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

  const techs = [
    { icon: <DiRuby />, name: "Ruby", link: "https://www.ruby-lang.org/pt/" },
    { icon: <SiRubyonrails />, name: "Ruby on Rails", link: "https://rubyonrails.org/" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { icon: <SiSwagger />, name: "Swagger", link: "https://swagger.io/" },
    { icon: <BiLogoReact />, name: "React", link: "https://react.dev/" },
    { icon: <BiLogoRedux />, name: "Redux", link: "https://redux.js.org/" },
    { icon: <SiStyledcomponents />, name: "Styled Components", link: "https://styled-components.com/" },
    { icon: <RiJavascriptFill />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <AiFillHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { icon: <DiCss3 />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/" },
    { icon: <BiLogoJava />, name: "Java", link: "https://www.java.com/" },
    { icon: <IoLogoPython />, name: "Python", link: "https://www.python.org/" },
    { icon: <SiMysql />, name: "MySQL", link: "https://www.mysql.com/" },
    { icon: <BiLogoMongodb />, name: "MongoDB", link: "https://www.mongodb.com/" },
    { icon: <DiRedis />, name: "Redis", link: "https://redis.io/" },
    { icon: <SiApachecassandra />, name: "Cassandra", link: "https://cassandra.apache.org/" },
    { icon: <SiNeo4J />, name: "Neo4j", link: "https://neo4j.com/" },
    { icon: <FaDocker />, name: "Docker", link: "https://www.docker.com/" },
    { icon: <GrOracle />, name: "Oracle", link: "https://www.oracle.com/" },
    { icon: <BsGit />, name: "Git", link: "https://git-scm.com/" },
    { icon: <BiLogoFigma />, name: "Figma", link: "https://www.figma.com/" },
  ];

  return (
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
          {techs.map((tech, index) => (
            <TechItem key={index}>
              {tech.icon}
              <a href={tech.link} target="_blank" rel="noopener noreferrer">
                {tech.name}
              </a>
            </TechItem>
          ))}
        </Box>
      </Container>
    </motion.div>
  );
};

export default Qualificacoes;