import { TestBed } from '@angular/core/testing';

import { MyGamesShopFormService } from './my-games-shop-form.service';

describe('MyGamesShopFormService', () => {
  let service: MyGamesShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGamesShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
