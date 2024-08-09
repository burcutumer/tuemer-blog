import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBlog } from '@fortawesome/free-solid-svg-icons'


function HeaderComponent() {
    return (
        <>
            <div className='flex justify-between w-[100%] h-10'>
                <div className="flex place-items-center justify-evenly w-5/6 pr-10">
                    <div className="flex place-items-center pr-40">
                        <FontAwesomeIcon icon={faBlog} color='#3584c0' size='lg'/>
                        <span className="pl-2 font-bold text-sky-600 text-xl">Tuemer Blog</span>
                    </div>
                    <div className="flex w-[60%] pr-60">
                        <input type="text" placeholder="baslik entry yazar" className="placeholder:italic placeholder:text-slate-400 border rounded-l-md py-2 pl-9 pr-3 border-sky-600 focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 sm:text-sm w-full" />
                        <div className='flex place-items-center justify-center bg-sky-600 w-9 rounded-r-md'>
                            <FontAwesomeIcon icon={faSearch} color='white' />
                        </div>
                    </div>
                </div>
                <div className="flex w-1/6 place-items-center justify-evenly">
                    <div className="flex">
                        <span>giris</span>
                    </div>
                    <div className="flex">
                        <span>kayit ol</span>
                    </div>
                </div>
            </div>

        </>
    );
}
export default HeaderComponent;
