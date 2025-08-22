import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerContactForm } from '../app/customer-contact-form/customer-contact-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerContactForm],
  template: `<app-customer-contact-form></app-customer-contact-form>`,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('reactive-form-example');
}
