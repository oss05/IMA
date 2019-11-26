import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

// servicios
import { ArchiveService } from '../services/archive.service';

@Injectable()
export class LegalAllResolve implements Resolve<any> {

  constructor(private archiveService: ArchiveService) { }

  resolve(): Observable<any> {
    return this.archiveService.getLegal();
  }
}
