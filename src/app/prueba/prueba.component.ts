import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  pokemons: string[] = [];
  selectedPokemon: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    this.http.get(url).subscribe((data: any) => {
      this.pokemons = data.results.map((pokemon: any) => pokemon.name);
    });
  }
}
