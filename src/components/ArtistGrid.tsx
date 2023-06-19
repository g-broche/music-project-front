import ArtistInfos from './ArtistInfos'
import AlbumInfos from './AlbumInfos';
import { Artist, Album } from '../interfaces/Model';
import { useEffect, useState } from 'react';

const apiEndpoint = "http://localhost:3000/artists/"

function fetchArtists() {
    return fetch(apiEndpoint)
        .then((response) => response.json())
        .catch((error) => {
            return null;
        });
}

function ArtistGrid() {
    const [artists, setArtists] = useState<Artist[] | null>(null)
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [artistName, setArtistName] = useState("");
    const [isDetailed, setIsDetailed] = useState(false);

    useEffect(() => {
        fetchArtists().then((data) => {
            setArtists(data)
        });
    }, [])

    const handleChildData = (album: Album, artistName: string) => {
        setSelectedAlbum(album);
        setArtistName(artistName);
        setIsDetailed(true);
    }

    const disableDetailModal = () => {
        setSelectedAlbum(null);
        setArtistName("");
        setIsDetailed(false);
    }

    return (<>
        <section className='grid-artists' key="gridArtists">
            {artists?.map(currentArtist =>
                <ArtistInfos artist={currentArtist} onChildData={handleChildData} key={currentArtist._id.$oid} />)}
            {
                (isDetailed && artistName.length > 0 && selectedAlbum != null) && (
                    <>
                        <div className='modal-display' key={"modal" + selectedAlbum.name}>
                            <AlbumInfos album={selectedAlbum} artistName={artistName} key={selectedAlbum.name} />
                        </div>
                        <div className='modal-overlay' onClick={disableDetailModal} key="modal-overlay"></div>
                    </>
                )
            }
        </section>
    </>)
}

export default ArtistGrid