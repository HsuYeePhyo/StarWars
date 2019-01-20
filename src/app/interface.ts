export interface Items{
    name: string;
    category: string;
    catUrl: string;
    url:string;
}
export interface Characters{
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
}
export interface Films{
    title: string;
    episode_id: number;
    opening_crawl: string;
    director:string;
    producer: string;
    release_date: string;
}
export interface Species{
    name: string;
    classification: string;
    designation: string;
    average_height: number;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: number;
    homeworld: string;
    language: string;
}
export interface Planets{
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
}
export interface Vehicles{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    vehicle_class: string;
    pilots: Array<string>;
}
export class Starships{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: string;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots?: string;
}