import Router from "router/Router";
import { BrowserRouter} from "react-router-dom";
import { defaultOptions } from "configs/reactQueryConfigs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({dafaultOptions: defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
)}

export default App;
