import { render, screen } from '@testing-library/react';
import { MainApp } from './App'
import ReactDOM from 'react-dom'


// test('test MainApp', () => {
//   render(<MainApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('Renders MainApp', () =>{
  const div = document.createElement('div')
  ReactDOM.render(<MainApp />, div)
  ReactDOM.unmountComponentAtNode(div)

})
