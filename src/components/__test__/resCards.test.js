import { screen,render } from "@testing-library/react";
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"
import { BrowserRouter } from "react-router-dom"
import {RestaurantCards,RestaurantCardsEnhanced} from "../RestuarantCards"
import MOCK_DATA from "../../mocks/resCardData.json"
import "@testing-library/jest-dom";
it("Should render restuarant cards with props data",()=>{

    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <RestaurantCards resData={MOCK_DATA}/>
        </Provider>
        </BrowserRouter>
        
      );

    const checkRestuarant = screen?.getByText('ZAZA Mughal Biryani')

    expect(checkRestuarant)?.toBeInTheDocument()

})

it("Should render Restuarant Card component with promoted label",()=>{
  const OpenedRestuarantCards = RestaurantCardsEnhanced(RestaurantCards)
  render(
     <BrowserRouter>
    <Provider store={AppStore}>
    <OpenedRestuarantCards resData={MOCK_DATA}/>
    </Provider>
    </BrowserRouter>
  )

  const openLabel = screen?.getByText('Open');

  expect(openLabel).toBeInTheDocument()
})