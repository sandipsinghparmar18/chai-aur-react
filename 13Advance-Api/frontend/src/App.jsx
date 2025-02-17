import { useEffect, useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products,setProducts]=useState([]);
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const [search,setSearch]=useState("");

  
  // useEffect(()=>{
  //   const controller=new AbortController() // step 1: create an abortController 
  //   ;(async()=>{  //use before semocoln for effi
  //     try {
  //       setLoading(true)
  //       setError(false);
  //       const response=await axios.get('/api/products?search=' + search,{
  //         signal:controller.signal //step 2
  //       })
  //       console.log(response.data);
  //       setProducts(response.data)
  //       setLoading(false)
  //     } catch (error) {
  //       if(axios.isCancel(error)){ //step-3
  //         console.log('Request cancled',error.message)
  //         return 
  //       }
  //       setError(true)
  //       setLoading(false)
  //     }
  //   })()
  //   //clean up
  //   return ()=>{
  //     controller.abort()
  //   }
  // },[search])


  //use debouncing
  useEffect(()=>{
    const controller=new AbortController() // step 1: create an abortController 
    // Set a timeout for debouncing
    const timer=setTimeout(async()=>{
      try {
        //if(!search) return; //if search is empty ,do nothing
        setLoading(true)
        setError(false);
        const response=await axios.get('/api/products?search=' + search,{
          signal:controller.signal //step 2:pass the abort signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){ //step-3
          console.log('Request cancled',error.message)
          return 
        }
        setError(true)
        setLoading(false)
      }
    },500);
    //cleanup function
    return ()=>{
      clearTimeout(timer);
      controller.abort();
    };
  },[search])





  //const [products,error,loading]=customReactQuery('/api/products')

  // if(error){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  // const [search,setSearch]=useState("");
  // const {products,loading,error}=useDebouncedSearch(search);

  return (
    <>
      <h1>Chai aur Api in react</h1>
      <input type='text' placeholder='search'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}

      />

      {loading && (<h1>Loading...</h1>)}
      {error && (<h1>Something went wrong</h1>)}

      <h2>Number of Products: {products.length}</h2>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </>
  )
}

export default App

//professional code
// const useDebouncedSearch = (search, delay = 500) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const fetchProducts = useCallback(async (query, controller) => {
//     // if (!query) {
//     //   setProducts([]); // Clear results if the query is empty
//     //   return;
//     // }
//     //because we want all product if user not search about anything

//     try {
//       setLoading(true);
//       setError(false);

//       const response = await axios.get(`/api/products?search=${query}`, {
//         signal: controller.signal, // Attach abort signal
//       });

//       setProducts(response.data);
//     } catch (err) {
//       if (axios.isCancel(err)) {
//         console.log("Request canceled:", err.message);
//         return;
//       }
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const controller = new AbortController();
//     const timer = setTimeout(() => {
//       fetchProducts(search, controller);
//     }, delay);

//     return () => {
//       clearTimeout(timer); // Clear timeout on cleanup
//       controller.abort(); // Cancel previous request
//     };
//   }, [search, fetchProducts, delay]);

//   return { products, loading, error };
// };


// const customReactQuery=(urlPath)=>{
//   const [products,setProducts]=useState([]);
//   const [error,setError]=useState(false);
//   const [loading,setLoading]=useState(false);

//   useEffect(()=>{
//     ;(async()=>{
//       try {
//         setLoading(true)
//         setError(false);
//         const response=await axios.get(urlPath)
//         console.log(response.data);
//         setProducts(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
//     })()
//   },[])

//   return [products,error,loading]
// }