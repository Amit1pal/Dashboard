import { createContext } from "react";

export const ProductList = createContext({});

const ProductListProvider= ({children})=>{
     return 
     <ProductList.Provider value={[]}>
        {children}
     </ProductList.Provider>
}

export default ProductListProvider

