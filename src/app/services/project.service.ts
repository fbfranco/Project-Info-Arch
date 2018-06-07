import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedPhase: Phase;
	phaseList: Phase[];
  constructor() { }
}
