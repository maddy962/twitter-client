import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTweetsComponent } from './top-tweets.component';

describe('TopTweetsComponent', () => {
  let component: TopTweetsComponent;
  let fixture: ComponentFixture<TopTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
