import { render,screen } from "@testing-library/react"
import ContactUsComponent from "../contactUs.component"
import "@testing-library/jest-dom"

describe("Test cases for contact us page",()=>{
    it("should load contact us component",()=>{
        render(<ContactUsComponent/>);
        const heading = screen?.getByRole("heading");
      
        expect(heading).toBeInTheDocument()
      })
      
      test("should load button inside contact component",()=>{
        render(<ContactUsComponent/>);
      //   const button = screen?.getByRole("button");
        const button = screen?.getByText("Submit");
      
        expect(button).toBeInTheDocument()
      })
      
      
      test("should load first name input inside contact component",()=>{
        render(<ContactUsComponent/>);
      //   const button = screen?.getByRole("button");
        const input = screen?.getByPlaceholderText("Enter first name")
      
        expect(input).toBeInTheDocument()
      })
      
      
      test("should load 2 input boxes on contact us page",()=>{
          render(<ContactUsComponent/>);
      
          const inputBoxes = screen.getAllByRole('textbox');
      
          expect(inputBoxes?.length).toBe(2)
          // expect(inputBoxes?.length).not.toBe(2)
      })
})
