import React from 'react';
import Layout from '@theme/Layout';
//import './quem-somos.css'; ---A página inicial fica "quebra se eu importar o css por algum motivo"

export default function MyReactPage() {
    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    padding: "2rem"
                }}
            >
                <h1>Quem Somos</h1>
                <div className="container">
                    <div className="row">
                        <div className="person">
                            <img src="/img/pedro.png" alt="Nome da Pessoa 1" />
                            <h3>Pedro Henrique da Silva</h3>
                            <p>Estudante de Engenharia de Software</p>
                            <a href="https://github.com/PeHSilva">GitHub</a>
                        </div>

                        <div className="person">
                            <img src="/img/batini.png" alt="Nome da Pessoa 2" />
                            <h3>Luis Fernando Battini</h3>
                            <p>Estudante de Ciência da Computação</p>
                            <a href="https://github.com/Battini001">GitHub</a>
                        </div>

                        <div className="person">
                            <img src="/img/kaio.png" alt="Nome da Pessoa 3" />
                            <h3>Kaio Henrique Gois Guari</h3>
                            <p>Estudante de Engenharia de Software</p>
                            <a href="https://github.com/kaioguaricafa">GitHub</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="person">
                            <img src="/img/edu.png" alt="Nome da Pessoa 4" />
                            <h3>Eduardo Ryann Czigler</h3>
                            <p>Estudante de Ciência da Computação</p>
                            <a href="https://github.com/EduardoCzz">GitHub</a>
                        </div>

                        <div className="person">
                            <img src="/img/will.png" alt="Nome da Pessoa 5" />
                            <h3>Wilson José Tamais</h3>
                            <p>Estudante de Ciência da Computação</p>
                            <a href="https://github.com/WillTms">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}