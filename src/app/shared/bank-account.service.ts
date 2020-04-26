import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BankAccountService {
  constructor(private http: HttpClient) {}

  getBankAccounts = () =>
    this.http.get(environment.apiBaseURI + '/bankAccount');

  postBankAccount = (formData) =>
    this.http.post(environment.apiBaseURI + '/bankAccount', formData);

  putBankAccount = (formData) =>
    this.http.put(
      environment.apiBaseURI + '/bankAccount/' + formData.bankAccountId,
      formData
    );

  deleteBankAccount = (id) =>
    this.http.delete(environment.apiBaseURI + '/bankAccount/' + id);
}
