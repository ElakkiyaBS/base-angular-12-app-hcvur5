import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-overview';

  constructor(private http: HttpClient) {}
  pokemon: any;
  disabling: boolean;
  baseurl = 'https://pokeapi.co/api/v2/pokemon';
  getApi() {
    return this.http.get(this.baseurl).subscribe((data: any) => {
      this.pokemon = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getApi();
  }

  prev() {
    return this.http.get(this.pokemon.previous).subscribe((data: any) => {
      if (data.previous !== null) {
        this.pokemon = data;
        this.disabling = false;
        return;
      } else {
        this.pokemon;
        this.disabling = true;
      }
    });
  }
  next() {
    return this.http.get(this.pokemon.next).subscribe((data: any) => {
      if (data.next !== null) {
        this.pokemon = data;
        this.disabling = false;
        return;
      } else {
        this.pokemon;
        this.disabling = true;
      }
    });
  }
}
