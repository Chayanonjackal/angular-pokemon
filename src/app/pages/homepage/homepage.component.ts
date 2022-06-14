import { Component, OnInit } from '@angular/core';

//HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  pokemonFecth: any[] = []
  // pokemonUrl: string[]=[]
  pokemonUrl: any
  pokenobDisplay:any[]=[]


  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {


  }

  searchLimitPokemon(value:any){
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${value}&offset=0`).subscribe((res:any)=>{
      if(res){
        console.log(res);
        //ArryData
        this.pokemonFecth = res.results

        //pokemonData
        this.pokemonUrl = res.results.url
        for (let index = 0; index < res.results.length; index++) {
          let pokemonArryUrl :string
          pokemonArryUrl = res.results[index].url
          this.http.get<any>(`${pokemonArryUrl}`).subscribe(res =>{
            let pokemonPictureUrl :string = ''
            pokemonPictureUrl = res.sprites.front_default
            this.pokemonFecth[index].url = pokemonPictureUrl
          })
        }



      }else{
        console.log('no');

      }
    });

  }

}
