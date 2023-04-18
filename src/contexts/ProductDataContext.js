import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const ProductDataContext = createContext();
const SetProductDataContext = createContext();

export const useProductData = () => useContext(ProductDataContext);
export const useSetProductData = () => useContext(SetProductDataContext);

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    pageProfile: { results: [] },
    popularProducts: { results: [] },
  });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(
                "/products/?ordering=-votes_count"
            );
            setProductData(prevState => ({
                ...prevState,
                popularProducts: data,
            }))
        } catch(err) {
            // console.log(err)
        }
    }
    handleMount();
}, [currentUser])

return (
    <ProductDataContext.Provider value={productData}>
      <SetProductDataContext.Provider value={setProductData}>
        {children}
      </SetProductDataContext.Provider>
    </ProductDataContext.Provider>
  );
};