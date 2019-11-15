import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'lab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public sortable: boolean = false;
  @Input() public pagination: boolean = false;
  @Input() public data: MatTableDataSource<any> = new MatTableDataSource();
  @Input() public displayedColumns: string[];

  public filterText: string = '';
  public entriesPerPage: number[] = [10, 25, 50];
  @ViewChild(MatSort, {static: true}) private sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) private paginator: MatPaginator;

  public ngOnInit(): void {
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
    if (this.pagination) {
      this.entriesPerPage.push(this.data.filteredData.length);
    } else {
      this.entriesPerPage = [];
      this.entriesPerPage.push(this.data.filteredData.length);
    }
  }

  public applyFilter(filterValue: string): void {
    this.filterText = filterValue.trim();
    this.data.filter = filterValue.trim().toLowerCase();
  }
}
