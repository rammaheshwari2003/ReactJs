import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
        <h1>This is About Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus, maxime numquam quas deserunt iure, sed, repudiandae itaque accusamus molestias ea cumque pariatur quasi dolores animi quo minima aperiam. Accusantium ad enim doloribus a explicabo obcaecati, asperiores ab unde nostrum quaerat vitae atque rem accusamus at odio? Quis, delectus hic?
        <br /> <br />
        <table width="100%" border="2">
            <tr>
                <td>
                    <Link to="aboutcompany">About Company</Link>
                    <br /> <br />
                    <Link to="aboutproduct">About Product</Link>
                    <br /> <br />
                    <Link to="aboutservice">About Services</Link>
                </td>
                <td>
                    <Outlet/>
                </td>
            </tr>
        </table>
        </>
    )
}
export default About;