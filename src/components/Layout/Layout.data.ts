import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

export const routes:{[key:string]:()=>JSX.Element}=
{
    "Home": Home,
    "About": About
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
routes["Home"]; // Home ==> Component

    
