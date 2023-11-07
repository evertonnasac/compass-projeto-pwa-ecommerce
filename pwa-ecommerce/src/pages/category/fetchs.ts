import  api from "../../api/api";

//Consulta de categoria recebida no parametro e retorna a listagem de produto e seus filtros
//data[0] : Produtos
//data[1]: Lista de filtros
export const  getProductsByCategory = async (name : string) => {

    let products = null
    let filters = null
    let err = null

    try {
        const resp = await api.get("/products/category/" + name.toLowerCase());
        products = resp.data[0];
        filters = resp.data[1];
        err = false;
    } 
    catch (erro) {
        err = erro
    }
    
    return {products, filters, err}
        
}