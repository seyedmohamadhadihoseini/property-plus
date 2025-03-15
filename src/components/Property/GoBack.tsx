import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function GoBackToProperties() {
    return <section>
        <div className="container m-auto py-6 px-6">
            <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
            >
                <FaArrowLeft className="fas mr-2"/> Back to Properties
            </Link>
        </div>
    </section>
}