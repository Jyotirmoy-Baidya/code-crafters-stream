import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { useParams } from 'react-router-dom'
import { jyoti } from '../agodaJs/room_rtc';
const participants = [
    { name: 'John Doe1' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' }
]

const Room = () => {
    const params = useParams();
    console.log(params.roomid);
    jyoti(params.roomid);
    return (
        <div className='text-white bg-black h-screen flex flex-col'>
            <div className='h-[13%]'></div>
            <div className='h-[87%] grid grid-cols-12'>
                <div className='col-span-2 max-h-full border-r-2 overflow-scroll design-scrollbar bg-primary-black pe-0'>
                    <h1 className='sticky top-0 bg-purple-950 flex justify-between items-center text-gray-300 py-2 px-4'>
                        Participants
                        <div className='bg-gray-900 py-1 px-3 rounded-md'>{participants.length}</div>
                    </h1>
                    {/* participants list  */}
                    <div className='bg-primary-black py-1 flex flex-col overflow-scroll design-scrollbar'>
                        {
                            participants.map((ele, i) => (
                                <div key={i} className='flex items-center gap-3 p-3'>
                                    <div className='h-2 w-2 rounded-full bg-primary'></div>
                                    <div className='tracking-wider text-sm'>{ele.name}</div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {/* video div  */}
                <div className='relative col-span-7 p-4 pt-0 grid grid-cols-6 gap-3 bg-purple-400 overflow-scroll design-scrollbar'>
                    {/* action buttons  */}
                    <div className='flex gap-3 bg-primary-black absolute left-1/2 bottom-10 -translate-x-1/2'>
                        <div className='border bg-primary'>Mic</div>
                        <div className='border bg-primary'>Video</div>
                        <div className='border bg-primary'>Stream</div>

                        <div className='border bg-red-600'>Cut</div>
                    </div>

                    {/* stream div box  */}
                    <div className='w-full h-96 bg-primary-black col-span-6'></div>

                    {/* video divs */}
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                    <div className='h-28 w-28 rounded-full bg-primary-black flex justify-center items-center'>
                        <CgProfile className='text-5xl' />
                    </div>
                </div>

                <div className='col-span-3 bg-primary'>Jyoti</div>
            </div>
        </div>
    )
}

export default Room