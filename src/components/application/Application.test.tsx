import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application", () =>{
    test("renders correctly", () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            level: 2
        });

        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();
        
        const nameElement = screen.getByPlaceholderText("Fullname");
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        });
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByLabelText("I agree to the terms and conditions");
        expect(termsElement).toBeInTheDocument();
    })
})