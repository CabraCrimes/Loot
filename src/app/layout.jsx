import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Loot",
    description: "Save money, play games!"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                {/* this is to change the background, the div bellow */}
                <div className='gradient'/>  
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout;