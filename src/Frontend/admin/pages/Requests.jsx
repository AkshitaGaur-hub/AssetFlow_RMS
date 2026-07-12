import {useEffect,useState} from "react";
import axios from "axios";


const Requests =()=>{

const [requests,setRequests]=useState([]);


useEffect(()=>{

const token=localStorage.getItem("token");


axios.get(
"http://127.0.0.1:8000/requests/pending",
{
headers:{
Authorization:`Bearer ${token}`
}
}
)
.then(res=>{
setRequests(res.data);
})


},[]);



const approve=(id)=>{

const token=localStorage.getItem("token");


axios.put(
`http://127.0.0.1:8000/requests/approve/${id}`,
{},
{
headers:{
Authorization:`Bearer ${token}`
}
}
)
.then(()=>{
alert("Approved");

setRequests(
requests.filter(
(r)=>r.id!==id
)
)

})

}



return(

<div>

<h1>
Pending Asset Requests
</h1>


{
requests.map((req)=>(

<div key={req.id}>

<p>
Request ID: {req.id}
</p>

<p>
Employee: {req.employee_id}
</p>

<p>
Asset: {req.asset_id}
</p>


<button
onClick={()=>approve(req.id)}
>
Approve
</button>


</div>

))

}


</div>

)

}


export default Requests;