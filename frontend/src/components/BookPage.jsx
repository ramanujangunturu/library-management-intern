import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Book from './Book';
const BookPage = () => {
    const book = {
        "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkOF8cQi0-riI-TgL2MlwSaPDNGKlOu6hvK3ub-XfMNEc1I2gX",
        "bookName": "Atomic Habits",
        "publicationYear": "2023",
        "author": "James Clear",
        "bookDescription": "James Clear is an expert on habits and decision making. He made his name as the author of one of the fastest-growing email newsletters in history, which grew from zero to 100,000 subscribers in under two years. Today, his newsletter has over 400,000 subscribers, and his articles at jamesclear.com receive 10 million hits each year. His work frequently appears in publications including the New York Times, Forbes and Business Insider.",
        "availability": false,
        "category": "Category 1",
        "availableCopies": 10
    };

    return (
        <React.Fragment>
            <Navbar />
            <div>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full md:w-1/2 py-4'>
                        <img
                            src={book.bookPhoto}
                            width={350}
                            alt={book.bookName}
                            className='mx-auto max-w-full h-auto'
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className="p-4">
                            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                                <p className="text-3xl text-gray-900 cursor-pointer">
                                    {book.bookName}
                                </p>
                                {book.author} • {book.publicationYear}
                            </p>
                            <p className="text-gray-700 mb-4">{book.bookDescription}</p>
                        </div>
                        <div className="flex p-4 border-t border-gray-300 text-gray-700">
                            {
                                book.availability === false ?
                                    <>
                                        <div className='flex-1 inline-flex items-center'>
                                            <p>
                                                <span className='text-red-500 font-bold'>
                                                    OUT OF STOCK
                                                </span>
                                            </p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="flex-1 inline-flex items-center">
                                            <p>
                                                <span className="text-gray-900 font-bold">
                                                    {book.availableCopies}
                                                </span>
                                                Available Copies
                                            </p>
                                        </div>
                                    </>

                            }
                            <div className="flex-1 inline-flex items-center">
                                <p>
                                    <span className="text-gray-900 font-bold">
                                        {book.category}
                                    </span>
                                </p>
                            </div>
                        </div>
                        {
                            book.availability === true && (
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Reserve Book
                                </button>
                            )
                        }
                    </div>
                </div>
                <div>
                    <p className="p-4 uppercase tracking-wide text-sm font-bold text-gray-700">
                        <p className="text-3xl text-gray-900 cursor-pointer">
                            Find Similar Books
                        </p>
                    </p>
                    <Book />
                </div>
            </div>
        </React.Fragment >
    );
};

export default BookPage;
