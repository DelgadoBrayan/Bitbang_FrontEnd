import axios from "axios";
import Swal from "sweetalert2";


export const drop = async(id)=>{
    try {
      await Swal.fire({
            title: "Seguro que quieres eliminar el producto",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`
          }).then(async(result) => {
            
            if (result.isConfirmed) {
                const response = await axios.delete(`https://bitbang-backend.onrender.com/api/contacts/${id}`)
            await  Swal.fire(response.data.msg, "", "success");
            } else if (result.isDenied) {
            await  Swal.fire("Changes are not saved", "", "info");
            }
          });
    } catch (error) {
        console.log(error)
    }
}