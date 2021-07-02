
import HeaderOption from './HeaderOption';
import {
    DotsVerticalIcons,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from '@heroicons/react/outline'


function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            {/* Left */}
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={PhotographIcon} title="Images"/>
                <HeaderOption Icon={MapIcon} title="Map"/>
                <HeaderOption Icon={PlayIcon} title="Play"/>
                <HeaderOption Icon={NewspaperIcon} title="News" />
            </div>

            {/* Right */}
            <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
            </div>
            
        </div>
    )
}

export default HeaderOptions
