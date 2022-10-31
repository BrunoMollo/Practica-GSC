import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';


describe('Adding members',()=>{
  let service:MovieService
  let startingMembersQuantity: number

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);

    service.castMembers.push({name:'Mr. Default', part:'Villan'})
    service.castMembers.push({name:'Jhon Loaded', part:'Main character'})

    startingMembersQuantity=service.castMembers.length;
  });

  it("should add a memeber that hasn't been added with a free part", ()=>{
    service.addCastMember('Mike New', 'Main charater friend')
    expect(service.castMembers.length).toBe(startingMembersQuantity+1)
  })

  it("shouldn't add a memeber with an existing name", ()=>{
    service.addCastMember('Mr. Default', 'Main charater friend')
    expect(service.castMembers.length).toBe(startingMembersQuantity)
  })

  it("shouldn't add a memeber with an existing part", ()=>{
    service.addCastMember('Mike New', 'Main character')
    expect(service.castMembers.length).toBe(startingMembersQuantity)
  })


})
