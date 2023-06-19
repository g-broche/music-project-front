export interface Artist {
    _id: {
        $oid: string;
    };
    name: string;
    country: string;
    albums: Album[];
}

export interface Album {
    name: string;
    year: number;
    tracks: Track[];
}

export interface Track {
    name: string;
    duration: number;
    nbHits: number;
}