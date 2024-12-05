import axios from "axios"
import Swal from "sweetalert2";
export const update = async(id,nameProduct)=>{
    try {
        const response = await axios.put(`https://back-end-optimal-technology.onrender.com/api/products/${id}`, {
            nameProduct
        });
        Swal.fire({
            title:response.data.msg,
            icon: "success"
          });
    } catch (error) {
        console.log(error)
    }
}