import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  govBrUrl: string = 'https://imunizacao-es.saude.gov.br/_search';
  login = 'imunizacao_public';
  password = 'qlto5t&7r_@+#Tlstigi';

  globalBaseUrl = 'https://covid-api.mmediagroup.fr/v1';


  constructor(private http: HttpClient) { }

  // fetchBrazilData(page: number,scrollId: string) {
  //   let url: string;

  //   let httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ' + btoa(`${this.login}:${this.password}`),
  //     'Accept': '*/*',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Credentials': 'true'
  //   });
  //   // httpHeaders = httpHeaders.append('Content-Type', 'application/json');
  //   // // httpHeaders.append("Authorization", "Basic aW11bml6YWNhb19wdWJsaWM6cWx0bzV0JjdyX0ArI1Rsc3RpZ2k=");
  //   // httpHeaders = httpHeaders.append("Authorization", "Basic " + btoa(`${this.login}:${this.password}`));
  //   let httpParams = new HttpParams();
  //   if(page == 1){
  //     url = `${this.govBrUrl}?scroll=1m`;
  //   }
  //   else {
  //     url = `${this.govBrUrl}`;
  //     httpParams.append('scroll','1m');
  //     httpParams.append('scroll_id',scrollId);
  //   }

  //   const body = {
  //     'size': 10000
  //   }


  //   return this.http.post<any>(url, body, {
  //     headers: httpHeaders
  //   })
  // }
  fetchBrazilData() {
    return this.http.get('home/iguinho/Documentos/brazilCovidData.csv', { responseType: 'text' });
  }

  //world
  fetchGlobalData() {
    // return this.http.get(`${this.globalBaseUrl}/vaccines`)
    return this.http.get('https://covid.ourworldindata.org/data/owid-covid-data.json');
  }

  fetchGlobalDataByCountry(country: string){
    return this.http.get(`${this.globalBaseUrl}/vaccines?country=${country}`);
  }
}
