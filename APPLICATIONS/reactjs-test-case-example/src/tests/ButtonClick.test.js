import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonClick from '../component/ButtonClick';

test('renders ButtonClick Component', async () => {
    const mockHandleClick = jest.fn();
    render(<ButtonClick 
                msg={"adarsh"} 
                handleClick = {mockHandleClick}
          />)
    const dislayButton = screen.getByTestId('dislay') 
    await userEvent.click(dislayButton);
    expect(mockHandleClick).toHaveBeenCalled();  
})


test('renders clearClick Component', async () => {
    const mockHandleClick = jest.fn();
    render(<ButtonClick 
                msg={"adarsh"} 
        handleClick={mockHandleClick}
    />)
    
    const dislayButton = screen.getByTestId('dislay') 
   
    await act(() => {
          userEvent.click(dislayButton);
         expect(mockHandleClick).toHaveBeenCalled();  
    });
    
    const clearButton = screen.getByTestId('clear')     

    await act(() => {
         userEvent.click(clearButton);
        expect(mockHandleClick).toHaveBeenCalled();    
      });
})