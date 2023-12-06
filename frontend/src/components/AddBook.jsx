import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";
import Book from "./Book";



const AddBook = () => {
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = React.useState(false)
    const [formData, setFormData] = React.useState({
        bookPhoto: "",
        bookName: "",
        publicationYear: "",
        author: "",
        bookDescription: "",
        availability: false,
        category: "",
        availableCopies: 0,
    });
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }

    const handleInputChange = (e) => {

        const { name, value } = e.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <React.Fragment>
            <div className="">
                <Navbar />
                <section>
                    <div className="bg-gray-50 ">
                        <div className="py-8 px-4 mx-auto max-w-[100%] lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                            <div className="flex flex-col justify-center">
                                <h3 className=" font-bold  mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl ">
                                    Library Management                                    <br />
                                    <span className=" font-bold  mb-4 text-4xl  tracking-tight leading-none text-[#4CAF50] md:text-5xl lg:text-4xl ">
                                        <Typewriter
                                            words={["Explore Books, Expand Minds",
                                                "Sharing Knowledge",
                                                "Enriching Lives, One Page at a Time"]}
                                            loop={5}
                                            cursor
                                            cursorStyle="_"
                                            typeSpeed={90}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h3>
                                <p className="mb-6 text-lg font-normal text-gray-700">
                                    Libraries, where each book is a portal to new worlds, a gateway to knowledge, and a catalyst for imagination. Dive into a sea of stories, uncover hidden truths, and embark on journeys of discovery. At our library, every borrowed book sparks a chain reaction, shaping minds, and fostering a thirst for wisdom.

                                </p>
                            </div>
                            <div className="w-full lg:max-w-xl space-y-5 sm:p-8 bg-black rounded-lg shadow-xl dark:bg-gray-100">
                                <div className="text-2xl font-bold tex-gray-900 dark:text-black sm:w-[100%]">
                                    <h2>Add Book</h2>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    method="POST"
                                    className="mt-8 space-y-4"
                                >
                                    <div>
                                        <label
                                            htmlFor="bookPhoto"
                                            className="block mb-1 text-sm font-medium text-medium dark:text-black select-text"
                                        >
                                            Book Photo<span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="bookPhoto"
                                            id="bookPhoto"
                                            value={formData.bookPhoto}
                                            onChange={handleInputChange}
                                            placeholder="URL of the Book"
                                            autoComplete="off"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 select-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="bookName"
                                            className="block mb-1 text-sm font-medium text-medium dark:text-black select-text"
                                        >
                                            Book Name<span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="bookName"
                                            id="bookName"
                                            value={formData.bookName}
                                            onChange={handleInputChange}
                                            placeholder="Name of the book"
                                            autoComplete="off"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 select-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="author"
                                            className="block mb-1 text-sm font-medium text-medium dark:text-black select-text"
                                        >
                                            Author Name<span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="author"
                                            id="author"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            placeholder="Name of the Author"
                                            autoComplete="off"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 select-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="bookDescription"
                                            className="block mb-1 text-sm font-medium text-medium dark:text-black select-text"
                                        >
                                            Book Description<span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            name="bookDescription"
                                            id="bookDescription"
                                            value={formData.bookDescription}
                                            onChange={handleInputChange}
                                            placeholder="Description of book"
                                            autoComplete="off"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 select-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="publicationYear"
                                            className="block mb-1 text-sm font-medium text-medium dark:text-black select-text"
                                        >
                                            Publication Year<span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="publicationYear"
                                            id="publicationYear"
                                            value={formData.publicationYear}
                                            onChange={handleInputChange}
                                            placeholder="Publication Year"
                                            autoComplete="off"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 select-all"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                name="remember"
                                                checked={isChecked}
                                                type="checkbox"
                                                onChange={handleCheckboxChange}
                                                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="font-medium text-black "
                                            >
                                                Accepting all the terms and conditions
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-5 py-3 text-white font-semibold text-center  bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%]  transition duration-500 ease-in-out dark:bg-blue-500"
                                    >
                                        ADD BOOK
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div >
                </section >
                <div className=''>
                    <p className="p-4 uppercase tracking-wide text-sm font-bold text-gray-700">
                        <p className="text-2xl text-gray-900 cursor-pointer">
                            Find Some Books
                        </p>
                    </p>
                    <Book />
                </div>
            </div >
        </React.Fragment >
    );
};

export default AddBook;
