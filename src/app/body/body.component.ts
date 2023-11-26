import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  items: MenuItem[] | any;

  home: MenuItem | any;

  ngOnInit() {
    
      this.items = [
        { label: 'Dashboard', routerLink: '/dashboard' },
        { label: 'Reports', routerLink: '/dashboard/reports' },
        { label: 'Settings', routerLink: '/dashboard/settings' }
      ];

      this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
  }

}
