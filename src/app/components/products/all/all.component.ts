import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/ecommerce.interface';
import { from } from 'rxjs/observable/from';
import { Products } from '../../../data/data';
import { map, tap } from 'rxjs/operators';

import { Router } from "@angular/router";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public productsAll: Array<ProductsInterface> = [];

  constructor(private router: Router) { 
    this.ObtenerProductos();
  }

  ngOnInit() {
    
  }

  public ObtenerProductos(){
    from(Products)
    .pipe(
      map((producto: ProductsInterface) =>{
        let dirImg = `./../../../${producto.img}`;
        return{
          ...producto,
          img: dirImg
        }
      }),
      tap((value: ProductsInterface) => this.productsAll.push(value))
    )
    .subscribe((value) => console.log(this.productsAll))
  }

  public GetIdToChange(id: number){
    console.log(id);
    this.router.navigate(['detail-product', id]);
  }

}
