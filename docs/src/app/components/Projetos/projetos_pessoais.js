import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoReact, BiLogoJava, BiLogoFigma } from "react-icons/bi"
import { RiJavascriptFill } from "react-icons/ri"
import { IoLogoPython } from "react-icons/io"
import { SiMysql, SiApachecassandra, SiNeo4J, SiStyledcomponents, SiRubyonrails } from "react-icons/si"
import { BiLogoMongodb, BiLogoRedux, BiLogoPostgresql } from "react-icons/bi"
import { DiCss3, DiRedis, DiRuby } from "react-icons/di"
import { FaDocker, FaNodeJs } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { BsGit } from "react-icons/bs"

const arrayProjetos = [
    {
        id: 1,
        link: "https://github.com/KevinRomRib/LearningRuby",
        title: "CRUD Simples de Usuário",
        subTitle: "CRUD de Usuários - Aprendizado com Ruby on Rails.",
        summary: "CRUD de Usuários - Aprendizado com Ruby on Rails.",
        text: "Este projeto foi uma introdução ao Ruby on Rails, onde criei uma aplicação simples de cadastro, edição, listagem e exclusão de usuários. A ideia era aprender os conceitos básicos do framework e como funciona o fluxo de desenvolvimento em Ruby on Rails.",
        tecnologias: 
        <>
            <DiRuby />
            <SiRubyonrails />
            <BiLogoPostgresql />
        </>
    },
    {
        id: 2,
        link: "https://github.com/KevinRomRib/Portfolio",
        title: "Portfólio Pessoal",
        subTitle: "Portfólio Pessoal - Meu Primeiro Site",
        summary: "Portfólio Pessoal - Meu Primeiro Site",
        text: "Este projeto foi o primeiro portfólio que desenvolvi, utilizando HTML, CSS e JavaScript, como parte do meu aprendizado inicial de desenvolvimento web. O objetivo era construir uma página pessoal para apresentar meus projetos e habilidades de forma simples e funcional.",
        tecnologias: 
        <>
            <AiFillHtml5 />
            <DiCss3 />
            <RiJavascriptFill />
        </>
    },
    {
        id: 3,
        link: "https://github.com/MoneyHubOrg",
        title: "Aplicativo de Gestão Financeira - Controle de Despesas e Receitas",
        subTitle: "Aplicativo de gestão financeira para controle de despesas e receitas.",
        summary: "Aplicativo de gestão financeira para controle de despesas e receitas.",
        text: "Neste projeto, desenvolvi um aplicativo de gestão financeira, onde os usuários podem registrar suas receitas e despesas, e o sistema gera relatórios financeiros. O foco foi em aplicar boas práticas de programação e UX para facilitar o gerenciamento de finanças pessoais.",
        tecnologias: 
        <>
            <FaNodeJs />
            <RiJavascriptFill />
            <SiMysql />
        </>
    },
];

export default arrayProjetos;