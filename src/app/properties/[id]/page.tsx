import GoBackToProperties from "@/components/Property/GoBack";
import HeaderImageComponent from "@/components/Property/HeaderImage";
import PropertyInfoComponent from "@/components/Property/Info";
import { prisma } from "@/services/prisma";

export default async function PropertyItem({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const property = await prisma.property.findUnique({
        where: { id }
    })
    if(!property){

        return <h1>there is no detail about this property</h1>
    }
    return <div>
        <HeaderImageComponent imageName={property.images[0]}/>
        <GoBackToProperties />
        <PropertyInfoComponent property={property}/>
    </div>
}