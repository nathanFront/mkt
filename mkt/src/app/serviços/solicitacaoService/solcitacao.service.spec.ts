import { TestBed } from '@angular/core/testing';

import { SolcitacaoService } from './solcitacao.service';

describe('SolcitacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolcitacaoService = TestBed.get(SolcitacaoService);
    expect(service).toBeTruthy();
  });
});
