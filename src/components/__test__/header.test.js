import{ HeaderComponent} from "../Header.component"
import { fireEvent, render,screen } from "@testing-library/react"
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

  const loginBtn = screen?.getByRole('button',{name: 'Login'});

  expect(loginBtn).toBeInTheDocument()
})

it("Should load with cart items with zero items",()=>{
  render(
    <BrowserRouter>
    <Provider store={AppStore}>
      <HeaderComponent/>
    </Provider>
    </BrowserRouter>
  )

  const cartItems = screen?.getByText('Cart(0 items)')

  expect(cartItems)?.toBeInTheDocument()
})

it("Should load with cart items",()=>{
  render(
    <BrowserRouter>
    <Provider store={AppStore}>
      <HeaderComponent/>
    </Provider>
    </BrowserRouter>
  )

  const cartItems = screen?.getByText(/Cart/)

  expect(cartItems)?.toBeInTheDocument()
})

it("Should chane login button to logout on click",()=>{
  render(
    <BrowserRouter>
    <Provider store={AppStore}>
      <HeaderComponent/>
    </Provider>
    </BrowserRouter>
  )

  const loginBtn = screen?.getByRole('button',{name: 'Login'})
 
  fireEvent.click(loginBtn);

  const loginOutBtn = screen?.getByRole('button',{name: 'Logout'})

  expect(loginOutBtn)?.toBeInTheDocument()

})