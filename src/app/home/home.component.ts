import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  public create(): void {
    this.router.navigate([`/profile`]);
  }

  public ngOnInit(): void {

    const userName = sessionStorage.getItem('userName');
    this.userName = userName ? userName : undefined;
  }

}
