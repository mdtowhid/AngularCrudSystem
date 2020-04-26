import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { BankService } from '../shared/bank.service';
import { BankAccountService } from '../shared/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
})
export class BankAccountComponent implements OnInit {
  bankAccountForms: FormArray = this.fb.array([]);
  bankList = [];
  notification = null;

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private bankAccountService: BankAccountService
  ) {}

  ngOnInit() {
    this.bankService
      .getBankList()
      .subscribe((res) => (this.bankList = res as []));

    this.loadBankAccounts();
  }

  loadBankAccounts = () => {
    this.bankAccountService.getBankAccounts().subscribe((res) => {
      if (res === []) {
        this.addBankAccountForm();
      } else {
        (res as []).forEach((ba: any) => {
          this.bankAccountForms.push(
            this.fb.group({
              bankAccountId: [ba.bankAccountId, Validators.required],
              accountNumber: [ba.accountNumber, Validators.required],
              accountHolder: [ba.accountHolder, Validators.required],
              bankId: [ba.bankId, Validators.min(1)],
              IFSC: [ba.ifsc, Validators.required],
            })
          );
        });
      }
    });
  };

  addBankAccountForm() {
    this.bankAccountForms.push(
      this.fb.group({
        bankAccountId: [0],
        accountNumber: ['', Validators.required],
        accountHolder: ['', Validators.required],
        bankId: [0, Validators.min(1)],
        IFSC: ['', Validators.required],
      })
    );
  }

  recordSubmit(fg: FormGroup) {
    if (fg.value.bankAccountId == 0)
      this.bankAccountService
        .postBankAccount(fg.value)
        .subscribe((res: any) => {
          fg.patchValue({
            bankAccountId: res.bankAccountId,
          });

          this.showNotification('insert');
        });
    else
      this.bankAccountService.putBankAccount(fg.value).subscribe((res: any) => {
        this.showNotification('update');
      });
  }

  deleteRecord(bankAccountId, i) {
    if (bankAccountId == 0) {
      this.bankAccountForms.removeAt(i);
    } else if (confirm('Want to delete ?')) {
      this.bankAccountService
        .deleteBankAccount(bankAccountId)
        .subscribe((res) => {
          this.bankAccountForms.removeAt(i);
          this.showNotification('delete');
        });
    }
  }

  showNotification = (cat) => {
    switch (cat) {
      case 'insert':
        this.notification = { class: 'text-success', msg: 'saved!' };
        break;
      case 'update':
        this.notification = { class: 'text-primary', msg: 'updated!' };
        break;

      case 'delete':
        this.notification = { class: 'text-danger', msg: 'deleted!' };
        break;
    }
  };
}



























