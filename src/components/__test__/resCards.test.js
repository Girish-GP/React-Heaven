import { screen,render } from "@testing-library/react";
import { Provider} from ""
import {RestaurantCards} from "../RestuarantCards"
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