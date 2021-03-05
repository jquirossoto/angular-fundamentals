import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ColapsableWellComponent } from "src/app/common/colapsable-well.component";
import { DurationPipe } from "src/app/common/duration.pipe";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "../shared";
import { SessionListComponent } from "./session-list.component";
import { UpvoteComponent } from "./upvote.component";
import { VoterService } from "./voter.service";

describe("SessionListComponent", () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async( () => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {
        userName: "Joe"
      }
    };
    let mockVoterService = {
      userHasVoted: () => true
    };
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        ColapsableWellComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [
        // NO_ERRORS_SCHEMA
      ]
    });
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
  })

  describe("initial display", () => {
    it("should have the correct session title", () => {
      component.sessions = <ISession[]>[{
        id: 6,
        name: "Session 1",
        presenter: "Joe",
        duration: 1,
        level: "beginner",
        abstract: "abstract",
        voters: ["john", "bob"]
      }];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 4;
      component.ngOnChanges();
      fixture.detectChanges();
      // expect(element.querySelector("[well-title]")?.textContent).toContain("Session 1");
      expect(debugElement.query(By.css("[well-title]")).nativeElement.textContent).toContain("Session 1");
    });
  });

});
