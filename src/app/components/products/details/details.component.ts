import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/ecommerce.interface';

import { ActivatedRoute } from "@angular/router";
import { pluck, switchMap, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Products } from '../../../data/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public product: ProductsInterface;
  public id: number;

  constructor(private AR: ActivatedRoute) { 
    this.AR.params.pipe(
      pluck('id'),
      switchMap((id) => this.GetProducts(Number(id)))
    ).subscribe(
      (valor) => this.product = valor
    );

    window.scroll(0,0);
  }

  ngOnInit() {
  }

  public GetProducts(id: number): Observable<ProductsInterface>{
    return from(Products)
    .pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({
        ...producto, 
        img: `./../../../${producto.img}`
      }))
    );
  }

}
