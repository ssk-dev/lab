import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularComponent} from './component/angular/angular.component';
import {GitComponent} from './component/git/git.component';
import {LintComponent} from './component/lint/lint.component';
import {TslintComponent} from './component/lint/tslint/tslint.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'angular'},
  {path: 'angular', component: AngularComponent},
  {path: 'git', component: GitComponent},
  {
    path: 'lint', component: LintComponent, children: [
      {path: 'typescript', component: TslintComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
