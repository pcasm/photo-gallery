import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, {static: true}) sort!: MatSort
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator
  dataSource = new MatTableDataSource()
  filterValues = {title: ''};
  titleFilter = new FormControl('')
  tableCols = [
    'title',
    'thumbnailUrl'
  ]
  showingDetails = false;
  selectedRow: any

  constructor() { }
  @Input() gallery!: Array<any>

  ngOnInit(): void {
    this.dataSource.data = this.gallery
    this.dataSource.filterPredicate = this.tableFilter()
    this.titleFilter.valueChanges
      .subscribe(
        value => {
          this.filterValues.title = value;
          this.dataSource.filter = JSON.stringify(this.filterValues)
        }
      )
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }


  tableFilter(): (data: any, filter: string) => boolean {
    return (data, filter) => {
      const searchTerms = JSON.parse(filter);
      return data.title.indexOf(searchTerms.title) !== -1
    }
  }

  showDetails(row: any): void {
    this.selectedRow = row
    this.showingDetails = true
  }
}
