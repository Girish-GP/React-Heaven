import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import RestuarantViewDetails from "../Restuarant.view.details.component"
import MOCK_RES_DETAILS from "../../mocks/mockResViewDetails.json"
import "@testing-library/jest-dom"
import { act } from "react"
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"
import {HeaderComponent} from "../Header.component"
import CartComponent from "../Cart.component"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_RES_DETAILS)
        }
    })
})

it("Should load restuarant menu component",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
               <Provider store={AppStore}>
               <HeaderComponent/>
                 <RestuarantViewDetails/>
                 <CartComponent/>
               </Provider>
            </BrowserRouter>
        );
        
    })

    const heading = screen?.getByText('KFC');

    expect(heading).toBeInTheDocument()


    const accordianHeader = screen?.getByText("Rice Bowlz")

    fireEvent.click(accordianHeader);

    const accordianPanel = screen?.getByText("HC Rice Bowlz")

    expect(accordianPanel).toBeInTheDocument()

    const foodItems = screen?.getAllByTestId("foodItem")

    expect(foodItems?.length).toBe(5)

    //check for add button
    const addBtn = screen?.getAllByTestId("add-btn");

    expect(addBtn.length).toBe(5)

    //Before clicking add button header should have Cart(0 items)

    const headercartItemsTextBefore = screen?.getByText("Cart(0 items)")

    expect(headercartItemsTextBefore).toBeInTheDocument()

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

   //After clicking Header twice it should have Cart(2 items)

   const headercartItemsText = screen?.getByText("Cart(2 items)")

   expect(headercartItemsText).toBeInTheDocument()

   //Check for 2 cart items in the cart component

   const cartItems = screen?.getAllByTestId("cartItem");

   expect(cartItems?.length).toBe(2)
})