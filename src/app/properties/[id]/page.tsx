
export default async function PropertyItem({params}:{
    params:Promise<{id:string}>
}) {
    const currentId = (await params).id; 
    
    return <div>
        property id {currentId}
       </div>
}