import {render, screen ,fireEvent} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"
import { BodyComponent} from "../Body.component"
import "@testing-library/jest-dom"
import MOCK_DATA from "../../mocks/mockResList.json"
import { act } from "react"
//Mock fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search res list for pizza input", async () => {
    // Using act to wrap the render
    await act(async () => {
      render(
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      );
    });
  
    // Wait for the search button to appear in the DOM
    const searchBtn = await screen.findByRole("button", { name: "Search" });

    //getByTestId
    const searchInput = screen?.getByTestId('search-input')
    
    // Assertion to check if the search button is in the document
    expect(searchBtn).toBeInTheDocument();

    // Assertion to check if the search input is in the document
    expect(searchInput).toBeInTheDocument();

    //ResCards before search
    const resCard = screen?.getAllByTestId('resCard')
    expect(resCard?.length).toBe(20)

     //set burger inside input box
     fireEvent.change(searchInput,{target:{value:"pizza"}})

    //fire search event
     fireEvent.click(searchBtn)

    //ResCards after search
     const resCard2 = screen?.getAllByTestId('resCard')
     expect(resCard2?.length).toBe(5)

  
     
  });


  it("Should filter out top rated restuarants",async ()=>{
    await act(async()=>{
      await render(
        <BrowserRouter>
        <BodyComponent/>
        </BrowserRouter>
      )
    }

    )
    //Cards before filter
    const resCardsInitial = screen?.getAllByTestId('resCard')
    expect(resCardsInitial?.length).toBe(20)

    //Top Rated button
    const btn = screen?.getByRole("button",{name:'Top Rated'})
    expect(btn).toBeInTheDocument();

    fireEvent?.click(btn);
   
    //Cards after filter
    const resCardsTopRated = screen?.getAllByTestId('resCard')
    expect(resCardsTopRated?.length).toBe(16)
  
  })