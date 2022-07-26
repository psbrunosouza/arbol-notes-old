import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from "../../@data/services/subjects/menu/menu.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  @Input() title: string = "";

  menuState: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.openMenuState$.subscribe((state) => {
      this.menuState = state;
    })
  }

  openMenu(): void {
    this.menuService.setMenuState = !this.menuState;
  }
}
