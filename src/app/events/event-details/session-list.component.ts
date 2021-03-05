import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../shared/index';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() eventId?: number;
  @Input() filterBy?: string;
  @Input() sortBy?: string;
  @Input() sessions? : ISession[];
  visibleSessions?: ISession[] = [];

  constructor(public authService: AuthService, private voterService: VoterService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if(this.sessions) {
      this.filterSessions(this.filterBy!);
      this.sortBy === 'name' ? this.visibleSessions?.sort(this.sortByNameAsc) : this.visibleSessions?.sort(this.sortByVotesDesc);
    }
  }

  sortByNameAsc(session1: ISession, session2: ISession): number {
    let result;
    if(session1.name > session2.name) {
      result = 1;
    } else if(session1.name == session2.name) {
      result = 0;
    } else {
      result = -1;
    }
    return result;
  }

  sortByVotesDesc(session1: ISession, session2: ISession) {
    return session2.voters.length - session1.voters.length;
  }

  filterSessions(filter: string) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions?.slice(0);
    } else {
      this.visibleSessions = this.sessions?.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

   toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId! ,session, this.authService.currentUser?.userName!);
    } else {
      this.voterService.addVoter(this.eventId!, session, this.authService.currentUser?.userName!);
    }
    if(this.sortBy === 'votes') {
      this.visibleSessions?.sort(this.sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser?.userName!);
  }

}
