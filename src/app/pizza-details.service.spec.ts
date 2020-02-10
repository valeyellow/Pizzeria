import { TestBed } from '@angular/core/testing';

import { PizzaDetailsService } from './pizza-details.service';

describe('PizzaDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaDetailsService = TestBed.get(PizzaDetailsService);
    expect(service).toBeTruthy();
  });
});
