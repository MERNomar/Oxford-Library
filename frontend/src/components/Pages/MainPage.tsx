import BookSVG from '../svg/BookSVG'
export default function MainPage(){
    return(
        <>
        <div className="items-center flex">
        <div className="m-auto flex items-center mt-20">
        <BookSVG/>
        <h1 className="text-6xl text-white ">Oxford Library</h1>
        </div>
        </div>
        <div className='text-white flex'>
            <div className='m-auto text-center text-xl'>
        <p>Find and read all your beloved books in here</p>
        <p>Oxford Books is the Biggest Library for free books in the Internet</p>
        <button className='m-5 bg-[#008cff7a] rounded-xl p-2 hover:bg-[#3f729ca4]'>Start Reading Now !</button>
            </div> 
        </div>
        </>
    )
}