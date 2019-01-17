import { Component, OnInit } from "@angular/core";
import { SuggestService } from "../suggest/suggest.service";
import { FormControl } from "@angular/forms";
import { empty } from "rxjs";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-suggest",
  templateUrl: "./suggest.component.html",
  styleUrls: ["./suggest.component.css"]
})
export class SuggestComponent implements OnInit {
  results = [];
  selectedValue = "";
  queryField: FormControl = new FormControl();
  constructor(private _searchService: SuggestService) { }

  ngOnInit() {
    this.queryField.valueChanges
      .debounceTime(200)
      .switchMap((query: any) => {
        if (!!query && this.selectedValue != this.queryField.value) {
          return this._searchService.search(query);
        } else {
          return empty();
        }
      })
      .subscribe((result: any) => {
        this.results.length = 0;
        result.suggestions.forEach((suggestion: any) => {
          this.results.push(suggestion.text);
        });
      });
  }
  selectionChanged(address) {
    this.selectedValue = address;
    this.queryField.setValue(address);
    this.results = [];
  }
}
