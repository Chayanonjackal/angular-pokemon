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

  pakemonFecth:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/ditto").subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.pakemonFecth = res
      }else{
        console.log('no');

      }
    });
  }

}
