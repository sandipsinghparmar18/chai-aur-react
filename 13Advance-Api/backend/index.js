import express from 'express'

const app=express();

app.get('/api/products',(req,res)=>{
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 59.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "Smartphone",
            price: 699.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "Gaming Laptop",
            price: 1299.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            name: "Bluetooth Speaker",
            price: 39.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 5,
            name: "Mechanical Keyboard",
            price: 89.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 6,
            name: "Smart Watch",
            price: 199.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 7,
            name: "4K Monitor",
            price: 349.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 8,
            name: "External Hard Drive",
            price: 79.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 9,
            name: "Wireless Mouse",
            price: 24.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 10,
            name: "VR Headset",
            price: 299.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 11,
            name: "Action Camera",
            price: 149.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 12,
            name: "Portable Charger",
            price: 19.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 13,
            name: "Drone",
            price: 499.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 14,
            name: "Noise Cancelling Earbuds",
            price: 129.99,
            imageUrl: "https://via.placeholder.com/150",
          },
          {
            id: 15,
            name: "Smart TV",
            price: 899.99,
            imageUrl: "https://via.placeholder.com/150",
          }
    ];

    if(req.query.search){
        const searchQuery=req.query.search.toLowerCase();
        const filterProducts=products.filter(product=>
            product.name.toLowerCase().includes(searchQuery))
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products)
    },3000);
})

const port=process.env.PORT || 3000

app.listen(port,(req,res)=>{
    console.log(`app is listen on Port : `,port )
})