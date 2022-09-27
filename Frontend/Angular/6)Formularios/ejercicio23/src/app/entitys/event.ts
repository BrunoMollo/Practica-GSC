export interface Event {
  id:number|undefined
  name:string
    date: string
    time: string
    location: {
        address: string
        city: string
        country: string
      }
}
