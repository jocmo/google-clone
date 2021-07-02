import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar';
import HeaderOptions from '../components/HeaderOptions';

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        
        if(!term) return;
        router.push(`/search?term=${term}`);
      }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={()=> router.push(`/`)}
            alt="logo"/>

            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full p-3 shadow-lg max-w-3xl">
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" defaultValue={router.query.term}/>
            <XIcon className="h-7 sm:mr-3 text-gray-500 transition duration-100 cursor-pointer hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
            />

            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
            <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500"/>
            <button className="hidden" type="submit" onClick={search}>Search</button>
            </form>
            <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I6GBqLmhtdOz2Q6MJwFtKp9ktnYFUpUiy2n8o42Tg=s83-c-mo" className="ml-auto"/>
            </div>
           <HeaderOptions/>
        </header>
    )
}

export default Header
