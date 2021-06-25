import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { wishlistUrl } from 'src/app/config/api';



@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(){
    return this.http.get<any[]>(wishlistUrl).pipe(
      map((result: any[])=> {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }
  addToWishlist(productId){
    return this.http.post(wishlistUrl, {id : productId})
  }

  removeFromWishlist(productId){
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
//function result(result: any, arg1: any, arg2: { let: any; productIds: undefined[]; return: any; }): import("rxjs").OperatorFunction<Object, unknown> {
 // throw new Error('Function not implemented.');
//}

