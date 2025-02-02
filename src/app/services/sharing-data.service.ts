import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  private _idUserEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public get newUserEventEmitter(): EventEmitter<User> {
    return this._newUserEventEmitter;
  }

  public get idUserEventEmitter(): EventEmitter<number> {
    return this._idUserEventEmitter;
  }

}
