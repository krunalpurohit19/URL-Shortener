import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routes/routeTree.js'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { inject } from "@vercel/analytics"

inject()

export const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    store
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>

)
