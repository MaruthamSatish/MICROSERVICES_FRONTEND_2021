import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({selector: 'app-checkout', templateUrl: './checkout.component.html', styleUrls: ['./checkout.component.css']})
export class CheckoutComponent implements OnInit {
    checkoutFormGroup : FormGroup;
    constructor(private formBuilder : FormBuilder) {}

    ngOnInit() : void {
        this.checkoutFormGroup = this
            .formBuilder
            .group({

                customer: this
                    .formBuilder
                    .group({firstName: [''], lastName: [''], email: ['']}),
                shippingAddress: this
                    .formBuilder
                    .group({country: [''], state: [''], city: [''], street: [''], zipCode: ['']}),
                billingAddress: this
                    .formBuilder
                    .group({country: [''], state: [''], city: [''], street: [''], zipCode: ['']}),
                creditCard: this
                    .formBuilder
                    .group({
                        cardType: [''],
                        nameOnCard: [''],
                        cardNumber: [''],
                        securityCode: [''],
                        expirationMonth: [''],
                        expirationYear: ['']
                    })
            });
    }
    copyShippingAddressToBillingAddress(event) {
        if (event.checked) {
            this
                .checkoutFormGroup
                .controls
                .billingAddress
                .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
        } else {
            this
                .checkoutFormGroup
                .controls
                .billingAddress
                .reset();
        }
    }
    onSubmit() {
        console.log(this.checkoutFormGroup.get('customer').value);
        console.log(this.checkoutFormGroup.get('shippingAddress').value);
        console.log(this.checkoutFormGroup.get('billingAddress').value);
        console.log(this.checkoutFormGroup.get('creditCard').value);
    }
}