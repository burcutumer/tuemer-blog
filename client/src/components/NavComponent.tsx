import { Link } from "react-router-dom";

function NavComponent() {

    return (
        <>
            <div className="flex h-10 border-b border-slate-400">
                <div className='hidden lg:flex items-center justify-evenly w-full'>
                    <Link to="/">gündem</Link>
                    <Link to="/">debe</Link>
                    <Link to="/">sorunsallar</Link>
                    <Link to="/">#spor</Link>
                    <Link to="/">#iliskiler</Link>
                    <Link to="/">#siyaset</Link>
                    <Link to="/">...</Link>
                    <Link to="/">pena</Link>
                    <Link to="/">eksi seyler</Link>
                </div>
            </div>
        </>
    )
}
export default NavComponent;
