

export default function NavBar(){
    return(
        <div className="flex justify-between items-center bg-[#17191f] h-[70px] text-white">
            <div className="flex items-center ml-5 cursor-pointer">
        <h2 className="text-3xl float-left">Oxford Library</h2>
        </div>
        <ul className="">
            <li className="nav-li">All Books</li>
            <li className="nav-li">Science fiction</li>
            <li className="nav-li">philosophy</li>
        </ul>
        </div>
    )
}