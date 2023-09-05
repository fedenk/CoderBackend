class ProductManager{

    constructor(){
        this.products = [];
    }

    getProducts = () =>{
        return this.products;
    }

    addProducts = (title, description, price,thumbnail,code,stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if ( this.products.length === 0 ){
            product.id = 1;
        }else{
            product.id = this.products[this.products.length - 1].id + 1;
        }
        if( !title || !description || !price || !thumbnail || !code || !stock ){
            console.log("Some fields are missing");
        }else{
            const productCode = this.products.find ( product => product.code === code);

        if(!productCode){
            this.products.push(product);
        }else{
            console.log(`The code ${code} already exists`)
        }
        }
    }

    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex ( product => product.id === idProduct);

        if(productIndex === -1){
            console.log("Not Found");
        }else{
            console.log(this.products[productIndex])
        }
    }
}

const productInstance = new ProductManager ();

productInstance.addProducts('Producto Prueba','Este es un producto de Prueba',200,'Sin Imágen','abc123',25)
productInstance.addProducts('Producto Prueba','Este es un producto de Prueba',200,'Sin Imágen','abc123',25)
productInstance.addProducts('Producto Prueba','Este es un producto de Prueba',200,'Sin Imágen','abc124',25)
productInstance.addProducts('Producto Prueba','Este es un producto de Prueba',200,'Sin Imágen','abc125',25)

productInstance.getProductById(5);

console.log(productInstance.getProducts());