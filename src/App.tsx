import React from 'react';
import './App.css';
import { Catalogo } from './types';
import { CatalogoItem } from './components/CatalogoItem';
import ReactGA from 'react-ga';

import v_fram from './imgs/logos/v_fram.png';
import v_japanparts from './imgs/logos/v_japanparts.png';
import v_japanparts_italia from './imgs/logos/v_japanparts_italia.png';
import v_tecfil from './imgs/logos/v_tecfil.png';
import v_baldwin from './imgs/logos/v_baldwin.png';
import v_purolator from './imgs/logos/v_purolator.png';
import v_donald_eua from './imgs/logos/v_donald_eua.png';
import v_donald_australia from './imgs/logos/v_donald_australia.png';
import v_wega from './imgs/logos/v_wega.png';
import v_mann_br from './imgs/logos/v_mann_br.png';
import v_mann_eur from './imgs/logos/v_mann_eur.png';
import v_mann_china from './imgs/logos/v_mann_china.png';
import v_hengst from './imgs/logos/v_hengst.png';
import v_fleetguard from './imgs/logos/v_fleetguard.png';
import v_unifilter from './imgs/logos/v_unifilter.png';
import v_filtros_brasil from './imgs/logos/v_filtros_brasil.png';
import v_parker from './imgs/logos/v_parker.png';
import v_microAir from './imgs/logos/v_microAir.png';
import v_original_filter from './imgs/logos/v_original_filter.png';

function initializeReactGA() {
  ReactGA.initialize('UA-34354623-3');
  ReactGA.pageview('/');
}

const data = [
  new Catalogo('FRAM','https://www.sogefifilterdivision.com/catalogues/FO/scripts/accueil.php?zone=FR&catalogue=FRAM&lang=PO', v_fram),
  new Catalogo('Japanparts', 'http://www.japanparts.com.br/', v_japanparts),
  new Catalogo('Japanparts IT', 'http://db.japanparts.it/cjapan/ricerca.jsp?lang=15', v_japanparts_italia),
  new Catalogo('Tecfil','http://tecfil-catalago.gruposofape.com.br/CatalogoTecfil/', v_tecfil),
  new Catalogo('Baldwin','http://catalog.baldwinfilter.com/', v_baldwin),
  new Catalogo('Purolator','https://www.mann-hummel.com/pu_prodkata_12/index.html', v_purolator),
  // new Catalogo('Donaldson EUA','https://dynamic.donaldson.com/WebStore/search/cross_reference.html?functionCode=WEBC_PRODUCT_SEARCH&requestStateKey=1311788203820', v_donald_eua),
  new Catalogo('Donaldson EUA','https://shop.donaldson.com/store/pt-br/home?_requestid=2320431', v_donald_eua),
  new Catalogo('Donaldson Aus', 'http://www.donaldsontoolbox.com.au/search/crossreference/index/1', v_donald_australia),
  new Catalogo('Wega Original','https://wegamotors.com/catalogo/', v_wega),
  new Catalogo('Mann Brasil', 'http://catalog.mann-filter.com/BR/por', v_mann_br),
  new Catalogo('Mann EUR', 'https://www.mann-hummel.com/mf_prodkata_eur/index.html?iKeys=23.1.0.21.1', v_mann_eur),
  new Catalogo('Mann China', 'http://catalog.mann-filter.com/CN/eng/vehicle', v_mann_china),
  new Catalogo('Hengst', 'http://www.hengst-catalog.com/pt/', v_hengst),
  new Catalogo('Fleetguard', 'http://catalog.cumminsfiltration.com/catalog/regionSearch.do?reqCmd=partSearch', v_fleetguard),
  new Catalogo('Unifilter', 'http://www.unifilter.com.br/cat%C3%A1logo-online.php', v_unifilter),
  new Catalogo('Filtros Brasil', 'http://www.filtrosbrasil.com.br/index.php', v_filtros_brasil),
  // new Catalogo('Parker', 'http://www.extranetparker.com.br/2008/crossracor/br/', v_parker),
  new Catalogo('Parker', 'http://www.racor.com.br/conv.aspx', v_parker),
  new Catalogo('Micronair', 'http://www.micronair.com.br/products/search.php', v_microAir),
  new Catalogo('Original','http://c123.com.br/originalfilter/index.asp', v_original_filter),
]

function App() {
  initializeReactGA();
  const listaDeCatalogos = data.map((catalogo, index) => {
    return <CatalogoItem catalogo = {catalogo} key={index} />
  })
  return (
    <div className="App">
      {listaDeCatalogos}
    </div>
  );
}

export default App;
