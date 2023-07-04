import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserCustomerService } from 'src/app/services/user-customer/user-customer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnChanges {
  declare userLoggedIn: boolean;
  private subscription: Subscription[] = [];
  declare userAdmin: any;
  declare id: number;

  ngOnInit(): void {
   // this.GetUserConnected();
  }

  constructor(
    private router : Router,
    private authenticationService: AuthenticationService,
    private userCustomerService : UserCustomerService,
   // private notificationService : NotificationService
  ) {
   
    this.userAdmin = this.authenticationService.isLoggedInAsAdmin();
  }
  ngOnChanges(changes: SimpleChanges): void {
  //  this.GetUserConnected();
  }
  
  public GetUserConnected() {

    this.id = localStorage.getItem('userLoggedIn') as any;
    this.subscription.push(

      this.userCustomerService.getUser(this.id).subscribe(
        (data: any) => {
          this.userLoggedIn = data;
        }
      )
    )
  }
}
