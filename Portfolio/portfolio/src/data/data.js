import styled from 'styled-components'
import mackbook from '../img/macbook.png'
// import whatslabImg from '../img/Captura_WhatsLab_2.png'
import whatslabImg from '../img/Captura_WhatsLab_3.png'


const Paragraph = styled.p``


export const myName = 'Raphael Ribeiro'
export const pageTitle = `Eu sou `
export const pageSubtitle = 'Desenvolvedor Web Full Stack'
export const myDescription = 
    <>
        <Paragraph>Sou Raphael Ribeiro, desenvolvedor web full stack, apaixonado por programação e tecnologia.</Paragraph>
        <Paragraph>Iniciei minha carreira como desenvolvedor VBA em 2017 e estou migrando para a área de desenvolvimento Web.</Paragraph>
        <Paragraph>Gosto de trabalhar em equipe, com foco em resultados, buscando melhorias e inovações que agreguem valor a organização.</Paragraph>
        <Paragraph>Estou sempre em busca de novos conhecimentos para me desenvolver e evoluir na minha carreira profissional.</Paragraph>
    </>

export const tags = ['React', 'Redux', 'NodeJs', 'MySql']

export const knowledge = [
    {
        title: 'Front-end',
        description:
            <>
                <p>Desenvolvimento de aplicações web utilizando React, HTML, CSS e Javascript.</p>
                <p>Criação de sites responsivos seguindo principio de Mobile First</p>
            </>
        ,
    },

    {
        title: 'Back-end',
        description: 
            <>
                <p>Aplicações utilizando NodeJs, Typescript e MySql.</p>
                <p>Criação de API´s para comunicação com front-end seguindo o princípio de Clean Code</p>
            </>
        ,
    },
]

export const education = [
    {
        // title: 'Curso de Web Full Stack na Labenu',
        title: 'Labenu - Web Full Stack Development',
        subtitle: '6 meses - 2020',
        // description: ['HTML | CSS | Javascript', 'React.js | Redux', 'Git', 'Node.js', 'SQL', 'Amazon Web Services | Firebase', 'Unit Testing | Jest', 'Typescrypt'],
        description: ['HTML | CSS | Javascript', 'React.js | Redux', 'Git', 'Node.js', 'SQL | MongoDB', 'Knex | Mongoose', 'Amazon Web Services | Firebase | Heroku', 'Unit Testing | Jest', 'Typescrypt'],
    },
    // {
    //     title: 'Mackenzie - Comércio Exterior',
    //     subtitle: '2004 - 2010 (incompleto)',
    //     description: '',
    // },
]



export const projects = [
    {
        title: 'WhatsLab',
        subtitle: 'Front-end',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        // image: mackbook,
        image: whatslabImg,
        gitUrl: 'https://github.com/RaphaelRPera/Projects/tree/main/WhatsLab',
        url: 'http://whatslab-raphael.surge.sh/'
    },
    {
        title: 'WhatsLab',
        subtitle: 'Front-end',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        // image: mackbook,
        image: whatslabImg,
        gitUrl: 'https://github.com/RaphaelRPera/Projects/tree/main/WhatsLab',
        url: 'http://whatslab-raphael.surge.sh/'
    },
    {
        title: 'WhatsLab',
        subtitle: 'Front-end',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        // image: mackbook,
        image: whatslabImg,
        gitUrl: 'https://github.com/RaphaelRPera/Projects/tree/main/WhatsLab',
        url: 'http://whatslab-raphael.surge.sh/'
    },
    {
        title: 'WhatsLab',
        subtitle: 'Front-end',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        // image: mackbook,
        image: whatslabImg,
        gitUrl: 'https://github.com/RaphaelRPera/Projects/tree/main/WhatsLab',
        url: 'http://whatslab-raphael.surge.sh/'
    },

]


export const footer = `©${new Date().getFullYear()} ${myName}`


const data = {
    myName,
    pageTitle,
    pageSubtitle,
    myDescription,
    tags,
    knowledge,
    education,
    projects,
    footer,
}

export default data