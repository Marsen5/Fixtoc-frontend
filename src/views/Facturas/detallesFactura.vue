<template>
  <div>
  Factura creada con exito.
  {{factura}}
  <button @click="descargarPDF(factura)">Generar pdf</button>
  {{props}}
  </div>
</template>

<script>
import AppVue from "@/App.vue";
import Factura from "@/interfaces/Factura";
import { Incidencia } from "@/interfaces/Incidencia";
import { getFactura } from "@/services/Factura.api";
import { defineComponent } from "@vue/runtime-core";
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template-nodejs";
import { onBeforeMount } from "vue";
import { useAppStore } from "@/store/app";


export default ({
  data() {
    return {
      factura: {} ,
      incidencia: {},
      props: {},
      id: "", 
      
    }
  },
  methods: {
    //Las funciones estan en services/ProductService 
    async loadFactura(id) {
      console.log('aaaa  ' + id )
      this.factura = await getFactura(id)
      console.log('fac' + this.factura)
      
      
    },

    async descargarPDF(factura) {
      const props = await this.crearPDF(factura)
      console.log(props)
      const pdfObject = jsPDFInvoiceTemplate(props);
      pdfObject.Save();
    },
    async crearPDF( factura) {
      /* const doc = new jsPDF();
      doc.text('Hola mundo', 10, 10);
      doc.save('a4.pdf'); */
    let props = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Factura " + factura._id,
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "data:image/png;base64,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",
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
        src: "data:image/png;base64,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",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 30, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    business: {
        name: "Fixtoc",
        address: "Passeig Marítim, 5, 12580 Benicarló, Castelló",
        phone: "964 40 56 40",
        email: "info@fixtoc.com",
        website: "www.fixtoc.com",
    },
    contact: {
        label: "Factura del Cliente: ",
        name: String(factura.id_usuario?.nombre) + ", " + String(factura.id_usuario?.apellido),
        address: String(factura._id),
        phone: String(factura._id),
        email: String(factura._id),
    },
    invoice: {
        label: "Factura Nº: ",
        num: Number(factura._id),
        invDate: "Factura " + String(factura._id),
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
            Number(factura.total),
            Number(factura.total),
            String(factura._id) + ", " + String(factura._id),
            Number(factura.total),
            Number(factura.total),
            String(factura._id),
            Number(factura.total)
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
            col2: String(factura._id),
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
    } 
    return props;
  },

  },
  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id == "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      this.id = this.$route.params.id;
      this.loadFactura(this.id)
      
  },
})
</script>