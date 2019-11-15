import {Component} from '@angular/core';

@Component({
  selector: 'lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab';
  public theme: string = 'light';

  constructor() {
    this.theme = this.getTheme();
  }

  public toggleTheme(): void {
    if (this.theme === 'dark') {
      this.theme = 'light';
    } else {
      this.theme = 'dark';
    }
    this.setTheme();
  }

  public setTheme(): void {
    localStorage.setItem('theme', this.theme);
  }

  private getTheme(): string {
    let theme: string;
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    } else {
      theme = 'dark';
    }
    return theme;
  }
}
