import Router from "router/Router";
import { BrowserRouter} from "react-router-dom";
import { defaultOptions } from "configs/reactQueryConfigs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layouts/Layout";

function App() {
  const queryClient = new QueryClient({dafaultOptions: defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
)}

export default App;
