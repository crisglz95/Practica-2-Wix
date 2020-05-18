import { Component, OnInit } from '@angular/core';
import { Products } from './../../data/data';
import { ProductsInterface } from '../../interfaces/ecommerce.interface';
import { from } from "rxjs/observable/from";
import { take, tap, map, filter } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cameraProducts: Array<ProductsInterface> = [];
  public accesoriosProducts: Array<ProductsInterface> = [];

  constructor(private roter: Router) {
    this.ObtenerCamaras();
    this.ObtenerAccesorios();
   }

  ngOnInit() {
  }

  public ObtenerCamaras(){
    from(Products)
    .pipe(
      map((producto: ProductsInterface) =>{
        let dirImg = `./../../../${producto.img}`;
        return{
          ...producto, 
          img: dirImg
        }
      }),
      take(4),
      tap((value: ProductsInterface) => this.cameraProducts.push(value))
    )
    .subscribe((value) => console.log(this.cameraProducts))
  }

  public ObtenerAccesorios(){
    from(Products)
    .pipe(
      filter(producto => producto.department === 2),
      map((producto: ProductsInterface) =>{
        let dirImg = `./../../../${producto.img}`;
        return{
          ...producto, 
          img: dirImg
        }
      }),
      take(4),
      tap((value: ProductsInterface) => this.accesoriosProducts.push(value))
    )
    .subscribe((value) => console.log(this.accesoriosProducts));
  }

  public GetIdToChange(id){
    console.log(id);
    this.roter.navigate(['detail-product', id]);
  }

}
