// function getSeeds(){
//     let hrefs = []
//     let date_from = '2023-07-23'  
//     let date_to = '2024-05-23' 
//     let Urls = 'https://jurisprudencia.tre-ac.jus.br/#/jurisprudencia/pesquisa?tribunais=TRE-AC&params=s&pag=${pagina}&tamPag=${tamPag}'
//     //let Urls = `https://jurisprudencia.tre-ap.jus.br/sjur-pesquisa-backend/rest/public/pesquisa?date_from=${date_from}&date_to=${date_to}&page=${0}`
//     hrefs.push(Urls)
//     console.log (hrefs)
//     return hrefs
// }
// getSeeds()

function getSeeds() {
    let hrefs = [];
    let page = 1;
    let records = 10;
    let date_from = '2023-07-23';
    let date_to = '2024-05-23';

    //TRE-AC url
    let Url = `https://jurisprudencia.tre-ac.jus.br/jurisprudencia/pesquisa?tribunais=TRE-AC&params=s&pag=${page}&=tamPag${records}&date_from=${date_from}&date_to=${date_to}`;
    hrefs.push(Url);

    console.log(hrefs);
    return hrefs;
}

getSeeds();
