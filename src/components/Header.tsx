import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="">
            <p className="mr-20 text-white text-8xl text-right font-Jaro">HTL Dornbirn 5bWI</p>
            <div className="w-full mt-6 flex flex-wrap justify-center">
                <Link
                    to="/homework"
                    className="hover:bg-white hover:text-black cursor-pointer ml-14 mb-14 p-5 text-white border-white rounded border-2 p-3">
                    Homework page
                </Link>
                <Link
                    to="/"
                    className="hover:bg-white hover:text-black cursor-pointer ml-14 mb-14 p-5 text-white border-white border-2 rounded p-3">
                    Cards
                </Link>
            </div>
        </div>
    );
};

export default Header;
