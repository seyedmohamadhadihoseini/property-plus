import Link from "next/link";

export default function InfoBoxItem({ title, children, bgColor, txtColor,buttonInfo }:
    { title: string, children: string, bgColor: string, txtColor: string ,buttonInfo:{link:string,bgColor:string,content:string}}) {

    return <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className={`${txtColor} mt-2 mb-4`}>
            {children}
        </p>
        <Link
            href={buttonInfo.link}
            className={`inline-block ${buttonInfo.bgColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
        >
            {buttonInfo.content}
        </Link>
    </div>
}