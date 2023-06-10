import { createContext, useState, useEffect, useContext } from "react";
import FamilyMember from "../entities/familyMember";
import Family from "../entities/family";

export const FamilyContext = createContext({});

export const useFamily = () => useContext(FamilyContext);

export function FamilyContextProvider({ children }) {
    const [family, setFamily] = useState({})

    const createFamily = (nameFamily) => {
        const familyModel = new Family(nameFamily);
        console.log(familyModel)
        setFamily(familyModel);
    }

    const AddFamilyMember = (id, nameMember) => {
        family.AddFamilyMember(id, nameMember)
    }


    useEffect(() => {
    }, []);

    return (
        <FamilyContext.Provider
            value={{
                family,
                createFamily,
                AddFamilyMember
            }}
        >
            {children}
        </FamilyContext.Provider>
    );
}
