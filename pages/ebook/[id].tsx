import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import FlexContainer from '@/containers/FlexContainer';
import CenterContainer from '@/containers/CenterContainer';
import ProductDetailView from '@/components/ProductDetailView';
import IProps from '@/types/types';

const Ebook = ({ ebook }: any) => {
    return (
        <CenterContainer>
            <FlexContainer>
                <ProductDetailView item={ebook} />
            </FlexContainer>
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

export async function getStaticProps({ params }: any) {
    // TODO: Fetch e-book data from backend.
    const bookTypes = ["free", "premium", "premium"]
    const ebook: IProps = {
        id: params.id,
        title: `E-Book ${params.id}`,
        description: `This is the description for E-Book ${params.id}.`,
        imageURL: "https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg",
        type: bookTypes[params.id],
    };
    return {
        props: {
            ebook,
        },
    };
}

export default Ebook;
