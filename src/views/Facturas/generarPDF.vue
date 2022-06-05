<script>

import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template-nodejs";

export async function descargarPDF(factura) {
    const props = await crearPDF(factura)
    const pdfObject = jsPDFInvoiceTemplate(props);
    pdfObject.Save()
}

async function crearPDF(factura) {
var props = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Factura " + factura.ref,
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "@/src/components/Logo.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 53.33, //aspect ratio = width/height
        height: 26.66,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "@/src/components/Logo.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 30, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    business: {
        name: "Fixtot",
        address: "Passeig Marítim, 5, 12580 Benicarló, Castelló",
        phone: "964 40 56 40",
        email: "info@fixtoc.com",
        website: "www.fixtoc.com",
    },
    contact: {
        label: "Factura del Cliente: ",
        name: String(factura.cliente?.apellidos) + ", " + String(factura.cliente?.nombre),
        address: String(factura.cliente?.direccion) + " " + String(factura.cliente?.cp) + " " + String(factura.cliente?.poblacion) + ", " + String(factura.cliente?.provincia),
        phone: String(factura.cliente?.telefono),
        email: String(factura.cliente?.email),
    },
    invoice: {
        label: "Factura Nº: ",
        num: Number(factura.ref),
        invDate: "Factura " + String(factura.fecha),
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "Nº", 
            style: { 
              width: 10 
            } 
          }, 
          { 
            title: "Incidencia",
            style: {
              width: 40
            } 
          }, 
          { 
            title: "Observaciones",
            style: {
              width: 40
            } 
          }, 
          { title: "Horas",},
          { title: "h/€"},
          { title: "Material"},
          { title: "Precio"}
        ],
        table: Array.from(Array(1), (item, index)=>([
            Number(factura.incidencia?.ref),
            Number(factura.incidencia?.incidencia),
            String(factura.incidencia?.objeto) + ", " + String(factura.incidencia?.observaciones),
            Number(factura.horas),
            Number(factura.precioHora),
            String(factura.material),
            Number(factura.precioMaterial)
        ])),
        additionalRows: [{
            col1: 'Total:',
            col2: String(factura.total),
            col3: '€',
            style: {
                fontSize: 14 //optional, default 12
            }
        },
        {
            col1: 'IVA:',
            col2: String(factura.iva),
            col3: '%',
            style: {
                fontSize: 10 //optional, default 12
            }
        },
        {
            col1: 'SubTotal:',
            col2: String(factura.subtotal),
            col3: '€',
            style: {
                fontSize: 10 //optional, default 12
            }
        }],
        },
    footer: {
        text: "Factura generada automaticamente",
    },
    pageEnable: true,
    pageLabel: "Pagina ",
};
return props;
}
</script>