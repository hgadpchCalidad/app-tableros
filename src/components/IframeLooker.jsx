import React from "react";
import Button from "./Button.jsx";


const IframeLooker = ({ renderizar }) => {
  //const query = new URLSearchParams(location.search);
  //const renderizar = query.get('renderizar');

  switch (renderizar) {
    case "gabinete":
      return (
        <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/f11660cd-aaa7-473a-a2ff-63ac0e3b57fb/page/i56qD"
            frameborder="0"
            
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads-without-user-activation"
            className="flex"
          />
        </div>
      );
      case "prefectura":
        return (
          
            <Button client:load>botton</Button>

        );
    case "oopp":
      return (
        <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/0ee81f55-6e31-41aa-b9bb-ec39dc87b19e/page/p_sbxoo4mbfd"
            frameborder="0"
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            className="flex"
          ></iframe>
        </div>
      );
    case "riego":
      return (
        <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/66b81466-819d-4eb6-8ef6-79e317232a91/page/WRmsD"
            frameborder="0"
            className="flex"
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      );
    case "Ambiente":
      return (
        <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/32780fa4-eeb4-4be2-8f14-46a81b89c3f8/page/p_mzv6n7wdfd"
            frameborder="0"
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      );
      case "Desarrollo social":
        return (
          <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://lookerstudio.google.com/embed/reporting/948a2fa1-a11d-4250-9f00-14b41550f1c6/page/p_46xcyj4efd"
              frameborder="0"
              allowfullscreen
              sandbox="allow-storage-access-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
        );
        case "Turismo":
          return (
            <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://lookerstudio.google.com/embed/reporting/d0215217-6c7e-438b-8a84-733b1657546b/page/p_46xcyj4efd"
                frameborder="0"
                allowfullscreen
                sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          );
          case "Patronato":
            return (
              <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://lookerstudio.google.com/embed/reporting/449d1c24-83a0-4908-bea0-3e424a341d40/page/au6sD"
                  frameborder="0"
                  allowfullscreen
                  sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                ></iframe>
              </div>
            );
            case "Fomento productivo":
              return (
                <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://lookerstudio.google.com/embed/reporting/c2cb8a0c-139c-4fca-ae99-945d133458ac/page/au6sD"
                    frameborder="0"
                    allowfullscreen
                    sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  ></iframe>
                </div>
              );
              case "Planificación":
                return (
                  <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://lookerstudio.google.com/embed/reporting/0c59a75c-0871-40fa-b7ed-58cf3f5a1925/page/qktsD"
                      frameborder="0"
                      allowfullscreen
                      sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>
                  </div>
                );
                case "COMUNICACIÓN E IMAGEN INSTITUCIONAL":
                  return (
                    <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://lookerstudio.google.com/embed/reporting/e8f4edae-49a3-4322-a879-20f39d5ce8be/page/qktsD"
                        frameborder="0"
                        allowfullscreen
                        sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                      ></iframe>
                    </div>
                  );
                  case "Fiscalización":
                    return (
                      <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://lookerstudio.google.com/embed/reporting/78e5d45a-447c-42b3-a598-d99ede1164cc/page/p_mzv6n7wdfd"
                          frameborder="0"
                          allowfullscreen
                          sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                        ></iframe>
                      </div>
                    );
                    case "Administrativa":
                      return (
                        <div  className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://lookerstudio.google.com/embed/reporting/aeee51f9-4bb2-4bf4-bdac-75351a43d25e/page/p_pmf5opmmfd"
                            frameborder="0"
                            allowfullscreen
                            sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                          ></iframe>
                        </div>
                      );
                      case "Secretaria General":
                        return (
                          <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                            <iframe
                              width="100%"
                              height="100%"
                              src="https://lookerstudio.google.com/embed/reporting/b62eca3e-484b-4f78-9748-ae3f155179da/page/3q9uD"
                              frameborder="0"
                              allowfullscreen
                              sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                            ></iframe>
                          </div>
                        );
                        case "Calidad":
                          return (
                            <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                              <iframe
                                width="100%"
                                height="100%"
                                src="https://lookerstudio.google.com/embed/reporting/97e40608-f5f8-44b5-9b29-5273b921538f/page/p_mzv6n7wdfd"
                                frameborder="0"
                                allowfullscreen
                                sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                              ></iframe>
                            </div>
                          );
                          case "Asesoria Juridica":
                            return (
                              <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src="https://lookerstudio.google.com/embed/reporting/36be53e2-8c46-4711-9880-2c3dd3a7c311/page/p_sbxoo4mbfd"
                                  frameborder="0"
                                  allowfullscreen
                                  sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                ></iframe>
                              </div>
                            );
                            case "Financiero":
                              return (
                                <div className="mt-12" style={{ height: "120vh", overflow: "hidden" }}>
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://lookerstudio.google.com/embed/reporting/48572f47-a369-4aec-9f6d-a14f203b92bd/page/lHQrD"
                                    frameborder="0"
                                    allowfullscreen
                                    sandbox="allow-storage-access-by-user-activation allow-downloads allow-downloads allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                  ></iframe>
                                </div>
                              );

                    
    default:
      return <div>Pagina no encontrada</div>;
  }
};

export default IframeLooker;
