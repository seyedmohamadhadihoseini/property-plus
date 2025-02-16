import InfoBoxItem from "./item"

export default function InfoBoxesPart() {

    return <section>
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <InfoBoxItem title="For Renters" bgColor="bg-gray-100" txtColor="" buttonInfo={{link:"/properties",bgColor:"bg-black",content:"Browse Properties"}}>
                    Find your dream rental property. Bookmark properties and contact
                    owners.
                </InfoBoxItem>
                <InfoBoxItem title="For Property Owners" bgColor="bg-blue-100" txtColor="" buttonInfo={{link:"/properties/add",bgColor:"bg-blue-500",content:"Add Property"}}>
                List your properties and reach potential tenants. Rent as an
                airbnb or long term.
                </InfoBoxItem>
                
                {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">For Renters</h2>
                    <p className="mt-2 mb-4">
                    </p>
                    <a
                        href="/properties.html"
                        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                    >
                        Browse Properties
                    </a>
                </div> */}
               
            </div>
        </div>
    </section>
}