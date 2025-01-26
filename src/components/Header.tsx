import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="mb-10">
            <p className="mr-20 text-white text-8xl text-right font-Jaro">HTL Dornbirn 5bWI</p>
            <Link
                to="/homework"
                className="cursor-pointer ml-14 mb-14 p-5 text-white border-white border-2 p-3"
            >
                Homework page
            </Link>
        </div>
    );
};

export default Header;
