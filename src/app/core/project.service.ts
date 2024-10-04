import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getDocs, orderBy, query } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectoInterface } from '../shared/models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private collectionName = 'project';

  constructor(private firestore: Firestore) { }

  getProjetos(): Observable<ProjectoInterface[]> {

    const collectionQuery = query(
      collection(this.firestore, this.collectionName), orderBy('order')
    );

    return from(getDocs(collectionQuery).then(
      (snapshot) => {
        return snapshot.docs.map(
          doc => ({ id: doc.id, ...doc.data() } as ProjectoInterface)
        );
      }
    ));

  }
  
}
