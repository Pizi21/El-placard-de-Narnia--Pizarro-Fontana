const products = [
    { id: 1, name: "Camisa Roja", category: "ropa", price: 700, size: "M", img: "./media/camisaRoja.jpeg" },
    { id: 2, name: "Camisa Verde", category: "ropa", price: 600, size: "M", img: "./media/aaa.jpeg" },
    { id: 3, name: "Camisa Azul", category: "ropa", price: 500, size: "M", img: "./media/camisaAzul.jpeg" },
    { id: 4, name: "Camisa Cuadrille", category: "ropa", price: 700, size: "M", img: "./media/imagenCamisa1.jpeg" },
  ];

  const getFetch = new Promise ((resolve, reject) =>{
      const condition= true
      if(condition){
          setTimeout(()=>{
              resolve(products)
          },2000)
      }else {
          setTimeout(()=>{
              reject ('404 not found')
          }, 2000)
      }
  })

  export default getFetch