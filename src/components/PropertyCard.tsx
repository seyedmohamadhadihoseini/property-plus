// import { PropertyType } from "@/lib/types/properties";
import { property } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaBath, FaBed, FaMapMarker, FaMoneyBill, FaRulerCombined } from "react-icons/fa";

export default function PropertyCard({ property }: { property: property }) {
    const getRateDisplay = () => {
        let result = "";
        if (property.rates.monthly) {
            result = property.rates.monthly + "/mo";
        } else if (property.rates.weekly) {
            result = property.rates.weekly + "/wk";
        }
        else if (property.rates.nightly) {
            result = property.rates.monthly + "/night";
        }
        return result;
    }
    return <div className="rounded-xl shadow-md relative">
        <Image
            src={`/images/properties/${property.images[1]}`}
            alt={property.name}
            width={0}
            height={0}
            sizes="100vh"
            className='w-full h-auto rounded-t-xl'
        />
        <div className="p-4">
            <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">${property.type}</div>
                <h3 className="text-xl font-bold">${property.name}</h3>
            </div>
            <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
            >
                ${getRateDisplay()}
            </h3>

            <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                    <FaBed className="inline mr-2" />{property.beds}
                    <span className="md:hidden lg:inline"> Beds</span>
                </p>
                <p>
                    <FaBath className="inline mr-2" /> {property.baths}
                    <span className="md:hidden lg:inline"> Baths</span>
                </p>
                <p>
                    <FaRulerCombined className="inline mr-2" /> {property.baths}
                    {property.square_feet} <span className="md:hidden lg:inline"> sqft</span>
                </p>
            </div>

            <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
            >
                {property.rates.monthly && <p><FaMoneyBill className="inline mr-2" /> Monthly</p>}
                {property.rates.weekly && <p><FaMoneyBill className="inline mr-2" /> Weekly</p>}
                {property.rates.nightly && <p><FaMoneyBill className="inline mr-2" /> Nightly</p>}

            </div>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                    <FaMapMarker className="text-red-500 mt-1" />
                    <span className="text-orange-700"> {property.location.city} {property.location.state} </span>
                </div>
                <Link
                    href={`/properties/${property.id}`}
                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Details
                </Link>
            </div>
        </div>
    </div>
}