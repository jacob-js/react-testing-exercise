import { render, screen } from '@testing-library/react';
import Skills from './Skills';


describe("Skills", () =>{
    const skills = ["HTML", "CSS", "Javascript"];

    test('renders correctly', () =>{
        render(<Skills skills={skills} />)

        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test('renders a list of skills', () =>{
        render(<Skills skills={skills} />);
        const listItemsElements = screen.getAllByRole('listitem');
        expect(listItemsElements).toHaveLength(skills.length)
    });

    test('renders Login button', () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });

    test('Start Learning button is not rendered', () =>{
        render(<Skills skills={skills} />)
        const startLearning = screen.queryByRole("button", {name: "Start learning"});
        expect(startLearning).not.toBeInTheDocument()
    })
})