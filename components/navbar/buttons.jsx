import Link from "next/link";
import Image from "next/image";
import Tooltip from "react-simple-tooltip"
export default function buttons({ tooltip, src, link }) {
    const content = (
        <a href={link.startsWith('/') ? undefined : link}>
            <Tooltip content={tooltip} placement='bottom'>
                <Image src={src} alt={tooltip} width={20} height={20} />
            </Tooltip>
        </a>
    )
    return (
        <>
            <li className="mr-6">
                {link.startsWith('/') ? <Link href={link} passHref>{content}</Link> : content}
            </li>
        </>
    )

};
