
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../app/store'
import '../styles/variables.css'
import '../styles/global.css'

function ArtworksSerchEngineApp({ Component, pageProps 
}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default ArtworksSerchEngineApp