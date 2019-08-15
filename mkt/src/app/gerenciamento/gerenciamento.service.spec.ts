import { TestBed } from '@angular/core/testing';

import { GerenciamentoService } from './gerenciamento.service';

describe('GerenciamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerenciamentoService = TestBed.get(GerenciamentoService);
    expect(service).toBeTruthy();
  });
});
