import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatSelectModule, MatSidenavModule,
  MatSortModule, MatStepperModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import {HighlightModule} from 'ngx-highlightjs';
import {MarkdownModule} from 'ngx-markdown';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularComponent} from './component/angular/angular.component';
import {CodeComponent} from './component/code/code.component';
import {CopyToClipboardComponent} from './component/copy-to-clipboard/copy-to-clipboard.component';
import {GitComponent} from './component/git/git.component';
import {HeaderComponent} from './component/header/header.component';
import {LintComponent} from './component/lint/lint.component';
import {TslintComponent} from './component/lint/tslint/tslint.component';
import {TableComponent} from './component/material/table/table.component';
import {TerminalComponent} from './component/terminal/terminal.component';
import {HighlightSearchPipe, MatchSearchPipe} from './pipes/highlight-search.pipe';
import {NavSideComponent} from './component/nav-side/nav-side.component';
import {PageComponent} from './component/page/page.component';
import {SectionComponent} from './component/section/section.component';
import {ConvertToLinkPipe} from './pipes/convert-to-link.pipe';
import {NoticeComponent} from './component/notice/notice.component';
import {ConvertStringToCasePipe} from './pipes/convert-string-to-case.pipe';
import {ObjectToArrayPipe} from './pipes/object-to-array.pipe';
import {FileTreeDirective} from './directives/file-tree.directive';
import {FileTreeComponent} from './components/file-tree/file-tree.component';
import {ConvertToTitlePipe} from './pipes/convert-to-title.pipe';
import {SidebarWidgetComponent} from './components/sidebar-widget/sidebar-widget.component';

class HighlightJs {
  public static highlightJsLanguages(): {}[] {
    return [
      {name: 'typescript', func: typescript},
      {name: 'scss', func: scss},
      {name: 'json', func: json}
    ];
  }
}

const MaterialModules: any[] = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatStepperModule,
  MatPaginatorModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    AngularComponent,
    GitComponent,
    TslintComponent,
    LintComponent,
    CodeComponent,
    HeaderComponent,
    CopyToClipboardComponent,
    TableComponent,
    HighlightSearchPipe,
    NavSideComponent,
    PageComponent,
    SectionComponent,
    ConvertToLinkPipe,
    NoticeComponent,
    ConvertStringToCasePipe,
    ObjectToArrayPipe,
    FileTreeDirective,
    FileTreeComponent,
    MatchSearchPipe,
    ConvertToTitlePipe,
    SidebarWidgetComponent
  ],
  imports: [
    HighlightModule.forRoot({
      languages: HighlightJs.highlightJsLanguages
    }),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
