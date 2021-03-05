import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  addVoter (eventId : number,  session: ISession, voterName: string) {
    session.voters.push(voterName);
    this.http.post(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, {}, { headers: new HttpHeaders( { "Content-Type": "application/json" } ) })
      .pipe(catchError(this.handleError("saveVoter")))
      .subscribe();
  }
  deleteVoter (eventId:number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => {
      return voter !== voterName
    });
    this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .pipe(catchError(this.handleError("deleteVoter")))
      .subscribe();
  }
  userHasVoted (session: ISession, voterName: string): boolean {
    return session.voters.some(
      voter => voter === voterName
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
