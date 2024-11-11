import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBlog, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useTheContext } from './TheContext';
import { useState } from 'react';


function HeaderComponent() {

   const { author, signOut } = useTheContext();
   const navigate = useNavigate();
   const [showHamburger, setShowHamburger] = useState(false);

   function logout() {
      signOut();
   }

   function toggleHamburger() {
      setShowHamburger(!showHamburger);
   }

   return (
      <>
         <div>

         </div>
         <div className='flex justify-between items-center w-full h-full pr-10'>

            <div className="flex w-5/6 pr-10 h-full">
               <div className="flex place-items-start justify-start h-full pl-10 pr-40 whitespace-nowrap">
                  <FontAwesomeIcon icon={faBlog} color='#3584c0' size='lg' />
                  <span
                  className="pl-2 font-bold text-sky-600 text-xl"
                  onClick={() => navigate('/')}>
                     Tuemer Blog</span>
               </div>
               <div className="hidden lg:flex my-auto h-10 w-[60%] pr-60">
                  <input type="text" placeholder="baslik entry yazar" className="placeholder:italic placeholder:text-slate-400 border rounded-l-md py-2 pl-9 pr-3 border-sky-600 focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 sm:text-sm w-full" />
                  <div className='flex place-items-center justify-center bg-sky-600 w-9 rounded-r-md'>
                     <FontAwesomeIcon icon={faSearch} color='white' />
                  </div>
               </div>
            </div>
            <div className="md:hidden w-full  h-full flex flex-col place-items-end">
               <button
                  className='text-sky-600  flex'
                  onClick={() => toggleHamburger()}>
                  <FontAwesomeIcon icon={faBars} size='2xl' />
               </button>
               {showHamburger && <div className='flex flex-col bg-sky-600 text-white p-2 justify-between  whitespace-nowrap rounded-md'>
                  <span className='border-b pb-1'>who are you</span>
                  <span
                     className='border-b py-1'
                     onClick={() => navigate('/login')}>
                     login</span>
                  <span
                     className='pt-1'
                     onClick={() => logout()}>
                     logout</span>
               </div>}

            </div>
            <div className='md:block hidden'>
               {author ?
                  <div>
                     <button className="flex w-1/6 place-items-center justify-evenly text-sky-900"
                     onClick={() => toggleHamburger()}>
                        {author.email}
                     </button>
                     {showHamburger && <div className='flex flex-col bg-sky-600 rounded-md'>
                        <span
                           className='flex justify-center border border-slate-400 rounded-t-md'
                           onClick={() => logout()}>
                           Logout
                        </span>
                        <span
                           className='flex justify-center border border-slate-400 rounded-b-md'>
                           Profile
                        </span>
                     </div>}
                  </div>
                  :
                  <div className="flex gap-2 place-items-center justify-evenly">
                     <button onClick={() => navigate('/login')} className='cursor: pointer border border-sky-600 rounded-md p-1 w-20'>
                        giris
                     </button>
                     <button onClick={() => navigate('/register')} className='cursor: pointer border border-sky-600 rounded-md p-1 w-20'>
                        kayit ol
                     </button>
                  </div>}
            </div>

         </div>

      </>
   );
}

export default HeaderComponent;
