export interface Forecast {
    coord:{
        lon: number;
        lat: number;
    };
    weather:    Weather[];
    base:       string;
    main:{
        temp:      number;
        feelsLike: number;
        tempMin:   number;
        tempMax:   number;
        pressure:  number;
        humidity:  number;
        seaLevel:  number;
        grndLevel: number;
    }
    visibility: number;
    wind:{
        speed: number;
        deg:   number;
        gust:  number;
    }
    ;
    rain:{
        the1H: number;
    };
    clouds:{ 
        all: number 
    }
    dt:         number;
    sys:{
        type:    number;
        id:      number;
        country: string;
        sunrise: number;
        sunset:  number;
    };
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}



export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

