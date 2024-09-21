import {render, screen} from "@testing-library/react"
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

it("Should render body component with search input & search button", async()=>{

    await act(async()=>{
        render(
            <BrowserRouter>
            <BodyComponent/>
            </BrowserRouter>
            
        )
    });

    const searchBtn = screen?.getByText('Search');


    expect(searchBtn).toBeInTheDocument()
    
})