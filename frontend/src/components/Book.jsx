import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Book = () => {
    // const [books, setBooks] = React.useState([]);

    // React.useEffect(() => {
    //     const fetchBooks = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/v1/book/getAllBooks');
    //             setBooks(response.data.books);
    //             console.log(response.data.books)
    //         } catch (error) {
    //             console.error('Error fetching books:', error);
    //         }
    //     };

    //     fetchBooks();
    // }, []);

    const navigate = useNavigate()
    const [expandedDescriptionIndex, setExpandedDescriptionIndex] = React.useState(null);
    const handleReadMoreClick = (index) => {
        navigate(`/book/${index}`)
    };
    const books = [
        {
            "_id": 1,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8t902mozZtNMVvdk7a3yyhtE1ToWBBpWoa4-w_9oYPu7ebi1k",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        },
        {
            "_id": 2,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGHu0unjWbibmvUEPjiCCIGoUdFFsD6kR97xPZOtk-MzijSoA4",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "Think and Grow Rich is a book written by Napoleon Hill and Rosa Lee Beeland released in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. However there is no evidence that the two ever met Think and Grow Rich is a book written by Napoleon Hill and Rosa Lee Beeland released in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. However there is no evidence that the two ever met",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        }, {
            "_id": 3,
            "bookPhoto": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQziX6iHIe31XJJ_dljYtvd9ixYpmpgI8Kl77AmUuTMSVNHN0ht",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        }, {
            "_id": 4,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGHu0unjWbibmvUEPjiCCIGoUdFFsD6kR97xPZOtk-MzijSoA4",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        }, {
            "_id": 5,
            "bookPhoto": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQziX6iHIe31XJJ_dljYtvd9ixYpmpgI8Kl77AmUuTMSVNHN0ht",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        }, {
            "_id": 6,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8t902mozZtNMVvdk7a3yyhtE1ToWBBpWoa4-w_9oYPu7ebi1k",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        }, {
            "_id": 7,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8t902mozZtNMVvdk7a3yyhtE1ToWBBpWoa4-w_9oYPu7ebi1k",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        }, {
            "_id": 8,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8t902mozZtNMVvdk7a3yyhtE1ToWBBpWoa4-w_9oYPu7ebi1k",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        },
        {
            "_id": 9,
            "bookPhoto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8t902mozZtNMVvdk7a3yyhtE1ToWBBpWoa4-w_9oYPu7ebi1k",
            "bookName": "think and grow rich",
            "publicationYear": "2023",
            "author": "Napoleon Hill",
            "bookDescription": "A thrilling tale of bravery and discovery.",
            "availability": true,
            "category": "category 1",
            "availableCopies": 10
        },
    ];

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {books.length === 0 ? (
                    <p>No books available</p>
                ) : (
                    books.map((book) => (
                        <div className="max-w-6xl mx-auto h-screen" key={book._id}>
                            <div className="flex items-center justify-center min-h-screen">
                                <div className="max-w-sm w-full py-6 px-3">
                                    <img src={book.bookPhoto} width={200} alt={book.bookName} />
                                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                        <div className="flex justify-end"></div>
                                    </div>
                                    <div className="p-4">
                                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                                            <p className="text-3xl text-gray-900">
                                                <NavLink to={`/book/${book._id}`}>
                                                    {book.bookName}
                                                </NavLink>
                                            </p>
                                            {book.author} • {book.publicationYear}
                                        </p>
                                        {book.bookDescription.length > 50 ? (
                                            <>
                                                <p className="text-gray-700">
                                                    {expandedDescriptionIndex === book._id
                                                        ? book.bookDescription
                                                        : `${book.bookDescription.substring(0, 30)}...`}
                                                </p>
                                                {expandedDescriptionIndex !== book._id && (
                                                    <button
                                                        onClick={() => handleReadMoreClick(book._id)}
                                                        className="text-blue-600 hover:underline mt-0 mb-0 p-0"
                                                    >
                                                        Read More
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <p className="text-gray-700 mb-4">{book.bookDescription}</p>
                                        )}                                    </div>
                                    <div className="flex p-4 border-t border-gray-300 text-gray-700">
                                        <div className="flex-1 inline-flex items-center">
                                            <p>
                                                <span className="text-gray-900 font-bold">
                                                    {book.availableCopies}
                                                </span>{" "}
                                                Available Copies
                                            </p>
                                        </div>
                                        <div className="flex-1 inline-flex items-center">
                                            <p>
                                                <span className="text-gray-900 font-bold">
                                                    {book.category}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Reserve Book
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                )}
            </div >
        </React.Fragment>

    );
};

export default Book;
