import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image?: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kassen App',
    image: require('@site/static/img/drawer.png').default,
    description: (
      <>
          Die iOS-App ist konzipiert für Servicekräfte, welche damit Kundenbestellungen aufnehmen und abrechnen. Alle angelegten Tischpläne, Artikel etc. sind in der App verfügbar und Bestellungen lassen sich mit wenigen Fingertips oder -gesten tätigen.
      </>
    ),
  },
  {
    title: 'Web Desk',
    image: require('@site/static/img/web_desk.png').default,
    description: (
      <>
          Mit dem Servire Web Desk haben Sie Ihren Betrieb jederzeit und überall unter Kontrolle. Verwalten Sie hier Ihre Speisekarten, Tischpläne oder Stammdaten und erhalten Sie diverse Statistiken zu Auslastung, Top-Gerichten, Umsätzen und vieles mehr.
      </>
    ),
  },
  /*{
    title: 'Mit Support & Dokumentation',
    Svg: require('@site/static/img/undraw_annotation_re_h774.svg').default,
    description: (
      <>
        Servire bietet neben der intuitiven Bedienung auch ein umfangreiches Portfolio an Dokumentation und Hilfe-Inhalten.
      </>
    ),
  },*/
];

function Feature({title, image, Svg, description}: FeatureItem) {
  // @ts-ignore
    return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        {image !== undefined &&
            <img src={image} className={styles.featureImage} role="img"  alt="Test"/>
        }
        {Svg !== undefined &&
            <Svg className={styles.featureSvg} role="img"/>
        }

      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
