import { Album, Track } from "../interfaces/Model";

interface Props {
    album: Album;
    artistName: string;
}


function AlbumInfos({ album, artistName }: Props) {
    return (
        <>
            <div className='album-wrapper'>
                <h3>{album.name}</h3>
                <p>Sorti en : {album.year}</p>
                <h4>Artiste : {artistName}</h4>
                <div>
                    <h4>Musiques :</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Durée</th>
                                <th>Nombre découtes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {album.tracks.map(track => <tr key={track.name}><td>{track.name}</td><td>{track.duration}</td><td>{track.nbHits}</td></tr>)}
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default AlbumInfos