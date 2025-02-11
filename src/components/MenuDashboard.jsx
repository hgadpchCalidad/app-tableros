import LayoutSidebar from "../app/LayoutSidebar.astro";
import { supabase } from "../lib/supabase";
import Maintenance from "../pages/maintenance.astro";
import MatrizIframe from "./MatrizIframe.astro";

import React, { useState } from "react";
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

function MenuDashboard() {
  // Estado del dashboard seleccionado
  const [selectedDashboard, setSelectedDashboard] = useState("");
  console.log(selectedDashboard);

  // Manejador del clic en el menú
  function handleMenuClick() {
    alert("@asd")
  }

  return (
    <>
      <div className="pt-6 pb-6 pl-6 pr-6 md:pt-12 md:pb-12 md:pl-12 md:pr-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <button 
              onClick={handleMenuClick}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_prefectura.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  PREFECTURA {selectedDashboard}
                </h5>
              </div>
            </button>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_secretariaGeneral.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  SECRETARÍA GENERAL
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_patronato.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  PATRONATO PROVINCIAL
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_juridica.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  ASESORÍA JURÍDICA
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_calidad.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  GESTIÓN DE CALIDAD
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_planificacion.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  PLANIFICACIÓN
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_obrasPublicas.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  OBRAS PÚBLICAS
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_fomentoProductivo.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  FOMENTO PRODUCTIVO
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_ambiental.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  GESTIÓN AMBIENTAL
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_riego.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  GESTIÓN DE RIEGO
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_social.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  DESARROLLO SOCIAL
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_turismo.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  TURISMO
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_financiero.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  FINANCIERA
                </h5>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                src={img_administracion.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                  ADMINISRATIVA
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuDashboard;
