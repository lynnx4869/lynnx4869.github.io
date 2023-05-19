import Image from 'next/image'
import calendar from '../../../../public/calendar.svg'
import time from '../../../../public/time.svg'
import cover from '../../../../public/cover.jpg'
import './index.scss'

export default function Article() {
    return (
        <div className='article'>
            <div className='image'>
                <Image
                    src={cover}
                    alt='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className='content'>
                <div className='tags'>
                    <span className='tag'>Example Category</span>
                    <span className='tag'>Example Category</span>
                </div>
                <div className='title'>Hello World</div>
                <div className='subtitle'>Welcome to Hugo Theme Stack</div>
                <div className='other'>
                    <Image
                        src={calendar}
                        alt='calendar'
                        width={20}
                        height={20}
                    />
                    <span className='datetime'>2023/12/12</span>
                    <Image src={time} alt='time' width={20} height={20} />
                    <span className='readtime'>1 minute read</span>
                </div>
            </div>
        </div>
    )
}
