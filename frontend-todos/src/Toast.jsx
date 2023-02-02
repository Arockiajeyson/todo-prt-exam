import React from 'react'
import { createContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
const Toasters = createContext()
export function Toast({ children }) {
    return (
        <div>
            <Toasters.Provider value={{ toast }}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        // Define default options
                        className: '',
                        duration: 5000,
                        style: {
                            background: '#363636',
                            color: '#fff',
                        },

                        // Default options for specific types
                        success: {
                            duration: 5000,
                            theme: {
                                primary: 'green',
                                secondary: 'black',
                            },
                        },
                    }}
                />
                {children}
            </Toasters.Provider>
        </div>
    )
}
export default Toasters;