import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = process.env.REACT_APP_RANDOM_URL

function Random () {
    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

    return (
        <h2>this is the Random page</h2>
    )
}

export default Random