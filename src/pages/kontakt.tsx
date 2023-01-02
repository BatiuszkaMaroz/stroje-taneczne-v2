import Seo from 'components/seo';
import Title from 'components/title';
import * as React from 'react';

export default function Kontakt() {
  return (
    <div className='container'>
      <Title className='mt-20 mb-4'>Kontakt</Title>
      <p>
        W razie pytań zapraszamy do kontaktu poprzez wiadomość email lub
        telefonicznie.
      </p>
      <p>telefon: +48 519 113 426</p>
      <p>adres email: angelinaprajzner@gmail.com</p>
      <div>
        <p>GIGA MAPA</p>
      </div>
    </div>
  );
}

export const Head = () => <Seo title='Kontakt - StrojeTaneczne.pl' />;
