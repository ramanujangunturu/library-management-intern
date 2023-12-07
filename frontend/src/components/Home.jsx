import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import { NavLink } from 'react-router-dom';
import FilteredBooks from './FilteredBooks';
const Home = () => {
    const [filteredBooks, setFilteredBooks] = React.useState([]);

    return (
        <React.Fragment>
            <Navbar setFilteredBooks={setFilteredBooks} />
            <FilteredBooks filteredBooks={filteredBooks} />
            <div className="flex justify-center m-4">
                <NavLink to="#" className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <div className='flex items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" fill='#fff' />
                        </svg>
                        <p>
                            Previous
                        </p>
                    </div>
                </NavLink>

                <NavLink to="#" className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
                    <div className='flex items-center '>
                        <p>
                            Next
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" fill='#fff' />
                        </svg>
                    </div>
                </NavLink>
            </div>

        </React.Fragment>

    );
};

export default Home;
