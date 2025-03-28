import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ProgrammingLanguage } from 'app/entities/programming/programming-exercise.model';

@Injectable({ providedIn: 'root' })
export class TheiaService {
    private http = inject(HttpClient);

    private resourceUrl = 'api/programming/theia';

    /**
     * Fetches the theia images for the given programming language
     * @param {ProgrammingLanguage} language
     * @returns the theia images or undefined if no images are available for this language
     */
    getTheiaImages(language: ProgrammingLanguage): Observable<{ [key: string]: string } | undefined> {
        return this.http.get<{ [key: string]: string }>(`${this.resourceUrl}/images`, {
            params: {
                language: language,
            },
        });
    }
}
