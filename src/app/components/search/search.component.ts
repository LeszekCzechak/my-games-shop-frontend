import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private  router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  doSearch(value: string): void {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}
