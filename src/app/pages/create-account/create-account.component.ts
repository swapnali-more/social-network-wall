import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb:FormBuilder, public useService: UserService, private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAccountForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  create(){
    this.useService.createNewUser(this.createAccountForm.value).then((res)=>{
      this.useService.user = res;
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/posts']);
      this.snackbar.open("Account created successfully!", "Ok")
    }).catch((err)=>{
      this.snackbar.open("Please try after sometimes!", "Ok")
    });
  }
}
