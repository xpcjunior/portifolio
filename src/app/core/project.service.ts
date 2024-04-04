import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectoInterface } from '../shared/models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private firestore: Firestore) { }

  getProjetos(): Observable<ProjectoInterface[]> {

    const projetosCollection = query(collection(this.firestore, 'project'), orderBy('name'));

    let projetos: Observable<ProjectoInterface[]> = collectionData(projetosCollection).pipe(
      map((projects: any[]) => {
        return projects.map(project => {
          return project;
        });
      })
    );

    return projetos;
  }
  
}
