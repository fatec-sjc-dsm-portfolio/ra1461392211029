import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoReact, BiLogoJava, BiLogoFigma } from "react-icons/bi"
import { RiJavascriptFill } from "react-icons/ri"
import { IoLogoPython } from "react-icons/io"
import { SiMysql, SiApachecassandra, SiNeo4J, SiStyledcomponents, SiArduino } from "react-icons/si"
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript  } from "react-icons/bi"
import { DiCss3, DiRedis } from "react-icons/di"
import { FaDocker, FaNodeJs } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { BsGit } from "react-icons/bs"
import { CgServerless } from "react-icons/cg";

const arrayProjetos = [
    {
        id: 1,
        link: "https://github.com/whatscodeg3/API-DSM-ServiceDesk",
        title: "Service Desk",
        subTitle: "Central de Serviços: Plataforma Integrada Desenvolvida com SCRUM para Suporte e Soluções de TI",
        summary: "Em geral, uma Central de Serviços é uma ferramenta que oferece assistência para resolver problemas no ambiente de tecnologia da informação. Esse projeto foi desenvolvido com base na metodologia ágil SCRUM, que tem como objetivo principal promover a proatividade, autonomia e aprimorar a produtividade da equipe como um todo. A Central de Serviços é uma plataforma integrada que visa atender as demandas e necessidades dos usuários, fornecendo suporte e soluções eficientes para problemas técnicos e requisições de serviço. Neste projeto, foi utilizado a metodologia SCRUM, baseada em princípios ágeis, enfatiza a colaboração, a comunicação e a flexibilidade. No contexto da Central de Serviços, a equipe adota uma abordagem iterativa e incremental para o desenvolvimento e aprimoramento contínuos da plataforma. Isso permite que sejam priorizadas as tarefas mais importantes, levando em consideração as necessidades dos usuários e as demandas do ambiente de TI.",
        text: "Neste projeto pude fazer parte do desenvolvimento das interfaces, utilizando HTML, CSS e JavaScript para garantir uma experiência de usuário atraente e responsiva em diferentes dispositivos. Além disso, participei do desenvolvimento do framework Flask, gerenciando as requisições do back-end e estabelecendo conexões eficientes com o front-end. Participei ativamente na criação das rotas do Flask, definindo o tratamento de requisições e respostas. Aprendi e apliquei JavaScript para aprimorar a interatividade, implementando recursos dinâmicos como animações, manipulação do DOM e a construção de gráficos para a página de relatórios.",
        tecnologias:                   
        <>
            <IoLogoPython />
            <RiJavascriptFill />
            <AiFillHtml5 />
            <DiCss3 />
            <SiMysql />
        </>
    },
    {
        id: 2,
        link: "https://github.com/whatscodeg3/API-2DSM-DailyBot",
        title: "DailyBot",
        subTitle: "Automação com Crawler e Interfaces em ReactJS Integradas ao Backend",
        summary: "Desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.",
        text: "No projeto, assumi o desafiador papel de Scrum Master, facilitando a metodologia ágil Scrum e assegurando a eficácia da equipe de desenvolvimento. Minhas responsabilidades incluíram a condução das cerimônias do Scrum, a remoção de obstáculos, o suporte ao Product Owner e a promoção da colaboração. Além disso, desempenhei também no desenvolvimento de interfaces usando ReactJS. Criei componentes reutilizáveis, implementei lógica de negócios na interface do usuário e integrei com a API backend. Utilizei o React Router para navegação, hooks para gerenciamento de estado e styled-components para estilos personalizados.",
        tecnologias: 
        <>
            <FaNodeJs /> 
            <IoLogoPython />
            <RiJavascriptFill />
            <BiLogoReact />
            <SiStyledcomponents /> 
            <SiMysql />
        </>
    },
    {
        id: 3,
        link: "https://github.com/whatscodeg3/API-3DSM",
        title: "Sistema de Controle de Vendas e Parcelas",
        subTitle: "Microsserviços para Gestão de Vendas e Parcelas com Atomic Design no Front-End",
        summary: "Em resumo, um sistema de microsserviços que simplifica e automatiza o processo de cadastramento de vendas, controle de parcelas e geração de relatórios, otimizando o trabalho dos funcionários e fornecendo uma visão abrangente e precisa das informações comerciais.",
        text: "Neste projeto, como desenvolvedor, responsabilizei-me pelo front-end utilizando React, adotando a abordagem de Atomic Design. Essa metodologia organiza os componentes em átomos, moléculas, organismos, templates e páginas. Utilizei styled-components para estilização, permitindo a criação de estilos personalizados diretamente no código JavaScript. A navegação foi facilitada com react-router-dom, garantindo uma experiência de usuário suave. O uso de hooks facilitou o gerenciamento de estado e a execução de efeitos colaterais.",
        tecnologias: 
        <>
            <BiLogoJava />
            <RiJavascriptFill />
            <BiLogoReact />
            <SiStyledcomponents /> 
            <SiMysql />
            <FaDocker />
        </>
    },
    {
        id: 4,
        link: "https://bitbucket.org/neocode2023/workspace/repositories/",
        title: "Estações Meteorológicas",
        subTitle: "Monitoramento Meteorológico com IoT e Dashboards Interativos",
        summary: "O projeto consiste em desenvolver estações meteorológicas de baixo custo com sensores para monitorar a direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão. Os dados coletados serão enviados para um servidor e exibidos em um portal com relatórios e dashboards. O objetivo é envolver alunos do ensino médio na aprendizagem baseada em problemas, usando o portal para demonstrar conceitos matemáticos e destacar a importância do monitoramento ambiental na prevenção de desastres naturais por meio da geração de alertas.",
        text: "Atuei como desenvolvedor full stack, participando do desenvolvimento tanto do front-end quanto do back-end. No front-end, criei interfaces dinâmicas e responsivas utilizando tecnologias como React e JavaScript. No back-end, implementei a lógica de comunicação entre os sensores e o servidor, utilizando frameworks e tecnologias para garantir a integridade e segurança dos dados coletados. O objetivo principal do projeto era garantir a visualização em tempo real dos dados meteorológicos e facilitar a análise dos mesmos por meio de relatórios e dashboards.",
        tecnologias: 
        <>
            <BiLogoReact />
            <RiJavascriptFill />
            <IoLogoPython />
            <SiArduino />
            <SiMysql />
        </>
    },
    {
        id: 5,
        link: "https://github.com/AgroVision-Fatec",
        title: "Registro e Quantificação de Pragas",
        subTitle: "Aplicação Mobile para Monitoramento Inteligente de Pragas em Campos Agrícolas",
        summary: "Aplicação mobile para registro e quantificação de pragas em campos agrícolas. O projeto busca a modernização da agricultura brasileira com a redução de custos fixos e a diminuição da atividade humana em campo para análise de pragas.",
        text: "Atuei como Product Owner, coordenando o desenvolvimento do projeto. Meu papel envolveu a definição de requisitos, priorização de funcionalidades e acompanhamento das entregas. Trabalhei diretamente com a equipe de desenvolvimento para garantir que a solução atendesse às necessidades dos usuários e facilitasse a análise de pragas em campo. A aplicação visa reduzir custos e melhorar a eficiência na agricultura por meio da tecnologia.",
        tecnologias: 
        <>
            <BiLogoReact />
            <BiLogoTypescript />
            <SiMysql />
        </>
    },
    {
        id: 6,
        link: "https://github.com/orgs/WhatsCode-24/repositories",
        title: "Gestão de Travas de Portas",
        subTitle: "Automação e Segurança no Controle de Acessos com Aplicação Web",
        summary: "Aplicação web para registro e monitoramentos de travas de portas. O projeto visa automatizar o gerenciamento de travas de portas, proporcionando maior segurança, rastreabilidade e flexibilidade.",
        text: "Atuei como desenvolvedor full stack, sendo responsável tanto pelo front-end quanto pelo back-end. No front-end, implementei interfaces interativas e responsivas utilizando React, enquanto no back-end, desenvolvi as funcionalidades necessárias para gerenciar as travas de portas e garantir a segurança e eficiência do sistema.",
        tecnologias: 
        <>
            <BiLogoReact />
            <RiJavascriptFill />
            <FaNodeJs />
            <CgServerless />
            <SiMysql />
        </>
    },
];

export default arrayProjetos;