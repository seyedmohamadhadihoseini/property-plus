import { property } from "@prisma/client";
import InfoDatailComponent from "./Detail";
import SideInfoComponent from "./Side";


export default function PropertyInfoComponent({ property }: { property: property }) {

    return <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-3  w-full gap-6">

                <InfoDatailComponent property={property} />
                <SideInfoComponent />
            </div>
        </div>
    </section>
}