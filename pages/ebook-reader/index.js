import React, { useRef, useState } from 'react'
import { ReactReader } from 'react-reader'


const index = () => {
    const [progress, setProgress] = useState(0);
    const [page, setPage] = useState('')
    const renditionRef = useRef(null)
    const tocRef = useRef(null)
    const [location, setLocation] = useState(null)
    const handleProgressChange = (event) => {
        setProgress(Number(event.target.value));
    };
    const locationChanged = epubcifi => {
        // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
        setLocation(epubcifi)

        // get Page
        if (renditionRef.current && tocRef.current) {
            const { displayed, href } = renditionRef.current.location.start
            const chapter = tocRef.current.find(item => item.href === href)
            setPage(
                `Page ${displayed.page} of ${displayed.total} in chapter ${chapter ? chapter.label : 'n/a'
                }`
            )
        }
    }
    return (
        <div style={{ height: '100vh' }}>
            <input
                type="range"
                id="progress"
                name="progress"
                min="0"
                max="100"
                value={progress}
/*                 onChange={handleProgressChange} */
            />
            <ReactReader
                /*                 location={location} */
/*                 locationChanged={locationChanged} */
                url="https://react-reader.metabits.no/files/alice.epub"
/*                 getRendition={rendition => (renditionRef.current = rendition)}
                tocChanged={toc => (tocRef.current = toc)} */
                epubOptions={{
                    flow: 'scrolled',
                    manager: 'continuous'
                  }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    left: '1rem',
                    textAlign: 'center',
                    zIndex: 1
                }}
            >
                {page}
            </div>
        </div>
    )
}

export default index;