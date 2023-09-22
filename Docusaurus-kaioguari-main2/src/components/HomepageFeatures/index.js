import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Para fácil uso',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O My Série List foi projetado desde o início para ser facilmente utilizado
        com o intuito de relembrar séries e seus episodios.
      </>
    ),
  },
  {
    title: 'Concentre-se no que importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        My Série List permite que você relembre suas séries e episodios e nós faremos
        as tarefas. Vá em frente e marque suas séries para a sua lista.
      </>
    ),
  },
  {
    title: 'Desenvolvido por iBoa',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Amplie ou personalize a lista sobre a sua série favorita.
        A lista pode ser estendida quando reutilizada... 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
