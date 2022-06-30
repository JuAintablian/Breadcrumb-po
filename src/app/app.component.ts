import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  breadcrumbItens;
  breadcrumbItensReduzido;

  constructor(private router: Router) {
    this.breadcrumbItens = [
      { label: 'início', action: () => this.navigateToBeginning() },
      { label: 'início', link: `/page-0/` },
      {
        label: `cliente: NOME DO CLIENTE MAIS LONGO`,
        link: `/page-1/`,
      },
      {
        label: `TOTVS TOTVS TOTVS TOTVS TOTVS TOTVS TOTVS`,
        link: `/page-2/`,
      },
      { label: `NOME MAIS LONGO PARA TESTE` },
    ];

    this.breadcrumbItensReduzido = [
      { label: 'início', action: () => this.navigateToBeginning() },
      {
        label: `cliente: CLIENTE`,
        link: `/page-1/`,
      },
      {
        label: `TOTVS TOTVS`,
        link: `/page-2/`,
      },
      { label: `NOME` },
    ];
  }

  navigateToBeginning() {
    return this.router.navigate(['/page-0']);
  }
}
