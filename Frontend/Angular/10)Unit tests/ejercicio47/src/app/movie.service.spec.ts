import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';


describe('addCastMember',()=>{
  it('adding a cast member increases the cast member count by one when canAddMovieToActor==true', () => {
    const service: MovieService = TestBed.get(MovieService);

    let mockActorService=jasmine.createSpyObj("ActorService",["canAddMovieToActor"]);
    mockActorService.canAddMovieToActor.and.returnValue(true);

    service.addCastMember('Sylvester', 'Rambo', mockActorService);
    expect(service.castMembers.length).toBe(1)    
  });

  it('adding a cast member doesnt change the cast member count when canAddMovieToActor==false', () => {
    const service: MovieService = TestBed.get(MovieService);

    let mockActorService=jasmine.createSpyObj("ActorService",["canAddMovieToActor"]);
    mockActorService.canAddMovieToActor.and.returnValue(false);

    service.addCastMember('Sylvester', 'Rambo', mockActorService);
    expect(service.castMembers.length).toBe(0)    
  });
})
