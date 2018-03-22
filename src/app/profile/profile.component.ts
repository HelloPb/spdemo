import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public high = false;
  public formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required]],
      // tslint:disable-next-line:max-line-length
      emailId: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      dob: ['', [Validators.required]],
      loc: ['', [Validators.required]],
    });
  }

  private updateForm(): void {

    const p = this.getProfile();

    this.formGroup.patchValue({
      userName: p.userName,
      emailId: p.emailId,
      dob: p.dob,
      loc: p.loc
    });
  }

  private getProfile(): any {

    const userName = sessionStorage.getItem('userName');
    const emailId = sessionStorage.getItem('emailId');
    const dob = sessionStorage.getItem('dob');
    const loc = sessionStorage.getItem('loc');

    return {
      userName: userName ? userName : '',
      emailId: emailId ? emailId : '',
      dob: dob ? dob : '',
      loc: loc ? loc : ''
    };
  }

  public ngOnInit(): void {
    this.updateForm();
  }

  public save(): void {

    if (this.formGroup.valid) {

      const p = this.formGroup.value;

      sessionStorage.setItem('userName', p.userName);
      sessionStorage.setItem('emailId', p.emailId);
      sessionStorage.setItem('dob', p.dob);
      sessionStorage.setItem('loc', p.loc);

      this.router.navigate([`/home`]);
    }
  }

}
