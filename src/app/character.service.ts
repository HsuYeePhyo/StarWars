import Dexie from 'dexie';
import { Injectable } from '@angular/core';
import { CharDexie } from './interface';
import { isUndefined } from 'util';

@Injectable()
export class characterSvc{
    db: Dexie;

    constructor(){
        this.db = new Dexie('starwars');
        this.db.version(1).stores({
        character: 'name, comment'
        });
    }

    getComment(character: string): Promise<any>{
        var comment = this.db['character'].where('name').equals(character).first();
        return comment;
    }

    saveComment(comment: CharDexie): Promise<any>{
        return this.db['character'].put(comment);
    }
}


