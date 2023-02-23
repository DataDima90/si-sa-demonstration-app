import React, { useState } from 'react';
import styles from './EbookList.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import eBooks from '@/data/eBooks';
import ProductView from './ProductView';
import FlexContainer from '@/containers/FlexContainer';


/* const eBooks = [
    { id: "1", title: 'E-Book 1', type: 'free' },
    { id: "2", title: 'E-Book 2', type: 'premium' },
    { id: "3", title: 'E-Book 3', type: 'free' },
    { title: 'E-Book 4', type: 'premium' },
    { title: 'E-Book 5', type: 'free' },
    { title: 'E-Book 6', type: 'premium' },
]; */

const EbookList = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredEbooks = filter === 'all' ? eBooks : eBooks.filter(ebook => ebook.type === filter);

    return (
        <div id="button" className={styles["ebook-list"]}>
            <Head>
                <title>E-Books</title>
            </Head>
            <h2 className={styles["ebook-list__heading"]}>Select free or premium E-Books for your next trip!</h2>
            <div className={styles["ebook-list__filter__container"]}>
                <label className={styles["ebook-list__filter-label"]} htmlFor="filter">Filter:</label>
                <select className={styles["ebook-list__filter-select"]} id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                </select>
            </div>
            <ul className={styles["ebook-list__list"]}>
                <FlexContainer>
                    {filteredEbooks.map((ebook, index) => (
                        <li key={index} className={styles["ebook-list__item"]}>
                            <Link href={`/ebook/${ebook.id}`}>
                                <ProductView item={ebook} />
                            </Link>
                        </li>
                    ))}
                </FlexContainer>
            </ul>
        </div>
    );
};

export default EbookList;
