import Image from "next/image"
import './index.scss'

export default function Menu() {
    return (
        <div className="menu">
            <figure className="logo">
                <Image className="logo-img" src="https://img.sj33.cn/uploads/201901/102J1G09-3.png" alt="logo" width={100} height={100} />
            </figure>
        </div>
    )
}
