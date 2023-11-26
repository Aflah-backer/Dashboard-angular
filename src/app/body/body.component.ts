import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      
      const currentRoute = this.activatedRoute.root.firstChild?.snapshot;
    if (currentRoute) {

      const path = this.getDeepestChildPath(currentRoute);

      if (path === 'settings') {
        this.items = [
          { icon: 'pi pi-home', routerLink: '/dashboard' },
          { label: 'Dashboard', routerLink: '/dashboard' },
          { label: 'Settings', routerLink: '/dashboard/settings' }
        ];
      } else if (path === 'reports') {
        this.items = [
          { icon: 'pi pi-home', routerLink: '/dashboard' },
          { label: 'Dashboard', routerLink: '/dashboard' },
          { label: 'Reports', routerLink: '/dashboard/reports' }
        ];
      } else {
        this.items = [
          { icon: 'pi pi-home', routerLink: '/dashboard' },
          { label: 'Dashboard', routerLink: '/dashboard' }
        ];
      }
    }
  });
  }
  getDeepestChildPath(route: ActivatedRouteSnapshot): string {
    if (route.firstChild) {
      return this.getDeepestChildPath(route.firstChild);
    } else {
      return route.routeConfig?.path || '';
    }
  }

}
