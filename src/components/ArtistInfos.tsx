import { useState } from 'react';
import { Album, Artist } from '../interfaces/Model';
import AlbumInfos from './AlbumInfos';


interface Props {
    artist: Artist,
    onChildData: (album: Album, artistName: string) => void;
};


function ArtistInfos({ artist, onChildData }: Props) {
    return (
        <>
            <article className='artist-infos'>
                <h3 className='artist-infos__name'>{artist.name}</h3>
                <p className='artist-infos__country'>Nationalité : {artist.country}</p>
                <section className='artist-infos__albums'>
                    <h4>Albums réalisés</h4>
                    <ul>
                        {artist.albums.map(album =>
                            <li key={album.name} onClick={() => { onChildData(album, artist.name) }}>
                                <span className='album-name'>{album.name}</span><span>sorti en : {album.year}</span>
                            </li>)}
                    </ul>
                </section>

            </article>
        </>
    )
}

export default ArtistInfos