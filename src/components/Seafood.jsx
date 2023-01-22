import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = process.env.REACT_APP_BASE_URL + "Seafood"

function Seafood () {
    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

    return (
        <h2>this is the Seafood page</h2>
    )
}

export default Seafood