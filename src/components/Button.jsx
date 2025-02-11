import img_prefectura from "../assets/la-politica-fiscal.png";
import img_secretariaGeneral from "../assets/secretariaGeneral.png";
import img_patronato from "../assets/patronato.png";
import img_juridica from "../assets/servicios-legales.png";
import img_calidad from "../assets/calidad.png";
import img_planificacion from "../assets/planificacion.png";
import img_obrasPublicas from "../assets/obrasPublicas.png";
import img_fomentoProductivo from "../assets/fomentoProductivo.png";
import img_ambiental from "../assets/ambiental.png";
import img_riego from "../assets/riego.png";
import img_social from "../assets/social.png";
import img_turismo from "../assets/turismo.png";
import img_financiero from "../assets/financiero.png";
import img_administracion from "../assets/administracion.png";
import img_comunicacion from "../assets/comunicacion.png";
import img_fiscal from "../assets/fiscal.png";
import React from 'react';

const cardData = [
  { id: 'prefectura', title: 'Prefectura', img: img_prefectura, href: '/dashboardDirec?renderizar=gabinete' },
  { id: 'secretariaGeneral', title: 'Secretaría general', img: img_secretariaGeneral, href: '/dashboardDirec?renderizar=Secretaria General' },
  { id: 'patronato', title: 'Patronato provincial', img: img_patronato, href: '/dashboardDirec?renderizar=Patronato' },
  { id: 'juridica', title: 'Asesoría jurídica', img: img_juridica, href: '/dashboardDirec?renderizar=Asesoria Juridica' },
  { id: 'calidad', title: 'Gestión de calidad', img: img_calidad, href: '/dashboardDirec?renderizar=Calidad' },
  { id: 'planificacion', title: 'Planificación', img: img_planificacion, href: '/dashboardDirec?renderizar=Planificación' },
  { id: 'obrasPublicas', title: 'Obras públicas', img: img_obrasPublicas, href: '/dashboardDirec?renderizar=oopp' },
  { id: 'fomentoProductivo', title: 'Fomento productivo', img: img_fomentoProductivo, href: '/dashboardDirec?renderizar=Fomento productivo' },
  { id: 'ambiental', title: 'Gestión ambiental', img: img_ambiental, href: '/dashboardDirec?renderizar=Ambiente' },
  { id: 'riego', title: 'Gestión de riego', img: img_riego, href: '/dashboardDirec?renderizar=riego' },
  { id: 'social', title: 'Desarrollo social', img: img_social, href: '/dashboardDirec?renderizar=Desarrollo social' },
  { id: 'turismo', title: 'Turismo', img: img_turismo, href: '/dashboardDirec?renderizar=Turismo' },
  { id: 'financiero', title: 'Financiera', img: img_financiero, href: '/dashboardDirec?renderizar=Financiero' },
  { id: 'administracion', title: 'Administrativa', img: img_administracion, href: '/dashboardDirec?renderizar=Administrativa' },
  { id: 'comunicacion', title: 'Comunicación e imagen institucional', img: img_comunicacion, href: '/dashboardDirec?renderizar=COMUNICACIÓN E IMAGEN INSTITUCIONAL' },
  { id: 'fiscal', title: 'Fiscalización', img: img_fiscal, href: '/dashboardDirec?renderizar=Fiscalización' },
];

const Card = ({ title, img, href }) => (
  <div>
    <a 
      href={href}
      className="flex flex-col items-center bg-white border-0 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
        src={img.src}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal overflow-hidden">
        <h5 className="mb-2 text-lg font-semibold tracking-wide text-gray-700 dark:text-white">
          {title}
        </h5>
      </div>
    </a>
  </div>
);

const Button = () => {
  return (
    <div className="pt-6 pb-6 pl-6 pr-6 md:pt-12 md:pb-12 md:pl-12 md:pr-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Button;