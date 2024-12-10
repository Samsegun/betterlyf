import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
    return (
        <Link href='/' className='flex items-center gap-3'>
            <Image
                className='rounded-full w-12'
                src={logo}
                height='60'
                width='60'
                alt='better life'
            />

            <span className='text-xl font-medium text-primary-blue'>
                BetterLyf
            </span>
        </Link>
    );
}

export default Logo;
