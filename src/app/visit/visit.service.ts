import { Injectable } from "@angular/core";
import {addName} from './visit.component'
@Injectable({
    providedIn: 'root'
})
export class VisitService{
    list: addName[] = []
}