import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class SuggestService {
  baseUrl: string =
    "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?category=address&countryCode=USA&f=json&text=";
  constructor(private _http: HttpClient) {}
  search(queryString: string) {
    let _URL = this.baseUrl + queryString;
    return this._http.get(_URL);
  }
}
