import {useEffect,useState} from "react";
import axios from "axios";


const AllocateAsset=()=>{

const [assets,setAssets]=useState([]);
const [employees,setEmployees]=useState([]);

const [asset,setAsset]=useState("");
const [employee,setEmployee]=useState("");


useEffect(()=>{

const token=localStorage.getItem("token");


axios.get(
"http://127.0.0.1:8000/assets/",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)
.then(res=>setAssets(res.data));


axios.get(
"http://127.0.0.1:8000/users/",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)
.then(res=>{

setEmployees(
res.data.filter(
u=>u.role==="Employee"
)
)

});


},[]);



const allocate=async()=>{

const token=localStorage.getItem("token");


await axios.post(

"http://127.0.0.1:8000/assets/allocate",

null,

{
params:{
asset_id:asset,
employee_id:employee
},

headers:{
Authorization:`Bearer ${token}`
}

}

);


alert("Allocated");


};



return(

<div>

<h1>
Allocate Asset
</h1>


<select
onChange={(e)=>setAsset(e.target.value)}
>

<option>
Select Asset
</option>


{
assets.map(a=>(

<option
key={a.id}
value={a.id}
>

{a.name}

</option>

))

}

</select>



<select
onChange={(e)=>setEmployee(e.target.value)}
>

<option>
Select Employee
</option>


{
employees.map(e=>(

<option
key={e.id}
value={e.id}
>

{e.name}

</option>

))

}

</select>


<button onClick={allocate}>
Allocate
</button>


</div>

)

}


export default AllocateAsset;