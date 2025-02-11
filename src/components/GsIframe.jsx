import React from "react";
import Button from "../components/Button.jsx";

const GsIframe = ({ renderizar }) => {
  //const query = new URLSearchParams(location.search);
  //const renderizar = query.get('renderizar');

  switch (renderizar) {
    case "gabinete":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/18JGabxvlOQHlkYhl3UPLw8GI4P6WhOfUD9v92AFXnzw/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );

    case "oopp":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/121koqK1ULprO4ySBa7TMX680k8XdcfDpRWpVyNW7Ucg/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );
    case "riego":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/1xTXbgcL-SRx3WgznV8AC_QKUvHBCov4NS-uCDRV8Ado/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );
    case "Ambiente":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/1Tlj33_6BzGVIQEHnNp_KFkKXQpRKytGK5qjwtGJQWtI/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );
    case "Desarrollo social":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/1-ykO5unYA45AqK6oPoBNTjQVK-oznnvsLc5D7zv4ckE/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );
    case "Turismo":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/1fUW3WLbSEefWG2dO2oMVCTWjeGiX33_Xv7OQqXhT53M/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );
      case "Patronato":
      return (
        <iframe
          title="Descripción del contenido del iframe"
          src="https://docs.google.com/spreadsheets/d/1tze5nXmxjQ3VW_sUGtqv87ku2D8xVo3qq25n0K5_FSY/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            flex: 1,
            borderRadius: "10px",
          }}
          allowfullscreen
        ></iframe>
      );
      case "Fomento productivo":
        return (
          <iframe
            title="Descripción del contenido del iframe"
            src="https://docs.google.com/spreadsheets/d/1YOT_VhVXzJ9Z2reF7mTwBA5G4ojHBuB7CHej7_15Jl4/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              flex: 1,
              borderRadius: "10px",
            }}
            allowfullscreen
          ></iframe>
        );
        case "Planificación":
          return (
            <iframe
              title="Descripción del contenido del iframe"
              src="https://docs.google.com/spreadsheets/d/19fUHIe0D57yaFzADhaEC8BAyWkHsVvCPmPkiQFY0m9k/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
                flex: 1,
                borderRadius: "10px",
              }}
              allowfullscreen
            ></iframe>
          );
          case "COMUNICACIÓN E IMAGEN INSTITUCIONAL":
            return (
              <iframe
                title="Descripción del contenido del iframe"
                src="https://docs.google.com/spreadsheets/d/1yGZTtTE-El0h_AHe82w4fnjjHzoE9un65e2i6b-5yQo/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  flex: 1,
                  borderRadius: "10px",
                }}
                allowfullscreen
              ></iframe>
            );
            case "Fiscalización":
              return (
                <iframe
                  title="Descripción del contenido del iframe"
                  src="https://docs.google.com/spreadsheets/d/1-WAxRUoERDWEjQTOH9pRvwymrJFGsH6SfU0EOebGVrQ/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    borderRadius: "10px",
                  }}
                  allowfullscreen
                ></iframe>
              );
              case "Asesoria Juridica":
                return (
                  <iframe
                    title="Descripción del contenido del iframe"
                    src="https://docs.google.com/spreadsheets/d/1cdNsi1cbl8dzcHusaw3s40d8X5L9g8wKIb6_qV5RdpY/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                    style={{
                      border: 0,
                      width: "100%",
                      height: "100%",
                      flex: 1,
                      borderRadius: "10px",
                    }}
                    allowfullscreen
                  ></iframe>
                );
                case "Administrativa":
                  return (
                    <iframe
                      title="Descripción del contenido del iframe"
                      src="https://docs.google.com/spreadsheets/d/1wcCfPyeJv_FEWV27kuyz-qA8_ivIHxnUML4f0nBojHg/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                      style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        flex: 1,
                      
                      }}
                      allowfullscreen
                      
                    ></iframe>
                  );
                  case "Secretaria General":
                  return (
                    <iframe
                      title="Descripción del contenido del iframe"
                      src="https://docs.google.com/spreadsheets/d/1sXdNI1fFIHq07c0ff7Xx0Y37VH7iWAsK-IYaxHl_TEA/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                      style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        flex: 1,
                      
                      }}
                      allowfullscreen
                      
                    ></iframe>
                  );
                  case "Financiero":
                    return (
                      <iframe
                        title="Descripción del contenido del iframe"
                        src="https://docs.google.com/spreadsheets/d/1djaz18xEsSjP-aKoPmjc0zN5s8LlNQO6D3NnUWOl1N8/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                        style={{
                          border: 0,
                          width: "100%",
                          height: "100%",
                          flex: 1,
                        
                        }}
                        allowfullscreen
                        
                      ></iframe>
                    );
                    case "LoadPlanificacion":
                      return (
                        <iframe
                          title="Descripción del contenido del iframe"
                          
                          src="https://docs.google.com/spreadsheets/d/1NX5-HFlqt0U0qD3A4G008FNsZ6QgRoDiKIW88NWnTWU/edit?usp=sharingwidget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847"
                          style={{
                            border: 0,
                            width: "100%",
                            height: "100%",
                            flex: 1,
                          
                          }}
                          allowfullscreen
                          
                        ></iframe>
                      );
    default:
      return <div>Pagina no encontrada.</div>;
  }
};

export default GsIframe;
