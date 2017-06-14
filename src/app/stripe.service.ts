import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class StripeService {

  constructor() { }

  takePayment(productName: string, amount: number, token: any) {
    let body = {
        tokenId: token.id,
        productName: productName,
        amount: amount
    };
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('/api/stripepayment', bodyString, options)
      .toPromise()
      .then((res) => {
          this.takePaymentResult = res.json().status;
      })
      .catch((error) => {
          this.takePaymentResult = error.message
    });

  }

  openCheckout(title, amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oanN4i9OW6hUAl2dSrsE4RmV',
      locale: 'auto',
      name: 'Fund This',
      description: title,
      amount: Number(amount),
      token: function (token: any) {
        console.log(token.id);
        console.log(token);
        var stripe = this.require("stripe")("sk_test_xXnsxndD2KDaDE517FPl1rmu");
        // Token is created using Stripe.js or Checkout!
        // Get the payment token submitted by the form:
        // Charge the user's card:
        var charge = stripe.charges.create({
          amount: 1000,
          currency: "usd",
          description: "Example charge",
          source: token,
        }, function(err, charge) {
          // asynchronously called
        });
      }
    });

    handler.open();
  }

}
