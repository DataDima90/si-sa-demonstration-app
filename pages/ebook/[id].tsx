import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import FlexContainer from '@/containers/FlexContainer';
import CenterContainer from '@/containers/CenterContainer';
import ProductDetailView from '@/components/ProductDetailView';
import PaymentWall from '@/components/PaymentView';

const Ebook = ({ ebook }) => {
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    const handleProgressChange = (event) => {
        setProgress(Number(event.target.value));
    };

    const handleSaveProgress = () => {
        // TODO: Implement saving progress to backend.
        console.log(`Saved progress of ${progress}% for e-book ID ${ebook.id}.`);
    };

    const handleDeleteEbook = () => {
        // TODO: Implement deleting e-book from backend.
        console.log(`Deleted e-book with ID ${ebook.id}.`);
        router.push('/');
    };

    return (
        <CenterContainer>
            <Head>
                <title>{ebook.title}</title>
            </Head>

            <FlexContainer>
                <ProductDetailView item={ebook} />
            </FlexContainer>
            {/*             <h1>{ebook.title}</h1>
            <p>{ebook.description}</p> */}
            {/*             <label htmlFor="progress">Reading progress:</label>
            <input
                type="range"
                id="progress"
                name="progress"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
            />
            <button onClick={handleSaveProgress}>Save progress</button>
            <button onClick={handleDeleteEbook}>Delete e-book</button> */}
        </CenterContainer>
    );
};

export async function getStaticPaths() {
    // TODO: Fetch e-book IDs from backend.
    const ebookIds = ["0", "1", "2"];

    const paths = ebookIds.map((id) => ({
        params: { id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // TODO: Fetch e-book data from backend.
    const ebook = {
        id: params.id,
        title: `E-Book ${params.id}`,
        description: `This is the description for E-Book ${params.id}.`,
        imageURL: "https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg",
        type: "premium"
    };

    return {
        props: {
            ebook,
        },
    };
}

export default Ebook;
