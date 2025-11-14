

export default function Task2() {

    {/*const model={name:"Madhuri",lastname:"Somisetty",middlename:"madhu"};*/}
     const model=["Madhuri","Somisetty","Madhu"];

    const cities=[{city1:"hyd",city2:"chennai",city3:"bnglr"},
                   {city4:"vizag",city5:"nlr",city6:"onglr"}]
  return (
    <div>
        {/*<h3>Model Names:</h3>
        model:{model.name}<br></br>
        model:{model.lastname}<br></br>
        model:{model.middlename}*/}
    <h3>Number of citites</h3>
       {cities.map((eachcity)=>(
        <div> {eachcity.city1} <br></br>
               
        <br></br>
        </div>
       )
       )
       
       }
    </div>
  )
}
{/*note:line 5 y we should not take "[]" element
    line 17 we are not including single statement */}
