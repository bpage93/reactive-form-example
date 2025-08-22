import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-contact-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './customer-contact-form.html',
  styleUrl: './customer-contact-form.css',
})
export class CustomerContactForm {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  loadUserData() {
    this.form.setValue({
      firstName: 'John',
      lastName: 'Doe',
    });
  }

  reset() {
    this.form.reset();
  }
}
