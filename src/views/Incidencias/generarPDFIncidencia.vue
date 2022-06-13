<template>
  <div class="text-euclid-32 font-semibold m-5">
  Incidencia creada con exito.
  </div>
  <div class="mx-5">
  <button @click="descargarPDF(incidencia)" class="btn btn-primary">Generar pdf</button>
  </div>
</template>

<script>
import { getIncidencia } from "@/services/Incidencia.api";
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template-nodejs";


export default ({
  data() {
    return {
      incidencia: {},
      props: {},
      id: "", 
      
    }
  },
  methods: {
    //Las funciones estan en services/ProductService 
    async loadIncidencia(id) {
      console.log('aaaa  ' + id )
      this.incidencia = await getIncidencia(id)
      console.log('fac' + this.incidencia)
    },

    async descargarPDF(incidencia) {
      const props = await this.crearPDF(incidencia)
      console.log(props)
      const pdfObject = jsPDFInvoiceTemplate(props);
      pdfObject.Save();
    },
    async crearPDF( incidencia) {
      /* const doc = new jsPDF();
      doc.text('Hola mundo', 10, 10);
      doc.save('a4.pdf'); */
    let props = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Incidencia " + incidencia._id,
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAABKCAYAAACYc3J2AAAACXBIWXMAAAsSAAALEgHS3X78AAAKvUlEQVR4nO2d/VEjORDFJdf9bzLARAAbAd4IIAMgArwRYDLwRoCJ4CACTARrR3CQwRKBrgTPe77Bg2fG063WzPtVTe1d7Z3nS6Onft2SfAjBEUJICrz34wqnXYYQfvMF5UOpsOCFV3np5gkhTKtco/d+5Jwb4V/bvPd5COFly/kkn/ECf75sO7cEeH7jjWcoxSKEsNC4J9IOG239BO3juMEPr2J7jkKDY0HBMUoUls3DORc74fiyQleO4j2WHbh3ifsebzsnPjKN5xw74ZOqz6HJ4ZybKbaXUcnzHHep3bZ0TCXf+xff0gm+p6Xw/S3R9rZ+Ywr3uehpu3rBc9/+LW48oAOFRpDksCoswufcdlwKfVwTxXso7SgpLPWel0A7GKGzeUl0r3FAPJceRFFYdrexgfsIUw/wgJqEp2QPYNO9Kj3DGeyq1sDvVbIaW+ANHRcxhPf+0nsf+49/nHPXzrnDRFc3dM5dOOd+ee9f4nWxnahw472fb55ogD/nFJWkaH0AQ7zrNpnhdzW4pKduBwhKjE7unHOnxi4vitsdBUaNC+/9n0HfAEm1s+7ft12QiP6pdIGn3vtJGz+k3HYeQwgPSuciXxDfu/d+CUFJFZ1UZS0wy4oVaKQ51+tnPIA/TtKjaYlNYX/uS9vRTxlvilEdKSG2GYxKnzJ0OOL1Pm2OqokI79/poCslxbkDiycbS8x7P1UcrdICS4z3/gTFPdeZ38o1ohfpkvi+EnNc78Ki5Y+THShbYmfe+/Mm/yM+Sq1I95kWWFqQo/iVge1VlRi9LCGWpGWiHTbgQzWHpiU2b2iJaSXsaYElBtbRXQdvbYjqMbYvASgsxkhgidUqFUaUo5Wwn2qtGkA+gxLS3K2vXdxRXNqHwmIQZUvsumq1DKIbreRntMCYaE0EIpWLntzuXVNbmGyHwmIX1YmTFf+7iZLPTgssIRjBdz1SKTJnzqU9KCxGUbbEjnfNbcFHd6N0PbTAEoH33MWcyi6iLfzQUhl+76GwGEbZEpvuKMGkBdZx0Kn2uQLvUHFuVqehsNhHyxIblokHohmNJTtogaVFc26SVc7aWpmiz1BYjANLTKuhf5rbglGs1iKTtMASgQKOvuVVymhrZYreQmHJAEwQfFS60lnho9Kas0ILLC1ag4ccKI3eSTUoLPlwCatImsN1hIRRrFbJKe2HROA9W1id+BnHysC1XHDZl+b8Jfjbr9jwh7RAtMRQBvq3wvOM+ys8KCYyb0MIS6Vzkc+kjlaeYYP+2W4abT11zmfKnF8zPHYAk+C26l7zZh7Gx8KKEiW139vaox0dvsbM9zclC2wVQmhl/gBGmJIdgVS59b3gIGzxVdtDtPIkdO5dvEJQtg5gYMlOcKRa0/Doq7wfBFAqshkJOgbfhX7XYbHS/LdEbXGbUfWtiRtc4wG2YO3KtqZq28i28OylnkGS/dpxT/NE7z1+awcVr3GEMugU1zlL+G7EttqWvnbmWDJDeeKkNLTAEoKIQHspk0dEAdOqWyHEiCGEcI5Rtnb+hVZYAygsGaJcJSbFKjertIOcK1pMK1jC501LyqOlB9v0SqmQJTLkOmL1obDki1aVmBQcCaZHY5O/2EZ/REFoK8+InMxIcVUKCktNKCyZkrklRgvMBtIdZuz4RxLzk2L7DyHEpP4RqsokobDUhMKSMZlaYrTADIDFJqVssFfkUSbSW0oj/zIWrnIacuXjelBY8ic3S4wWmA0kbbCJ9tI8Cgu2atiGnYHCkjmZWWK0wOwgNQJfIZJOgWQkzIilBpIz78eYcKjFvK8LGMYP2Xt/b3zHP1pgtpCa1CdqfX0FVqeQ+nku71IDSWE5VV5/aNHzJWQmCNetLntOC8wWFtYGywk+rxrQCusIxi0xWmCG4JLwzeBzqw6FpUMo7zhZFVpg9mC+oBl8bhWhsHQPrR0nq8I5AIT0DApLx4AlZiVC+MkdIU3CkTcRhcLSQcqWIU9AqrJT8jXMFRBRKCwdhElGQkhKKCzdxEpeg/kVQnoIhaVjIFqxkmO55hpLhPQPCkv3SL1PeBEr+R5CiBIUlg6B/cuvjd3RsfLSPmQ3nKzajGTL1eQGhaUjwAKzGh3c0BIzBTvIBnD1iOpQWLqDNQusCC0xO1BY6mNp0rF5KCwdwKgFVoSWmBGER97JSt2Fy+w50bcGFJbMMW6BFaElZoeV0JUcY6CTgongOVvZr78vUFjyx7oFVqT1/c9JIySjlpn2JF0MWCSFhfmVGlBYMiYTC6zIqfdesgMg1ZAcgR9H68h7L76NQxQwWKy/BPfwd4xY6kFhyZTMLLAiU+89d+RLi/Q6brGTv/PeL6WsMQhXzH3cSPz+Biss7koqIrmD5Eq5+qRvLz43C2yTIUQxlRffe7CN7wrRhSTx95+894/RqmpjtWsI1Uzh2teworEmksIywcZTpGUytcCKvFtiIQTmXNIRn/2d0tnP4kDCex/POWsSASDKjQOqC5lLLIWrdNeEVlhmZG6BFaEllpbYYb4pXsEQttWyTv5lI4+yTCAqz9xTqD4UlvzQssCkylE3GdJmSAeihhSj8UPkXxa78i8QoCUESTI5XwbbZwMoLBmhaIG9Iv+hIS6sEktLykmrp8i/zIvlybF8OAoPrLpUucRXQ5vmZQWFJROULbAJRrNaHT4tsUTA5rlPfBkXKE+O819iW5ijfPg08XVxpYiGUFjyQcsCi57yuz2C4guNToeWWFqmyrmWbQwRjd8kyKNsg9HKHlBYMkC5CqyYVJ0odTrREuOOkwlA1MLR+f8Rn9zZZSgseaA1crotVsDAEtPqdD557UQHlH1r5NRy4JFTJfaDwmIclFlqWGAx9N8qIIqdDi2xtJwbsMRS88ZoZX8oLIbBwnrSy1Ws2fUxaSXyz2iJpQHRat871Usu37I/FBbbaI3ed4b++PufStdDSywRKNy47eXNf1jBnGXfAhQWo8AC01gL6a1GNKJVPURLLCGwRFOXIGtzX2YFk/pQWAyibIHNqi5ZoTy3hZZYQkIIlz0Sl2fcL2kJCotNtEbrpQn7MlDb/6x0feobRpH/6Im4PKNogbQIhcUYihaY2yNRqxW1HHJ+RVogLl3NuUT7a8xkffsMWF5oByxromWBNa7VDyEsFRP51wn3UCf/5VyuOtZX3PbY/hKfOjDgXgOm0LLA6iTsy5hisUoNWCWWGFigWguTShLb/veeJ+rF+/wBq29sgBV+tRbdq5ywL0M5kU9LzAAxUg0hnGRsjcVdLEc9n1X/hg3eRBngIT+mvdd+s7Eznga1E/ZloOZfK5FPS8wIaD/fFN/9vrwiSjlnPsVNNZ7BOnl/yXWCkjJX3MSobV/5UtF75zbGRkD0EoX+u2GBiYJyFULoe5Sy5l5rK/B3YYGCjTMagXQGzNXQssDu2/7AYKlpWWLHqJojRojtaUNgrDgfqw1BodX/gWqxwp9y4yguaCBXiklZojcKf5QSAHy835QilwkT+faAwMRB0pFz7kcCB+QVlYpHMQ9EQXnnDfOQjrSLFXwIYftffMz+jkfTnf3m+yaItUGuQ2Inw+U2XxPn0xhFPKBEWBS0GY3JZosU1oZgjmdr+8gdDADO4YactDw/KwrJYn3k1tdUAc/vpOH//lvjmy+jVFgIIaT1Dudj8HEAsXH45686z0Xxn5kvMY5z7l+kzJjhlMlHtgAAAABJRU5ErkJggg==",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 40.6, //aspect ratio = width/height
        height: 7.4,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "data:image/png;base64,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",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 40.6, //aspect ratio = width/height
        height: 7.4,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    business: {
        name: "Dirección de envio:",
        address: "Carrer de la Pau, 2, 12580 Benicarló, Castelló",
        phone: "964 40 56 40",
        email: "info@fixtot.com",
        website: "www.fixtot.com",
    },
    contact: {
        label: "Datos del Cliente: ",
        name: String(incidencia.id_usuario?.nombre) + ", " + String(incidencia.id_usuario?.apellido),
        address: String(incidencia.id_usuario?.direccion),
        phone: String(incidencia.id_usuario?.telefono),
        email: String(incidencia.id_usuario?.email),
    },
    invoice: {
        label: "Factura Nº: ",
        num: Number(incidencia._id),
        invDate: "Fecha " + String(incidencia.fechaPedido),
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "ID", 
            style: { 
              width: 60
            } 
          }, 
          {
            title: "Producto",
            style: { 
              width: 30
            } 
          },
          { 
            title: "Título",
            style: {
              width: 40
            } 
          }, 
          { 
            title: "Descripción",
            style: {
              width: 60
            } 
          }, 
        ],
        table: Array.from(Array(1), (item, index)=>([
            String(incidencia._id),
            String(incidencia.producto),
            String(incidencia.titulo),
            String(incidencia.descripcion),
        ])),
        },
    footer: {
        text: "Imprimir este documento y adjuntar al paquete",
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
      this.loadIncidencia(this.id)
  },
})
</script>