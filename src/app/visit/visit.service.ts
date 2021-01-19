import { Injectable } from '@angular/core';
import {AddName} from './visit.component';
@Injectable({
    providedIn: 'root'
})
export class VisitService{
    list: AddName[] = [];
}
