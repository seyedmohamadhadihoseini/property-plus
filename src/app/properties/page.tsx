import PropertyCard from "@/components/PropertyCard";
import Connect from "@/config/database";
import { prisma } from "@/services/prisma";
// import propetiesData from "@mock/properties.json";
export default async function PropertiesApp() {
    await new Promise((res) => setTimeout(res, 1000));
    const propetiesData = await prisma.property.findMany();
    const displayProperties = propetiesData.map(p => <PropertyCard key={p.id} property={p} />)
    return <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayProperties}
            </div></div>
    </section>

}