import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Book from './Book';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import Edit from './EditPage';
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
const BookPage = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [dataFetched, setDataFetched] = React.useState(false)
    const [editToggle,setEditToggle] = React.useState(false)

    const [book, setBook] = React.useState({})
    const fetchCardData = async () => {
        const token = sessionStorage.getItem('token');
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/book/getBook/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data.book);
            setBook(response.data.book);
            setDataFetched(true);
        } catch (error) {
            console.log('Error while fetching the book', error.message);
            toast.error('Error while fetching the data');
        }
    };
    const toggleEdit = () => {
        setEditToggle(!editToggle);
    };

    const handleDelete = async () => {
        const token = sessionStorage.getItem('token');
        try {
            const response = await axios.delete(`http://localhost:5000/api/v1/book/deleteBook/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data.book);
            navigate('/home');
            toast.success('Book Deleted Successfully', {
                autoClose: 3000,
                hideProgressBar: true
            });
        } catch (error) {
            console.log('Error while deleting the book', error.message);
            toast.error('Error while deleting the book');
        }
    };

    const fetchSimilarBooks = async () => {
        try {
            console.log("This is the Id", id)
            const response = await axios.get(`http://localhost:5000/api/v1/category/getCategory/${id}/`)
            console.log("similar Books", response.data)
        } catch (error) {
            console.log("Error while fetching the same books", error.message);
        }
    }



    React.useEffect(() => {
        if (!dataFetched) {
            fetchCardData();
        }
        fetchSimilarBooks()
    }, [dataFetched, id]);

    

    return (
        <React.Fragment>
            <Navbar />
            <div>{editToggle && <Edit details={book} />}</div>
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
                        <div className='flex text-gray-800 font-semibold justify-between mb-2 hover:fill-[#4CAF50] hover:text-[#4CAF50]'>
                            <button className='flex items-center' onClick={toggleEdit}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                                Edit Book
                            </button>
                            <button className='flex items-center  text-red-600' onClick={handleDelete}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill='red' />
                                </svg>
                                Delete Book
                            </button>
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
                                            <p className='font-semibold text-gray-700'>
                                                <span className="text-gray-900 font-bold pr-2">
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
                                    <NavLink to={`/book/${id}`}>
                                        Reserve Book
                                    </NavLink>
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
