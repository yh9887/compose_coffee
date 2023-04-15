import "../brand.css";
import "../index.css";
import "../info.css";
import "../menu.css";
import "../news.css";
import "../home.css";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: any) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
        <div id="modal-root" />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
