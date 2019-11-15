import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

interface ITableData {
  name: string;
  description: string;
}

@Component({
  selector: 'lab-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent {

  public tableCommits: ITableData[] = [
    {
      name: 'build',
      description: 'Changes that affect the build system or external dependencies (example scopes: angular-cli, linting, npm)'
    },
    {
      name: 'ci',
      description: 'Changes to our CI configuration files and scripts'
    },
    {
      name: 'docs',
      description: 'Documentation only changes'
    },
    {
      name: 'feat',
      description: 'A new feature'
    },
    {
      name: 'fix',
      description: 'A bug fix'
    },
    {
      name: 'perf',
      description: 'A code change that improves performance'
    },
    {
      name: 'refactor',
      description: 'A code change that neither fixes a bug nor adds a feature'
    },
    {
      name: 'revert',
      description: 'On revert'
    },
    {
      name: 'style',
      description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      name: 'ui',
      description: 'Changes that affect only the visible ui (changes only in html and scss files)'
    },
    {
      name: 'test',
      description: 'Adding missing tests or correcting existing tests'
    }
  ];
  public branchNamingCodeExample: string = '// new branch\r\ngit checkout -b feat/implement-new-feature\r\n' +
    '// new commit\r\ngit commit -m "docs/add-js-doc-blocks"';
  public columnName: string[] = ['name', 'description'];
  public tableData: MatTableDataSource<ITableData> = new MatTableDataSource(this.tableCommits);

}
