import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export enum AngularGenerateTypesEnum {
  appShell = 'appShell',
  application = 'application',
  class = 'class',
  component = 'component',
  directive = 'directive',
  enum = 'enum',
  guard = 'guard',
  interface = 'interface',
  library = 'library',
  module = 'module',
  pipe = 'pipe',
  service = 'service',
  serviceWorker = 'serviceWorker',
  universal = 'universal',
  webWorker = 'webWorker'
}

export enum FileTypeEnum {
  file = 'file',
  folder = 'folder'
}

export interface IFile {
  name: string;
  type: FileTypeEnum;
  description?: string;
  sub?: { [file: string]: IFile };
}

export interface IFileStructure {
  [file: string]: IFile;
}

@Component({
  selector: 'lab-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  public componentName: string = '';
  public angularGenerateTypesEnum = AngularGenerateTypesEnum;
  public angularGenerateTypesArray = Object.keys(AngularGenerateTypesEnum);
  public selectedGenerateType: AngularGenerateTypesEnum = AngularGenerateTypesEnum.component;
  public typeAndNameFormGroup: FormGroup;

  public searchInDescription: string = '';
  public fileStructure: IFileStructure = {
    src: {
      name: 'src',
      type: FileTypeEnum.folder,
      description: 'Source files for the root-level application project.',
      sub: {
        app: {
          name: 'app',
          type: FileTypeEnum.folder,
          description: 'Contains the component files in which your application logic and data are defined.',
          sub: {
            appComponentTs: {
              name: 'app.component.ts',
              type: FileTypeEnum.file,
              description: 'Defines the logic for the app\'s root component, named AppComponent. ' +
                'The view associated with this root component becomes the root of the view hierarchy ' +
                'as you add components and services to your application.'
            },
            appComponentHtml: {
              name: 'app.component.html',
              type: FileTypeEnum.file,
              description: 'Defines the HTML template associated with the root AppComponent.'
            },
            appComponentScss: {
              name: 'app.component.scss',
              type: FileTypeEnum.file,
              description: 'Defines the base SCSS stylesheet for the root AppComponent.'
            },
            appComponentSpecTs: {
              name: 'app.component.spec.ts',
              type: FileTypeEnum.file,
              description: 'Defines a unit test for the root AppComponent.'
            },
            appModuleTs: {
              name: 'app.module.ts',
              type: FileTypeEnum.file,
              description: 'Defines the root module, named AppModule, that tells Angular how to assemble the application. ' +
                'Initially declares only the AppComponent. As you add more components to the app, they must be declared here.'
            },
          }
        },
        assets: {
          name: 'assets',
          type: FileTypeEnum.folder,
          description: 'Contains image and other asset files to be copied as-is when you build your application.'
        },
        environments: {
          name: 'environments',
          type: FileTypeEnum.folder,
          description: 'Contains build configuration options for particular target environments. ' +
            'By default there is an unnamed standard development environment and a production ("prod") environment. ' +
            'You can define additional target environment configurations.'
        },
        favicon: {
          name: 'favicon.ico',
          type: FileTypeEnum.file,
          description: 'An icon to use for this application in the bookmark bar.'
        },
        index: {
          name: 'index.html',
          type: FileTypeEnum.file,
          description: 'The main HTML page that is served when someone visits your site. ' +
            'The CLI automatically adds all JavaScript and CSS files when building your app, ' +
            'so you typically don\'t need to add any < script >; or < link > tags here manually.'
        },
        main: {
          name: 'main.ts',
          type: FileTypeEnum.file,
          description: 'The main entry point for your application. ' +
            'Compiles the application with the JIT compiler and bootstraps ' +
            'the application\'s root module (AppModule) to run in the browser. ' +
            'You can also use the AOT compiler without changing any code by appending ' +
            'the --aot flag to the CLI build and serve commands.'
        },
        polyfills: {
          name: 'polyfills.ts',
          type: FileTypeEnum.file,
          description: 'Provides polyfill scripts for browser support.'
        },
        styles: {
          name: 'styles.scss',
          type: FileTypeEnum.file,
          description: 'Lists CSS files that supply styles for a project. ' +
            'The extension reflects the style preprocessor you have configured for the project.'
        },
        test: {
          name: 'test.scss',
          type: FileTypeEnum.file,
          description: 'The main entry point for your unit tests, with some Angular-specific configuration. ' +
            'You don\'t typically need to edit this file.'
        }
      }
    },
    nodeModules: {
      name: 'node_modules',
      type: FileTypeEnum.folder,
      description: 'Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.'
    },
    editorconfig: {
      name: '.editorconfig',
      type: FileTypeEnum.file,
      description: 'Configuration for code editors.'
    },
    gitignore: {
      name: '.gitignore',
      type: FileTypeEnum.file,
      description: 'Specifies intentionally untracked files that Git should ignore.'
    },
    readme: {
      name: 'README.md',
      type: FileTypeEnum.file,
      description: 'Introductory documentation for the root app.'
    },
    angularJson: {
      name: 'angular.json',
      type: FileTypeEnum.file,
      description: 'CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, ' +
        'and test tools that the CLI uses, such as TSLint, Karma, and Protractor.'
    },
    packageJson: {
      name: 'package.json',
      type: FileTypeEnum.file,
      description: 'Configures npm package dependencies that are available to all projects in the workspace.'
    },
    tsconfigJson: {
      name: 'tsconfig.json',
      type: FileTypeEnum.file,
      description: 'Default TypeScript configuration for projects in the workspace.'
    },
    tslintJson: {
      name: 'tslint.json',
      type: FileTypeEnum.file,
      description: 'Default TSLint configuration for projects in the workspace.'
    }
  };

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.typeAndNameFormGroup = this.formBuilder.group({
      name: [
        '', [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    });
  }

  public applyFilter(filter: string): void {
    this.searchInDescription = filter.trim();
  }
}
