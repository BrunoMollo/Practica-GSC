export enum Ratings{"G", "PG", "PG-13", "R", "NC-17"} //odenado de menor a mayor

export class Movie {

    constructor(public name: string,private _rating:Ratings){}

    public static  ascendingRating(a:Movie, b:Movie){
        return a._rating - b._rating;
    }

    public static  desendingRating(a:Movie, b:Movie ){
        return b._rating - a._rating;
    }

    get rating(){
        return Ratings[this._rating]
    }

}
