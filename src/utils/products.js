export const products = [
  {id: 1, title:'Botines', category: 'futbol', description:'Botines Nike', price: 38599, pictureUrl: 'https://sporting.vtexassets.com/arquivos/ids/585831/4DJ2878-484-1.jpg?v=637946340491600000', stock:'number'},
  {id: 2, title:'Zapatillas', category: 'basktball', description:'Zapatillas Jordan', price: 54000, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_759368-MLA51187479151_082022-W.jpg  ', stock:'number'},
  {id: 3, title:'Pelota', category: 'futbol', description:'Pelota de fútbol Qatar2022', price: 44999, pictureUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/28530d07245942fc944dae680084fb30_9366/Pelota_Al_Rihla_Pro_Blanco_H57783_01_standard.jpg', stock:'number'},
  {id: 4, title:'Pelota', category: 'basketball', description:'Pelota de basketball Wilson', price: 8999, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_786479-MLA48643304793_122021-O.webp', stock:'number'}
]

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};