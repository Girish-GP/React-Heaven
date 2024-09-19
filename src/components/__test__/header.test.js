import{ HeaderComponent} from "../Header.component"
import { render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
it("should load header component with login button",()=>{
  render(
    <BrowserRouter>
    <Provider store={AppStore}>
     <HeaderComponent/>
    </Provider>
    </BrowserRouter>
    
  );

  const loginBtn = screen?.getByRole('button');

  expect(loginBtn).toBeInTheDocument()
})