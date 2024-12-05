import axios from "axios"
import Swal from "sweetalert2";
export const update = async(id,name,number,gmail)=>{
    try {
        const response = await axios.put(`https://bitbang-backend.onrender.com/api/contacts/${id}`, {
            name,
            number,
            gmail
        });
        if(response.data.contact)
        Swal.fire({
            title:response.data.msg,
            icon: "success"
          });
    } catch (error) {
        console.log(error)
    }
}